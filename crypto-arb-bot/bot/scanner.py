"""
bot/scanner.py — Concurrent price scanner using CCXT.

Fetches best bid/ask prices from all configured exchanges simultaneously
using threading (CCXT is sync; we parallelise with ThreadPoolExecutor).
Public endpoints only — no API keys required for ticker data.
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
class TickerSnapshot:
    """A single exchange's best bid/ask for one trading pair."""
    exchange: str
    pair: str
    bid: float          # Best bid (we can sell here)
    ask: float          # Best ask (we can buy here)
    timestamp: float    # Unix seconds
    error: Optional[str] = None


@dataclass
class PriceMatrix:
    """All ticker snapshots from one full scan round."""
    snapshots: List[TickerSnapshot] = field(default_factory=list)
    scan_time: float = field(default_factory=time.time)

    def by_pair(self, pair: str) -> List[TickerSnapshot]:
        """Return all snapshots for a given trading pair, skipping errored ones."""
        return [s for s in self.snapshots if s.pair == pair and s.error is None]

    def by_exchange(self, exchange: str) -> List[TickerSnapshot]:
        """Return all snapshots for a given exchange."""
        return [s for s in self.snapshots if s.exchange == exchange]

    def as_dict(self) -> Dict[str, Dict[str, dict]]:
        """Return { exchange -> { pair -> {bid, ask} } } for dashboard serialisation."""
        result: Dict[str, Dict[str, dict]] = {}
        for snap in self.snapshots:
            result.setdefault(snap.exchange, {})[snap.pair] = {
                "bid": snap.bid,
                "ask": snap.ask,
                "error": snap.error,
                "timestamp": snap.timestamp,
            }
        return result


# ─── Exchange Pool ────────────────────────────────────────────────────────────

# Map our config names to CCXT class names where they differ
_CCXT_CLASS_MAP: Dict[str, str] = {
    "binance": "binance",
    "coinbase": "coinbase",   # CCXT v4: use "coinbase" (Advanced Trade API)
    "kucoin":  "kucoin",
    "gateio":  "gateio",
}

_exchange_instances: Dict[str, ccxt.Exchange] = {}
_exchange_lock = threading.Lock()


def _get_exchange(name: str) -> ccxt.Exchange:
    """Return a cached CCXT exchange instance (created on first call)."""
    with _exchange_lock:
        if name not in _exchange_instances:
            ccxt_name = _CCXT_CLASS_MAP.get(name, name)
            exchange_class = getattr(ccxt, ccxt_name)
            creds = config.EXCHANGE_CONFIGS.get(name, {})
            instance = exchange_class({
                "enableRateLimit": True,
                "timeout": 10000,          # 10 s timeout per request
                **{k: v for k, v in creds.items() if v},  # skip empty strings
            })
            # Sandbox / paper mode has no exchange sandbox — we just read public data
            _exchange_instances[name] = instance
        return _exchange_instances[name]


# ─── Single-Exchange Fetch ────────────────────────────────────────────────────

def _fetch_ticker(exchange_name: str, pair: str) -> TickerSnapshot:
    """
    Fetch best bid/ask for one (exchange, pair) combination.
    Returns a TickerSnapshot with error set if anything goes wrong.
    """
    try:
        exchange = _get_exchange(exchange_name)
        ticker = exchange.fetch_ticker(pair)

        bid = ticker.get("bid") or ticker.get("bidPrice")
        ask = ticker.get("ask") or ticker.get("askPrice")

        if bid is None or ask is None or bid <= 0 or ask <= 0:
            raise ValueError(f"Invalid bid/ask: bid={bid} ask={ask}")

        return TickerSnapshot(
            exchange=exchange_name,
            pair=pair,
            bid=float(bid),
            ask=float(ask),
            timestamp=time.time(),
        )
    except ccxt.NetworkError as exc:
        return TickerSnapshot(exchange=exchange_name, pair=pair, bid=0, ask=0,
                              timestamp=time.time(), error=f"NetworkError: {exc}")
    except ccxt.ExchangeError as exc:
        return TickerSnapshot(exchange=exchange_name, pair=pair, bid=0, ask=0,
                              timestamp=time.time(), error=f"ExchangeError: {exc}")
    except Exception as exc:  # noqa: BLE001
        return TickerSnapshot(exchange=exchange_name, pair=pair, bid=0, ask=0,
                              timestamp=time.time(), error=f"{type(exc).__name__}: {exc}")


# ─── Full Scan ────────────────────────────────────────────────────────────────

class PriceScanner:
    """
    Scans all configured exchanges for all configured pairs in parallel.

    Usage:
        scanner = PriceScanner()
        matrix = scanner.scan()
    """

    def __init__(
        self,
        exchanges: Optional[List[str]] = None,
        pairs: Optional[List[str]] = None,
        max_workers: int = 16,
    ) -> None:
        self.exchanges = exchanges or list(config.EXCHANGE_FEES.keys())
        self.pairs = pairs or config.TRADING_PAIRS
        self.max_workers = max_workers

    def scan(self) -> PriceMatrix:
        """
        Fetch tickers for all (exchange, pair) combinations concurrently.
        Returns a PriceMatrix with all results (including errors).
        """
        tasks = [
            (exchange, pair)
            for exchange in self.exchanges
            for pair in self.pairs
        ]

        snapshots: List[TickerSnapshot] = []
        with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            futures = {
                executor.submit(_fetch_ticker, exchange, pair): (exchange, pair)
                for exchange, pair in tasks
            }
            for future in as_completed(futures):
                snapshots.append(future.result())

        return PriceMatrix(snapshots=snapshots, scan_time=time.time())
