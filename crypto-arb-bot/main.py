"""
main.py — Crypto Arbitrage Bot v1.0  Entry Point

Starts:
  1. The price scanner + arbitrage detection loop (background thread)
  2. The Flask dashboard on port 5001 (foreground)

Usage:
    python main.py

Environment:
    Copy .env.example → .env and fill in API keys for live trading.
    Paper trading works without any API keys (public endpoints only).
"""

from __future__ import annotations

import sys
import threading
import time
import uuid
from dataclasses import asdict

import config
from bot.calculator import ArbitrageCalculator
from bot.database import Database
from bot.paper_trader import PaperTrader
from bot.scanner import PriceScanner
from dashboard.app import bot_state, create_app


# ─── Optional coloured output ────────────────────────────────────────────────
try:
    from colorama import Fore, Style, init as colorama_init
    colorama_init(autoreset=True)
    _C = True
except ImportError:
    _C = False

def _g(s: str) -> str: return f"{Fore.GREEN}{s}{Style.RESET_ALL}" if _C else s
def _y(s: str) -> str: return f"{Fore.YELLOW}{s}{Style.RESET_ALL}" if _C else s
def _r(s: str) -> str: return f"{Fore.RED}{s}{Style.RESET_ALL}" if _C else s
def _c(s: str) -> str: return f"{Fore.CYAN}{s}{Style.RESET_ALL}" if _C else s
def _b(s: str) -> str: return f"{Fore.BLUE}{s}{Style.RESET_ALL}" if _C else s
def _m(s: str) -> str: return f"{Fore.MAGENTA}{s}{Style.RESET_ALL}" if _C else s
def _bold(s: str) -> str: return f"\033[1m{s}\033[0m"


def print_banner(session_id: str) -> None:
    """Print a coloured startup banner."""
    mode = _y("📄 PAPER TRADING") if config.PAPER_TRADING else _r("💸 LIVE TRADING")
    exchanges = "  ".join(_m(e.upper()) for e in config.EXCHANGE_FEES)
    pairs = "  ".join(_c(p) for p in config.TRADING_PAIRS)

    print()
    print(_b(_bold("╔══════════════════════════════════════════════════════╗")))
    print(_b(_bold("║         🤖  CRYPTO ARB BOT  v1.0  — BeberBuilds      ║")))
    print(_b(_bold("╚══════════════════════════════════════════════════════╝")))
    print()
    print(f"  Mode         : {mode}")
    print(f"  Session      : {_c(session_id[:16])}…")
    print(f"  Exchanges    : {exchanges}")
    print(f"  Pairs        : {pairs}")
    print(f"  Scan interval: {_y(str(config.SCAN_INTERVAL_SECONDS))}s")
    print(f"  Min profit   : {_g(str(config.MIN_PROFIT_PCT))}%  after fees + slippage")
    print(f"  Trade size   : ${_g(str(config.TRADE_SIZE_USD))}")
    print()
    print(f"  Dashboard    : {_g(f'http://localhost:{config.DASHBOARD_PORT}')}")
    print()
    print(_b("─" * 56))
    print()


# ─── Scanner Loop ─────────────────────────────────────────────────────────────

def scanner_loop(db: Database, paper_trader: PaperTrader, session_id: str) -> None:
    """
    Main bot loop — runs in a background thread.

    Each iteration:
      1. Fetch prices from all exchanges
      2. Detect arbitrage opportunities
      3. Log all opportunities to DB
      4. Paper-trade profitable ones
      5. Push updated state to the dashboard via bot_state
    """
    scanner    = PriceScanner()
    calculator = ArbitrageCalculator()
    scan_num   = 0

    bot_state.is_running = True
    bot_state.session_id = session_id

    while bot_state.is_running:
        loop_start = time.time()
        scan_num  += 1

        try:
            # 1. Fetch prices
            matrix = scanner.scan()
            bot_state.update_prices(matrix.as_dict())

            # 2. Detect opportunities
            opportunities = calculator.find_opportunities(matrix)

            # 3. Log to DB + format for dashboard
            opp_dicts = []
            for opp in opportunities:
                db.insert_opportunity(
                    session_id=session_id,
                    pair=opp.pair,
                    buy_exchange=opp.buy_exchange,
                    sell_exchange=opp.sell_exchange,
                    buy_price=opp.buy_price,
                    sell_price=opp.sell_price,
                    gross_spread_pct=opp.gross_spread_pct,
                    net_profit_pct=opp.net_profit_pct,
                    estimated_profit_usd=opp.estimated_profit_usd,
                    is_profitable=opp.is_profitable,
                )
                opp_dicts.append(asdict(opp))

            bot_state.update_opportunities(opp_dicts)

            # 4. Console log profitable opportunities
            if config.LOG_OPPORTUNITIES:
                for opp in opportunities:
                    if opp.is_profitable:
                        print(
                            f"  {_g('✓ OPPORTUNITY')}  "
                            f"{_c(opp.pair)}  "
                            f"buy@{_m(opp.buy_exchange)}({opp.buy_price:,.2f})  "
                            f"→ sell@{_m(opp.sell_exchange)}({opp.sell_price:,.2f})  "
                            f"net={_g(f'+{opp.net_profit_pct:.3f}%')}  "
                            f"~${_g(f'{opp.estimated_profit_usd:.4f}')}"
                        )

            # 5. Paper-trade best opportunity
            if config.PAPER_TRADING and opportunities:
                best = next((o for o in opportunities if o.is_profitable), None)
                if best:
                    success, reason = paper_trader.try_execute(best)
                    if success:
                        snapshot = paper_trader.get_portfolio_snapshot()
                        pnl_usd = snapshot["pnl_usd"]
                        pnl_pct = snapshot["pnl_pct"]
                        print(
                            f"  {_y('📋 PAPER TRADE')}  "
                            f"{_c(best.pair)}  "
                            f"P&L={_g(f'${pnl_usd:+.4f}')}  "
                            f"({_g(f'{pnl_pct:+.3f}%')})"
                        )

            # 6. Broadcast SSE update (dashboard JS listens for "scan" event)
            bot_state.broadcast("scan", {
                "scan_count": bot_state.scan_count,
                "opportunity_count": len(opportunities),
            })

            # Scan summary line (every 10 scans)
            if config.LOG_ALL_SCANS or scan_num % 10 == 0:
                profitable = sum(1 for o in opportunities if o.is_profitable)
                total      = len(opportunities)
                elapsed    = time.time() - loop_start
                print(
                    f"  Scan #{scan_num:>5}  "
                    f"opportunities={_c(str(total))}  "
                    f"profitable={_g(str(profitable))}  "
                    f"elapsed={elapsed*1000:.0f}ms"
                )

        except KeyboardInterrupt:
            break
        except Exception as exc:  # noqa: BLE001
            print(_r(f"  [ERROR] Scanner loop: {exc}"))

        # Sleep for remainder of interval
        elapsed = time.time() - loop_start
        sleep_for = max(0, config.SCAN_INTERVAL_SECONDS - elapsed)
        if sleep_for > 0:
            time.sleep(sleep_for)

    bot_state.is_running = False
    print(_y("\n  Bot loop stopped."))


# ─── Entry Point ──────────────────────────────────────────────────────────────

def main() -> None:
    session_id = str(uuid.uuid4())

    # Initialise persistence
    db           = Database()
    paper_trader = PaperTrader(session_id=session_id, db=db)

    db.start_session(session_id, paper_mode=config.PAPER_TRADING)

    print_banner(session_id)

    # Start scanner in background
    scan_thread = threading.Thread(
        target=scanner_loop,
        args=(db, paper_trader, session_id),
        daemon=True,
        name="ScannerLoop",
    )
    scan_thread.start()

    # Start Flask in foreground (blocks until Ctrl+C)
    flask_app = create_app(db=db, paper_trader=paper_trader)

    try:
        flask_app.run(
            host=config.DASHBOARD_HOST,
            port=config.DASHBOARD_PORT,
            debug=False,
            use_reloader=False,
            threaded=True,
        )
    except KeyboardInterrupt:
        pass
    finally:
        print(_y("\n  Shutting down…"))
        bot_state.is_running = False
        db.end_session(session_id)
        scan_thread.join(timeout=5)
        print(_g("  Goodbye! Session saved to arb_bot.db"))
        sys.exit(0)


if __name__ == "__main__":
    main()
