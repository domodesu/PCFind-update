@echo off
setlocal

REM Start lightweight static server for the built site on Windows
REM Prefer Node (quick-server.cjs). If Node not found, fall back to Python http.server.

REM Ensure we run from this script's directory
pushd "%~dp0"

set PORT=5173
set NODE_CMD=node
set NODE_FOUND=
where node >nul 2>nul
if errorlevel 1 (
  if exist "C:\Program Files\nodejs\node.exe" (
    set "NODE_CMD=C:\Program Files\nodejs\node.exe"
    set NODE_FOUND=1
  )
) else (
  set NODE_FOUND=1
)
if defined NODE_FOUND (
  echo Starting PCFind Node on http://localhost:%PORT% ...
  "%NODE_CMD%" "%~dp0quick-server.cjs"
) else (
  echo Node not found. Trying Python SimpleHTTPServer...
  set PY_FOUND=
  where python >nul 2>nul
  if not errorlevel 1 set PY_FOUND=1
  if defined PY_FOUND (
    echo Starting PCFind Python on http://localhost:%PORT% ...
    pushd "%~dp0site"
    python -m http.server %PORT%
    popd
  ) else (
    echo Neither Node nor Python is available.
    echo Please install Node.js LTS from https://nodejs.org/ and rerun this script.
    pause
  )
)

popd

