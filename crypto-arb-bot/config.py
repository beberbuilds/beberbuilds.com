"""
config.py — Central configuration for Crypto Arb Bot
All tunable parameters live here.
"""

from __future__ import annotations  # Python 3.8 compatibility for type hints

import os
from typing import Dict, List
from dotenv import load_dotenv

load_dotenv()

# ─── Trading Mode ────────────────────────────────────────────────────────────
PAPER_TRADING: bool = True          # Set False to enable live order execution

# Paper trading threshold: 0.05% — catches near-breakeven signals for simulation.
# For live trading raise this to 0.30%+ to ensure real profit after all costs.
MIN_PROFIT_PCT: float = 0.05

SCAN_INTERVAL_SECONDS: float = 2.0  # Seconds between full exchange scans
TRADE_SIZE_USD: float = 100.0       # Notional trade size for P&L estimation
TRADE_COOLDOWN_SECONDS: int = 30    # Seconds before the same pair can trade again

# ─── Pairs to Monitor ────────────────────────────────────────────────────────
# Mix of large-caps (tighter spreads, safer) and mid-caps (wider spreads = more signals)
TRADING_PAIRS: List[str] = [
    # Large-cap — low spread, occasional spikes
    "BTC/USDT",
    "ETH/USDT",
    "SOL/USDT",
    "XRP/USDT",
    # Mid-cap — wider spreads, more arb opportunities
    "DOGE/USDT",
    "ADA/USDT",
    "MATIC/USDT",
    "LINK/USDT",
    "AVAX/USDT",
    "DOT/USDT",
]

# ─── Exchange Taker Fees (%) ──────────────────────────────────────────────────
# Remove or comment out any exchange that causes repeated errors in your region
EXCHANGE_FEES: Dict[str, float] = {
    "binance": 0.10,
    "kucoin":  0.10,
    "gateio":  0.20,
    # "coinbase": 0.60,  # Uncomment if you have a Coinbase Advanced Trade API key
}

# ─── Slippage Estimate ───────────────────────────────────────────────────────
# Paper mode: 0.0 — no real slippage occurs in simulation.
# Live mode:  set to 0.05–0.10% to account for order book depth.
SLIPPAGE_PCT: float = 0.0 if PAPER_TRADING else 0.10

# ─── Starting Paper Capital Per Exchange (USD) ───────────────────────────────
PAPER_CAPITAL: float = 1000.0

# ─── Flask Dashboard ─────────────────────────────────────────────────────────
DASHBOARD_HOST: str = "0.0.0.0"
DASHBOARD_PORT: int = 5001

# ─── SQLite Database ─────────────────────────────────────────────────────────
DB_PATH: str = os.path.join(os.path.dirname(__file__), "arb_bot.db")

# ─── Exchange API Credentials (from .env) ───────────────────────────────────
EXCHANGE_CONFIGS: Dict[str, Dict] = {
    "binance": {
        "apiKey": os.getenv("BINANCE_API_KEY", ""),
        "secret": os.getenv("BINANCE_SECRET", ""),
    },
    "coinbase": {
        "apiKey": os.getenv("COINBASE_API_KEY", ""),
        "secret": os.getenv("COINBASE_SECRET", ""),
    },
    "kucoin": {
        "apiKey": os.getenv("KUCOIN_API_KEY", ""),
        "secret": os.getenv("KUCOIN_SECRET", ""),
        "password": os.getenv("KUCOIN_PASSPHRASE", ""),
    },
    "gateio": {
        "apiKey": os.getenv("GATEIO_API_KEY", ""),
        "secret": os.getenv("GATEIO_SECRET", ""),
    },
}

# ─── Logging ─────────────────────────────────────────────────────────────────
LOG_OPPORTUNITIES: bool = True   # Print every opportunity to console
LOG_ALL_SCANS: bool = False      # Print every scan even with no opportunity
