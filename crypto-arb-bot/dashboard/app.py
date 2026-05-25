"""
dashboard/app.py — Flask web dashboard for Crypto Arb Bot.

Routes:
  GET /                    — Main dashboard HTML
  GET /api/opportunities   — Latest 20 arbitrage opportunities (JSON)
  GET /api/trades          — Recent 100 trades (JSON)
  GET /api/stats           — Aggregate P&L stats (JSON)
  GET /api/prices          — Current prices across all exchanges (JSON)
  GET /api/equity          — Equity curve series for Chart.js (JSON)
  GET /api/stream          — Server-Sent Events stream for real-time push

The Flask app is created by create_app() and run from main.py.
It receives live data via a shared BotState object that the scanner loop updates.
"""

from __future__ import annotations

import json
import queue
import threading
import time
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional

from flask import Flask, Response, jsonify, render_template, stream_with_context
from flask_cors import CORS

import config


# ─── Shared Bot State ─────────────────────────────────────────────────────────

@dataclass
class BotState:
    """
    Thread-safe container that the scanner loop writes to and Flask reads from.
    All attributes are replaced atomically via a lock.
    """
    _lock: threading.Lock = field(default_factory=threading.Lock, repr=False)

    prices: Dict[str, Any] = field(default_factory=dict)
    opportunities: List[Dict] = field(default_factory=list)
    session_id: str = ""
    is_running: bool = False
    paper_mode: bool = config.PAPER_TRADING
    last_scan_ts: float = 0.0
    scan_count: int = 0

    # SSE subscriber queues — one per connected browser tab
    _subscribers: List[queue.Queue] = field(default_factory=list, repr=False)

    def update_prices(self, prices: Dict[str, Any]) -> None:
        with self._lock:
            self.prices = prices
            self.last_scan_ts = time.time()
            self.scan_count += 1

    def update_opportunities(self, opportunities: List[Dict]) -> None:
        with self._lock:
            self.opportunities = opportunities

    def get_prices(self) -> Dict[str, Any]:
        with self._lock:
            return dict(self.prices)

    def get_opportunities(self) -> List[Dict]:
        with self._lock:
            return list(self.opportunities)

    def subscribe(self) -> queue.Queue:
        """Register a new SSE client and return their queue."""
        q: queue.Queue = queue.Queue(maxsize=20)
        with self._lock:
            self._subscribers.append(q)
        return q

    def unsubscribe(self, q: queue.Queue) -> None:
        with self._lock:
            try:
                self._subscribers.remove(q)
            except ValueError:
                pass

    def broadcast(self, event: str, data: Any) -> None:
        """Push an SSE event to all connected clients."""
        payload = f"event: {event}\ndata: {json.dumps(data)}\n\n"
        with self._lock:
            dead: List[queue.Queue] = []
            for q in self._subscribers:
                try:
                    q.put_nowait(payload)
                except queue.Full:
                    dead.append(q)
            for q in dead:
                self._subscribers.remove(q)


# Singleton state shared between scanner thread and Flask
bot_state = BotState()


# ─── App Factory ──────────────────────────────────────────────────────────────

def create_app(db, paper_trader=None) -> Flask:
    """
    Create and configure the Flask application.

    Args:
        db:           Database instance (bot.database.Database)
        paper_trader: PaperTrader instance (or None for read-only mode)
    """
    app = Flask(__name__, template_folder="templates")
    CORS(app)

    # ── Main Dashboard ────────────────────────────────────────────────────────

    @app.route("/")
    def index():
        """Render the main dashboard page."""
        return render_template(
            "index.html",
            paper_mode=config.PAPER_TRADING,
            exchanges=list(config.EXCHANGE_FEES.keys()),
            pairs=config.TRADING_PAIRS,
            session_id=bot_state.session_id,
        )

    # ── REST API ──────────────────────────────────────────────────────────────

    @app.route("/api/opportunities")
    def api_opportunities():
        """Return the latest 20 arbitrage opportunities."""
        rows = db.get_recent_opportunities(limit=20)
        return jsonify(rows)

    @app.route("/api/trades")
    def api_trades():
        """Return the most recent 100 trades."""
        rows = db.get_recent_trades(limit=100)
        return jsonify(rows)

    @app.route("/api/stats")
    def api_stats():
        """Return aggregate P&L and portfolio stats."""
        stats = db.get_trade_stats()
        portfolio: Dict[str, Any] = {}
        if paper_trader is not None:
            portfolio = paper_trader.get_portfolio_snapshot()

        best_opp = db.get_best_opportunity_ever()
        best_opp_pct = best_opp["net_profit_pct"] if best_opp else 0.0
        best_opp_pair = (
            f"{best_opp['pair']} {best_opp['buy_exchange']}→{best_opp['sell_exchange']}"
            if best_opp else "—"
        )

        return jsonify({
            **stats,
            **portfolio,
            "best_opp_pct": round(best_opp_pct, 4),
            "best_opp_label": best_opp_pair,
            "paper_mode": config.PAPER_TRADING,
            "scan_count": bot_state.scan_count,
            "last_scan_ts": bot_state.last_scan_ts,
            "is_running": bot_state.is_running,
        })

    @app.route("/api/prices")
    def api_prices():
        """Return current bid/ask prices across all exchanges."""
        prices = bot_state.get_prices()
        return jsonify({
            "prices": prices,
            "last_scan_ts": bot_state.last_scan_ts,
            "scan_count": bot_state.scan_count,
        })

    @app.route("/api/equity")
    def api_equity():
        """Return equity curve data for Chart.js."""
        series = db.get_equity_series(bot_state.session_id, limit=200)
        return jsonify(series)

    # ── Server-Sent Events ────────────────────────────────────────────────────

    @app.route("/api/stream")
    def api_stream():
        """
        SSE endpoint — browsers subscribe here for real-time push updates.
        The scanner loop calls bot_state.broadcast() after each scan.
        """
        q = bot_state.subscribe()

        def generate():
            # Send a heartbeat immediately so the browser knows it's alive
            yield "event: heartbeat\ndata: {}\n\n"
            try:
                while True:
                    try:
                        msg = q.get(timeout=25)   # 25 s heartbeat interval
                        yield msg
                    except queue.Empty:
                        yield "event: heartbeat\ndata: {}\n\n"
            except GeneratorExit:
                pass
            finally:
                bot_state.unsubscribe(q)

        return Response(
            stream_with_context(generate()),
            mimetype="text/event-stream",
            headers={
                "Cache-Control": "no-cache",
                "X-Accel-Buffering": "no",
            },
        )

    # ── Health check ──────────────────────────────────────────────────────────

    @app.route("/health")
    def health():
        return jsonify({"status": "ok", "ts": time.time()})

    return app
