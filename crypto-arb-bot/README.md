# Crypto ARB Bot v1.0

Cross-exchange cryptocurrency arbitrage scanner and paper trading bot.

Monitors **Binance**, **Coinbase**, **KuCoin**, and **Gate.io** simultaneously for price discrepancies across BTC/USDT, ETH/USDT, BNB/USDT, SOL/USDT, and XRP/USDT. Calculates net profit after exchange fees and slippage. Executes simulated paper trades automatically.

## Features

- Real-time price scanning across 4 CEXes using CCXT (public API, no keys needed for paper mode)
- Arbitrage opportunity detection with fee + slippage-adjusted net profit calculation
- Paper trading engine with virtual portfolio and trade cooldowns
- SQLite persistence for trades, opportunities, and equity curve
- Flask dashboard on port 5001 with live price table, opportunity feed, trade history, and equity chart
- Server-Sent Events for real-time dashboard updates
- Coloured terminal output

## Quick Start

```bash
cd crypto-arb-bot

# 1. Install dependencies
pip install -r requirements.txt

# 2. (Optional) Set up API keys for live trading
cp .env.example .env
# Edit .env with your exchange credentials

# 3. Run the bot
python main.py
```

Open `http://localhost:5001` in your browser.

## Configuration

All settings are in `config.py`:

| Parameter | Default | Description |
|-----------|---------|-------------|
| `PAPER_TRADING` | `True` | Toggle live order execution |
| `MIN_PROFIT_PCT` | `0.3` | Min net profit % to flag/trade |
| `SCAN_INTERVAL_SECONDS` | `2.0` | Seconds between scans |
| `TRADE_SIZE_USD` | `100.0` | Notional size per paper trade |
| `TRADE_COOLDOWN_SECONDS` | `30` | Cooldown per pair after trade |
| `PAPER_CAPITAL` | `1000.0` | Starting virtual USD per exchange |

## Project Structure

```
crypto-arb-bot/
├── main.py                  # Entry point
├── config.py                # All configuration
├── requirements.txt
├── .env.example             # API key template
├── arb_bot.db               # SQLite DB (created on first run)
├── bot/
│   ├── scanner.py           # CCXT price fetcher (ThreadPoolExecutor)
│   ├── calculator.py        # Arbitrage opportunity detector
│   ├── paper_trader.py      # Paper trading engine
│   └── database.py          # SQLite layer
└── dashboard/
    ├── app.py               # Flask app factory
    └── templates/
        └── index.html       # Dark-theme dashboard
```

## Profit Calculation

```
gross_spread    = (sell_bid - buy_ask) / buy_ask × 100
total_cost      = buy_fee% + sell_fee% + slippage% × 2
net_profit_pct  = gross_spread - total_cost
```

Exchange fees used: Binance 0.10%, Coinbase 0.60%, KuCoin 0.10%, Gate.io 0.20%.
Slippage estimate: 0.10% per leg.

## Going Live

1. Set `PAPER_TRADING = False` in `config.py`
2. Add real API keys to `.env`
3. Implement real order execution in `bot/paper_trader.py` (replace the simulation logic with CCXT `create_order()` calls)
4. **Test with tiny amounts first**

> **Disclaimer**: This is educational software. Crypto arbitrage carries significant risks including execution risk, API failures, network latency, and capital loss. Use at your own risk.
