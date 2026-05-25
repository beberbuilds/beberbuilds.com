"""
bot/calculator.py — Arbitrage opportunity calculator.

For each trading pair, checks every (buy_exchange, sell_exchange) permutation
and computes the net profit after taker fees and slippage.
"""

from __future__ import annotations

import time
from dataclasses import dataclass
from itertools import permutations
from typing import List, Optional

import config
from bot.scanner import PriceMatrix, TickerSnapshot


# ─── Data Structure ───────────────────────────────────────────────────────────

@dataclass
class ArbitrageOpportunity:
    """
    Represents a single detected cross-exchange arbitrage opportunity.

    Strategy:
        BUY  at ask price on buy_exchange
        SELL at bid price on sell_exchange
    """
    pair: str
    buy_exchange: str
    sell_exchange: str
    buy_price: float            # Ask price on buy exchange
    sell_price: float           # Bid price on sell exchange
    gross_spread_pct: float     # (sell - buy) / buy * 100, before fees
    net_profit_pct: float       # After buy fee + sell fee + slippage * 2
    estimated_profit_usd: float # Net profit for TRADE_SIZE_USD notional
    buy_fee_pct: float
    sell_fee_pct: float
    is_profitable: bool         # True when net_profit_pct > MIN_PROFIT_PCT
    detected_at: float          # Unix timestamp


# ─── Calculator ──────────────────────────────────────────────────────────────

class ArbitrageCalculator:
    """
    Scans a PriceMatrix and returns all detected arbitrage opportunities,
    sorted by net_profit_pct descending.
    """

    def __init__(
        self,
        min_profit_pct: float = config.MIN_PROFIT_PCT,
        slippage_pct: float = config.SLIPPAGE_PCT,
        trade_size_usd: float = config.TRADE_SIZE_USD,
        exchange_fees: Optional[dict] = None,
    ) -> None:
        self.min_profit_pct = min_profit_pct
        self.slippage_pct = slippage_pct
        self.trade_size_usd = trade_size_usd
        self.exchange_fees = exchange_fees or config.EXCHANGE_FEES

    def _net_profit(
        self,
        buy_price: float,
        sell_price: float,
        buy_exchange: str,
        sell_exchange: str,
    ) -> tuple[float, float, float, float]:
        """
        Compute gross spread, net profit (%), and estimated USD profit.

        Returns:
            (gross_spread_pct, net_profit_pct, estimated_profit_usd, buy_fee, sell_fee)
        """
        buy_fee = self.exchange_fees.get(buy_exchange, 0.20)    # %
        sell_fee = self.exchange_fees.get(sell_exchange, 0.20)  # %

        gross_spread_pct = (sell_price - buy_price) / buy_price * 100

        # Total cost: buy fee + sell fee + slippage on each leg
        total_cost_pct = buy_fee + sell_fee + self.slippage_pct * 2

        net_profit_pct = gross_spread_pct - total_cost_pct

        # USD profit for the configured notional trade size
        estimated_profit_usd = self.trade_size_usd * (net_profit_pct / 100)

        return gross_spread_pct, net_profit_pct, estimated_profit_usd, buy_fee, sell_fee

    def find_opportunities(self, matrix: PriceMatrix) -> List[ArbitrageOpportunity]:
        """
        Analyse a PriceMatrix and return all detected opportunities.

        Only opportunities where net_profit_pct > 0 are included;
        is_profitable is True only if net_profit_pct > min_profit_pct.
        """
        opportunities: List[ArbitrageOpportunity] = []
        now = time.time()

        for pair in config.TRADING_PAIRS:
            snapshots = matrix.by_pair(pair)
            if len(snapshots) < 2:
                continue

            # Check every ordered (buy, sell) permutation
            for buy_snap, sell_snap in permutations(snapshots, 2):
                buy_price = buy_snap.ask   # We pay the ask when buying
                sell_price = sell_snap.bid  # We receive the bid when selling

                if buy_price <= 0 or sell_price <= 0:
                    continue

                gross_pct, net_pct, profit_usd, buy_fee, sell_fee = self._net_profit(
                    buy_price, sell_price,
                    buy_snap.exchange, sell_snap.exchange,
                )

                # Only keep if there is any positive gross spread
                if gross_pct <= 0:
                    continue

                opp = ArbitrageOpportunity(
                    pair=pair,
                    buy_exchange=buy_snap.exchange,
                    sell_exchange=sell_snap.exchange,
                    buy_price=buy_price,
                    sell_price=sell_price,
                    gross_spread_pct=round(gross_pct, 4),
                    net_profit_pct=round(net_pct, 4),
                    estimated_profit_usd=round(profit_usd, 4),
                    buy_fee_pct=buy_fee,
                    sell_fee_pct=sell_fee,
                    is_profitable=net_pct >= self.min_profit_pct,
                    detected_at=now,
                )
                opportunities.append(opp)

        # Sort best first
        opportunities.sort(key=lambda o: o.net_profit_pct, reverse=True)
        return opportunities

    def best_opportunity(self, matrix: PriceMatrix) -> Optional[ArbitrageOpportunity]:
        """Return the single best opportunity, or None if none found."""
        opps = self.find_opportunities(matrix)
        return opps[0] if opps else None
