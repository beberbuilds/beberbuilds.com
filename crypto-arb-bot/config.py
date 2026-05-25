"""
config.py — Central configuration for Crypto Arb Bot
All tunable parameters live here.
"""

import os
from dotenv import load_dotenv

load_dotenv()

# ─── Trading Mode ────────────────────────────────────────────────────────────
PAPER_TRADING: bool = True          # Set False to enable live order execution
MIN_PROFIT_PCT: float = 0.3         # Minimum net profit % to flag as opportunity
SCAN_INTERVAL_SECONDS: float = 2.0  # Seconds between full exchange scans
TRADE_SIZE_USD: float = 100.0       # Notional trade size for P&L estimation
TRADE_COOLDOWN_SECONDS: int = 30    # Seconds before the same pair can trade again

# ─── Pairs to Monitor ────────────────────────────────────────────────────────
TRADING_PAIRS: list[str] = [
    "BTC/USDT",
    "ETH/USDT",
    "BNB/USDT",
    "SOL/USDT",
    "XRP/USDT",
]

# ─── Exchange Taker Fees (%) ──────────────────────────────────────────────────
EXCHANGE_FEES: dict[str, float] = {
    "binance": 0.10,
    "coinbase": 0.60,
    "kucoin":  0.10,
    "gateio":  0.20,
}

# ─── Slippage Estimate ───────────────────────────────────────────────────────
SLIPPAGE_PCT: float = 0.10  # Assumed slippage per leg (%)

# ─── Starting Paper Capital Per Exchange (USD) ───────────────────────────────
PAPER_CAPITAL: float = 1000.0

# ─── Flask Dashboard ─────────────────────────────────────────────────────────
DASHBOARD_HOST: str = "0.0.0.0"
DASHBOARD_PORT: int = 5001

# ─── SQLite Database ─────────────────────────────────────────────────────────
DB_PATH: str = os.path.join(os.path.dirname(__file__), "arb_bot.db")

# ─── Exchange API Credentials (from .env) ───────────────────────────────────
EXCHANGE_CONFIGS: dict[str, dict] = {
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
