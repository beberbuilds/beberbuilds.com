@echo off
title CryptoARB Bot v1.0

echo.
echo  ==========================================
echo   CRYPTO ARB BOT v1.0 - BeberBuilds
echo  ==========================================
echo.

:: Check Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo  [ERROR] Python not found. Download from https://www.python.org
    pause
    exit /b 1
)

:: Show Python version
echo  Python:
python --version

:: Check pip
pip --version >nul 2>&1
if errorlevel 1 (
    echo  [ERROR] pip not found. Reinstall Python with "Add to PATH" checked.
    pause
    exit /b 1
)

:: Install dependencies if needed
echo.
echo  Installing / checking dependencies...
pip install -r requirements.txt --quiet
if errorlevel 1 (
    echo.
    echo  [ERROR] pip install failed. See above for details.
    pause
    exit /b 1
)

echo  Dependencies OK
echo.
echo  Starting bot... Dashboard will open at http://localhost:5001
echo  Press Ctrl+C to stop.
echo.

:: Run bot — errors go to both console AND bot_error.log
python main.py 2>&1 | tee bot_error.log

echo.
echo  Bot stopped. Check bot_error.log if it crashed unexpectedly.
pause
