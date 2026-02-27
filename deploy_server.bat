@echo off
set "NODE_DIR=%~dp0node-v24.12.0-win-x64"
set "PATH=%NODE_DIR%;%PATH%"

echo Installing gh-pages...
cd caredent
call npm install gh-pages --save-dev

echo Deploying to GitHub Pages...
call npm run deploy
pause
