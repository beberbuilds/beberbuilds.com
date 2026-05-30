"""
bot/funding_scanner.py — Funding Rate Arbitrage Scanner

Fetches perpetual futures funding rates from exchanges.
Strategy: long spot + short perpetual = collect funding when rate > 0.
Best exchanges: Binance USDM futures, Bybit, Gate.io perps

Funding is settled every 8 hours at: 00:00, 08:00, 16:00 UTC
"""

from __future__ import annotations

import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass, field
from typing import Dict, List, Optional

import ccxt

import config


# ─── Data Structures ─────────────────────────────────────────────────────────

@dataclass
class FundingRateSnapshot:
    """Funding rate data for one exchange + perpetual pair."""
    exchange: str
    pair: str
    rate_8h: float          # Funding rate per 8-hour period (%)
    annual_pct: float       # Annualised percentage (rate_8h * 3 * 365)
    next_settlement_ts: float  # Unix timestamp of the next funding settlement
    is_opportunity: bool    # True when rate_8h > MIN_FUNDING_RATE_8H config
    error: Optional[str] = None


# ─── Exchange Pool ────────────────────────────────────────────────────────────

# Map our config exchange names to CCXT class names and market options
_FUNDING_EXCHANGE_MAP: Dict[str, Dict] = {
    "binanceusdm": {
        "ccxt_class": "binanceusdm",
        "options": {"defaultType": "future"},
    },
    "bybit": {
        "ccxt_class": "bybit",
        "options": {"defaultType": "swap"},
    },
    "gate": {
        "ccxt_class": "gate",
        "options": {"defaultType": "swap"},
    },
}

_funding_exchange_instances: Dict[str, ccxt.Exchange] = {}
_funding_exchange_lock = threading.Lock()


def _get_funding_exchange(name: str) -> ccxt.Exchange:
    """Return a cached CCXT exchange instance for futures/perp markets."""
    with _funding_exchange_lock:
        if name not in _funding_exchange_instances:
            cfg = _FUNDING_EXCHANGE_MAP.get(name, {"ccxt_class": name, "options": {}})
            ccxt_class_name = cfg["ccxt_class"]
            exchange_class = getattr(ccxt, ccxt_class_name)
            # Pull any stored credentials (may be empty strings for paper mode)
            creds = config.EXCHANGE_CONFIGS.get(name, {})
            # Also check name variants (e.g. "binanceusdm" not in EXCHANGE_CONFIGS)
            if not any(creds.values()):
                creds = {}
            instance = exchange_class({
                "enableRateLimit": True,
                "timeout": 15000,
                **cfg["options"],
                **{k: v for k, v in creds.items() if v},
            })
            _funding_exchange_instances[name] = instance
        return _funding_exchange_instances[name]


# ─── Timing Helper ───────────────────────────────────────────────────────────

def seconds_to_next_funding() -> float:
    """
    Static helper — returns float seconds until the next 8-hour funding
    settlement (00:00, 08:00, or 16:00 UTC).
    """
    now = time.time()
    # Current hour within the day (UTC)
    utc_hour = time.gmtime(now).tm_hour
    utc_min   = time.gmtime(now).tm_min
    utc_sec   = time.gmtime(now).tm_sec

    settlement_hours = [0, 8, 16, 24]  # 24 → midnight next day
    next_hour = next((h for h in settlement_hours if h > utc_hour), 24)

    # Seconds remaining to the next settlement hour
    secs_past_hour = utc_min * 60 + utc_sec
    secs_to_next   = (next_hour - utc_hour) * 3600 - secs_past_hour
    return max(0.0, float(secs_to_next))


# ─── Single-Exchange Fetch ────────────────────────────────────────────────────

def _fetch_funding_rate(exchange_name: str, symbol: str) -> FundingRateSnapshot:
    """
    Fetch the current funding rate for one (exchange, perpetual symbol) combination.
    Tries fetchFundingRate first; falls back to fetchFundingRates (batch).
    Returns a FundingRateSnapshot with error set if anything goes wrong.
    """
    min_rate = config.MIN_FUNDING_RATE_8H  # % per 8h

    # Unix timestamp of next 8h settlement
    next_ts = time.time() + seconds_to_next_funding()

    try:
        exchange = _get_funding_exchange(exchange_name)

        rate_raw: Optional[float] = None

        # Attempt 1: per-symbol endpoint
        if exchange.has.get("fetchFundingRate"):
            try:
                info = exchange.fetchFundingRate(symbol)
                rate_raw = info.get("fundingRate")
            except Exception:
                rate_raw = None

        # Attempt 2: batch endpoint
        if rate_raw is None and exchange.has.get("fetchFundingRates"):
            try:
                rates = exchange.fetchFundingRates([symbol])
                info = rates.get(symbol, {})
                rate_raw = info.get("fundingRate")
            except Exception:
                rate_raw = None

        if rate_raw is None:
            raise ValueError("No funding rate data returned")

        rate_8h     = float(rate_raw) * 100         # Convert fraction → percent
        annual_pct  = rate_8h * 3 * 365             # 3 settlements/day × 365 days

        return FundingRateSnapshot(
            exchange=exchange_name,
            pair=symbol,
            rate_8h=round(rate_8h, 6),
            annual_pct=round(annual_pct, 4),
            next_settlement_ts=next_ts,
            is_opportunity=(rate_8h > min_rate),
        )

    except ccxt.NetworkError as exc:
        return FundingRateSnapshot(
            exchange=exchange_name, pair=symbol,
            rate_8h=0.0, annual_pct=0.0,
            next_settlement_ts=next_ts,
            is_opportunity=False,
            error=f"NetworkError: {exc}",
        )
    except ccxt.ExchangeError as exc:
        return FundingRateSnapshot(
            exchange=exchange_name, pair=symbol,
            rate_8h=0.0, annual_pct=0.0,
            next_settlement_ts=next_ts,
            is_opportunity=False,
            error=f"ExchangeError: {exc}",
        )
    except Exception as exc:  # noqa: BLE001
        return FundingRateSnapshot(
            exchange=exchange_name, pair=symbol,
            rate_8h=0.0, annual_pct=0.0,
            next_settlement_ts=next_ts,
            is_opportunity=False,
            error=f"{type(exc).__name__}: {exc}",
        )


# ─── Full Scanner ─────────────────────────────────────────────────────────────

class FundingScanner:
    """
    Scans all configured funding-rate exchanges for all configured perpetual
    pairs in parallel.

    Usage:
        scanner = FundingScanner()
        snapshots = scanner.scan()   # list[FundingRateSnapshot]
    """

    def __init__(
        self,
        exchanges: Optional[List[str]] = None,
        pairs: Optional[List[str]] = None,
        max_workers: int = 12,
    ) -> None:
        self.exchanges   = exchanges or config.FUNDING_EXCHANGES
        self.pairs       = pairs     or config.FUNDING_RATE_PAIRS
        self.max_workers = max_workers

    def scan(self) -> List[FundingRateSnapshot]:
        """
        Fetch funding rates for all (exchange, pair) combinations concurrently.
        Returns a list of FundingRateSnapshot objects (including error ones).
        """
        tasks = [
            (exchange, pair)
            for exchange in self.exchanges
            for pair in self.pairs
        ]

        results: List[FundingRateSnapshot] = []
        with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            futures = {
                executor.submit(_fetch_funding_rate, exchange, pair): (exchange, pair)
                for exchange, pair in tasks
            }
            for future in as_completed(futures):
                results.append(future.result())

        # Sort by annual_pct descending (best opportunities first)
        results.sort(key=lambda r: r.annual_pct, reverse=True)
        return results

    @staticmethod
    def seconds_to_next_funding() -> float:
        """Proxy to the module-level helper for convenience."""
        return seconds_to_next_funding()
