"""
bot/database.py — SQLite persistence layer.

Creates and manages three tables:
  - trades        : Executed (paper) trades
  - opportunities : All detected arbitrage signals (profitable or not)
  - sessions      : Bot run sessions for equity curve

Uses the built-in sqlite3 module — no SQLAlchemy required.
"""

from __future__ import annotations

import sqlite3
import time
from contextlib import contextmanager
from typing import Dict, Generator, List, Optional

import config


# ─── Schema ───────────────────────────────────────────────────────────────────

_CREATE_TRADES = """
CREATE TABLE IF NOT EXISTS trades (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id      TEXT    NOT NULL,
    pair            TEXT    NOT NULL,
    buy_exchange    TEXT    NOT NULL,
    sell_exchange   TEXT    NOT NULL,
    buy_price       REAL    NOT NULL,
    sell_price      REAL    NOT NULL,
    trade_size_usd  REAL    NOT NULL,
    gross_spread_pct REAL   NOT NULL,
    net_profit_pct  REAL    NOT NULL,
    profit_usd      REAL    NOT NULL,
    executed_at     REAL    NOT NULL  -- Unix timestamp
);
"""

_CREATE_OPPORTUNITIES = """
CREATE TABLE IF NOT EXISTS opportunities (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id      TEXT    NOT NULL,
    pair            TEXT    NOT NULL,
    buy_exchange    TEXT    NOT NULL,
    sell_exchange   TEXT    NOT NULL,
    buy_price       REAL    NOT NULL,
    sell_price      REAL    NOT NULL,
    gross_spread_pct REAL   NOT NULL,
    net_profit_pct  REAL    NOT NULL,
    estimated_profit_usd REAL NOT NULL,
    is_profitable   INTEGER NOT NULL,  -- 0 or 1
    detected_at     REAL    NOT NULL
);
"""

_CREATE_SESSIONS = """
CREATE TABLE IF NOT EXISTS sessions (
    id          TEXT    PRIMARY KEY,
    started_at  REAL    NOT NULL,
    ended_at    REAL,
    paper_mode  INTEGER NOT NULL
);
"""

_CREATE_EQUITY = """
CREATE TABLE IF NOT EXISTS equity_snapshots (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id  TEXT    NOT NULL,
    ts          REAL    NOT NULL,
    equity_usd  REAL    NOT NULL
);
"""


# ─── Database Manager ─────────────────────────────────────────────────────────

class Database:
    """
    Thread-safe SQLite wrapper.

    Each method opens a short-lived connection using check_same_thread=False
    and WAL journal mode for concurrent read performance.
    """

    def __init__(self, db_path: str = config.DB_PATH) -> None:
        self.db_path = db_path
        self._init_schema()

    @contextmanager
    def _conn(self) -> Generator[sqlite3.Connection, None, None]:
        conn = sqlite3.connect(self.db_path, check_same_thread=False)
        conn.row_factory = sqlite3.Row
        conn.execute("PRAGMA journal_mode=WAL;")
        try:
            yield conn
            conn.commit()
        except Exception:
            conn.rollback()
            raise
        finally:
            conn.close()

    def _init_schema(self) -> None:
        """Create all tables if they don't exist."""
        with self._conn() as conn:
            conn.execute(_CREATE_TRADES)
            conn.execute(_CREATE_OPPORTUNITIES)
            conn.execute(_CREATE_SESSIONS)
            conn.execute(_CREATE_EQUITY)

    # ── Sessions ──────────────────────────────────────────────────────────────

    def start_session(self, session_id: str, paper_mode: bool = True) -> None:
        """Record a new bot session."""
        with self._conn() as conn:
            conn.execute(
                "INSERT OR IGNORE INTO sessions (id, started_at, paper_mode) VALUES (?, ?, ?)",
                (session_id, time.time(), int(paper_mode)),
            )

    def end_session(self, session_id: str) -> None:
        """Mark a session as ended."""
        with self._conn() as conn:
            conn.execute(
                "UPDATE sessions SET ended_at = ? WHERE id = ?",
                (time.time(), session_id),
            )

    # ── Trades ────────────────────────────────────────────────────────────────

    def insert_trade(
        self,
        session_id: str,
        pair: str,
        buy_exchange: str,
        sell_exchange: str,
        buy_price: float,
        sell_price: float,
        trade_size_usd: float,
        gross_spread_pct: float,
        net_profit_pct: float,
        profit_usd: float,
    ) -> int:
        """Insert a trade record, return its row id."""
        with self._conn() as conn:
            cursor = conn.execute(
                """
                INSERT INTO trades
                    (session_id, pair, buy_exchange, sell_exchange,
                     buy_price, sell_price, trade_size_usd,
                     gross_spread_pct, net_profit_pct, profit_usd, executed_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    session_id, pair, buy_exchange, sell_exchange,
                    buy_price, sell_price, trade_size_usd,
                    gross_spread_pct, net_profit_pct, profit_usd, time.time(),
                ),
            )
            return cursor.lastrowid  # type: ignore[return-value]

    def get_recent_trades(self, limit: int = 100) -> List[Dict]:
        """Return the most recent trades as a list of dicts."""
        with self._conn() as conn:
            rows = conn.execute(
                "SELECT * FROM trades ORDER BY executed_at DESC LIMIT ?", (limit,)
            ).fetchall()
        return [dict(row) for row in rows]

    def get_trade_stats(self, session_id: Optional[str] = None) -> Dict:
        """
        Compute aggregate stats across all trades (or for a specific session).

        Returns:
            total_profit_usd, win_rate_pct, total_trades, best_pair, best_profit_usd
        """
        where = "WHERE session_id = ?" if session_id else ""
        params = (session_id,) if session_id else ()

        with self._conn() as conn:
            row = conn.execute(
                f"""
                SELECT
                    COUNT(*)                            AS total_trades,
                    COALESCE(SUM(profit_usd), 0)        AS total_profit_usd,
                    COALESCE(
                        100.0 * SUM(CASE WHEN profit_usd > 0 THEN 1 ELSE 0 END)
                        / NULLIF(COUNT(*), 0), 0
                    )                                   AS win_rate_pct,
                    COALESCE(MAX(profit_usd), 0)        AS best_profit_usd
                FROM trades {where}
                """,
                params,
            ).fetchone()

            best_pair_row = conn.execute(
                f"""
                SELECT pair, SUM(profit_usd) AS total
                FROM trades {where}
                GROUP BY pair
                ORDER BY total DESC
                LIMIT 1
                """,
                params,
            ).fetchone()

        return {
            "total_trades": row["total_trades"],
            "total_profit_usd": round(row["total_profit_usd"], 4),
            "win_rate_pct": round(row["win_rate_pct"], 1),
            "best_profit_usd": round(row["best_profit_usd"], 4),
            "best_pair": best_pair_row["pair"] if best_pair_row else "—",
        }

    # ── Opportunities ─────────────────────────────────────────────────────────

    def insert_opportunity(
        self,
        session_id: str,
        pair: str,
        buy_exchange: str,
        sell_exchange: str,
        buy_price: float,
        sell_price: float,
        gross_spread_pct: float,
        net_profit_pct: float,
        estimated_profit_usd: float,
        is_profitable: bool,
    ) -> None:
        """Log an arbitrage opportunity (profitable or not)."""
        with self._conn() as conn:
            conn.execute(
                """
                INSERT INTO opportunities
                    (session_id, pair, buy_exchange, sell_exchange,
                     buy_price, sell_price, gross_spread_pct, net_profit_pct,
                     estimated_profit_usd, is_profitable, detected_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    session_id, pair, buy_exchange, sell_exchange,
                    buy_price, sell_price, gross_spread_pct, net_profit_pct,
                    estimated_profit_usd, int(is_profitable), time.time(),
                ),
            )

    def get_recent_opportunities(self, limit: int = 20) -> List[Dict]:
        """Return the most recent opportunities as a list of dicts."""
        with self._conn() as conn:
            rows = conn.execute(
                "SELECT * FROM opportunities ORDER BY detected_at DESC LIMIT ?",
                (limit,),
            ).fetchall()
        return [dict(row) for row in rows]

    def get_best_opportunity_ever(self) -> Optional[Dict]:
        """Return the single opportunity with the highest net_profit_pct."""
        with self._conn() as conn:
            row = conn.execute(
                "SELECT * FROM opportunities ORDER BY net_profit_pct DESC LIMIT 1"
            ).fetchone()
        return dict(row) if row else None

    # ── Equity Snapshots ──────────────────────────────────────────────────────

    def insert_equity_snapshot(self, session_id: str, equity_usd: float) -> None:
        """Record an equity data point for the chart."""
        with self._conn() as conn:
            conn.execute(
                "INSERT INTO equity_snapshots (session_id, ts, equity_usd) VALUES (?, ?, ?)",
                (session_id, time.time(), equity_usd),
            )

    def get_equity_series(self, session_id: str, limit: int = 200) -> List[Dict]:
        """Return equity curve data for Chart.js."""
        with self._conn() as conn:
            rows = conn.execute(
                """
                SELECT ts, equity_usd FROM equity_snapshots
                WHERE session_id = ?
                ORDER BY ts ASC
                LIMIT ?
                """,
                (session_id, limit),
            ).fetchall()
        return [dict(row) for row in rows]
