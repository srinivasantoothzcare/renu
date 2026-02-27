@echo off
set "NODE_DIR=%~dp0node-v24.12.0-win-x64"
set "PATH=%NODE_DIR%;%PATH%"

echo Building Vite Application...
cd caredent
npm run build
pause
