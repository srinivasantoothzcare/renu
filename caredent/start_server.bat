@echo off
echo Starting CareDent Vite Development Server...
cd /d "%~dp0"

:: Set the path to the standalone Node.js directory
set "NODE_DIR=%~dp0node-v24.12.0-win-x64"

:: Add the standalone node directory to the beginning of PATH for this session
set "PATH=%NODE_DIR%;%PATH%"

:: Run the dev server using the standalone npm
call npm run dev
pause
