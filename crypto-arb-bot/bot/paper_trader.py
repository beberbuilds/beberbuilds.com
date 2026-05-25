"""
bot/paper_trader.py — Simulated paper trading engine.

Maintains virtual balances per exchange, enforces trade cooldowns,
and persists every simulated trade to the database.
"""

from __future__ import annotations

import time
from dataclasses import dataclass, field
from typing import Dict, Optional, Tuple

import config
from bot.calculator import ArbitrageOpportunity
from bot.database import Database


# ─── Portfolio State ──────────────────────────────────────────────────────────

@dataclass
class Portfolio:
    """Virtual balances across all exchanges."""
    # exchange -> USD balance
    balances: Dict[str, float] = field(default_factory=dict)

    def __post_init__(self) -> None:
        if not self.balances:
            self.balances = {
                ex: config.PAPER_CAPITAL
                for ex in config.EXCHANGE_FEES
            }

    @property
    def total_usd(self) -> float:
        return sum(self.balances.values())

    def can_afford(self, exchange: str, amount_usd: float) -> bool:
        return self.balances.get(exchange, 0) >= amount_usd

    def debit(self, exchange: str, amount_usd: float) -> None:
        self.balances[exchange] = self.balances.get(exchange, 0) - amount_usd

    def credit(self, exchange: str, amount_usd: float) -> None:
        self.balances[exchange] = self.balances.get(exchange, 0) + amount_usd


# ─── Paper Trader ─────────────────────────────────────────────────────────────

class PaperTrader:
    """
    Executes virtual trades based on detected ArbitrageOpportunity objects.

    Rules:
      - Both legs are simulated simultaneously (no real execution risk).
      - Trade size is fixed at config.TRADE_SIZE_USD.
      - Same pair cannot trade again for config.TRADE_COOLDOWN_SECONDS.
      - Only trades that pass min_profit_pct are executed.
    """

    def __init__(self, session_id: str, db: Database) -> None:
        self.session_id = session_id
        self.db = db
        self.portfolio = Portfolio()
        self._last_trade_time: Dict[str, float] = {}  # pair -> last trade unix ts
        self._trade_size = config.TRADE_SIZE_USD
        self._cooldown = config.TRADE_COOLDOWN_SECONDS

    # ── Cooldown helpers ──────────────────────────────────────────────────────

    def _on_cooldown(self, pair: str) -> bool:
        last = self._last_trade_time.get(pair, 0)
        return (time.time() - last) < self._cooldown

    def _seconds_remaining(self, pair: str) -> float:
        last = self._last_trade_time.get(pair, 0)
        remaining = self._cooldown - (time.time() - last)
        return max(0.0, remaining)

    # ── Trade Execution ───────────────────────────────────────────────────────

    def try_execute(
        self, opportunity: ArbitrageOpportunity
    ) -> Tuple[bool, str]:
        """
        Attempt to execute a paper trade for the given opportunity.

        Returns:
            (success: bool, reason: str)
        """
        if not opportunity.is_profitable:
            return False, f"Below min profit threshold ({config.MIN_PROFIT_PCT}%)"

        if self._on_cooldown(opportunity.pair):
            secs = self._seconds_remaining(opportunity.pair)
            return False, f"Cooldown active ({secs:.1f}s remaining)"

        if not self.portfolio.can_afford(opportunity.buy_exchange, self._trade_size):
            bal = self.portfolio.balances.get(opportunity.buy_exchange, 0)
            return False, f"Insufficient balance on {opportunity.buy_exchange}: ${bal:.2f}"

        # ── Simulate the trade ────────────────────────────────────────────────
        # Cost on buy side = trade_size (we spend USDT)
        # Revenue on sell side = trade_size * (sell_price / buy_price) * (after fees)
        cost_usd = self._trade_size

        buy_fee_multiplier   = 1 - opportunity.buy_fee_pct / 100
        sell_fee_multiplier  = 1 - opportunity.sell_fee_pct / 100
        slippage_multiplier  = (1 - config.SLIPPAGE_PCT / 100) ** 2

        revenue_usd = (
            cost_usd
            * (opportunity.sell_price / opportunity.buy_price)
            * buy_fee_multiplier
            * sell_fee_multiplier
            * slippage_multiplier
        )

        profit_usd = revenue_usd - cost_usd

        # Update virtual balances
        self.portfolio.debit(opportunity.buy_exchange, cost_usd)
        self.portfolio.credit(opportunity.sell_exchange, revenue_usd)

        # Persist trade
        self.db.insert_trade(
            session_id=self.session_id,
            pair=opportunity.pair,
            buy_exchange=opportunity.buy_exchange,
            sell_exchange=opportunity.sell_exchange,
            buy_price=opportunity.buy_price,
            sell_price=opportunity.sell_price,
            trade_size_usd=self._trade_size,
            gross_spread_pct=opportunity.gross_spread_pct,
            net_profit_pct=opportunity.net_profit_pct,
            profit_usd=round(profit_usd, 4),
        )

        # Record equity snapshot
        self.db.insert_equity_snapshot(self.session_id, self.portfolio.total_usd)

        # Set cooldown
        self._last_trade_time[opportunity.pair] = time.time()

        return True, (
            f"Trade executed: {opportunity.pair} "
            f"buy@{opportunity.buy_exchange} sell@{opportunity.sell_exchange} "
            f"profit=${profit_usd:.4f}"
        )

    # ── Portfolio Summary ─────────────────────────────────────────────────────

    def get_portfolio_snapshot(self) -> Dict:
        """Return current portfolio state for the dashboard."""
        stats = self.db.get_trade_stats(self.session_id)
        initial_total = config.PAPER_CAPITAL * len(config.EXCHANGE_FEES)
        current_total = self.portfolio.total_usd
        pnl_usd = current_total - initial_total
        pnl_pct = (pnl_usd / initial_total) * 100 if initial_total > 0 else 0

        return {
            "balances": {k: round(v, 2) for k, v in self.portfolio.balances.items()},
            "total_usd": round(current_total, 2),
            "initial_usd": round(initial_total, 2),
            "pnl_usd": round(pnl_usd, 4),
            "pnl_pct": round(pnl_pct, 4),
            **stats,
        }
