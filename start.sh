#!/usr/bin/env sh
set -e
DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
PORT="5173"

if command -v node >/dev/null 2>&1; then
  echo "Starting PCFind (Node) on http://localhost:${PORT} ..."
  exec node "$DIR/quick-server.cjs"
elif command -v python3 >/dev/null 2>&1; then
  echo "Starting PCFind (Python3) on http://localhost:${PORT} ..."
  cd "$DIR/site" && exec python3 -m http.server "$PORT"
elif command -v python >/dev/null 2>&1; then
  echo "Starting PCFind (Python) on http://localhost:${PORT} ..."
  cd "$DIR/site" && exec python -m http.server "$PORT"
else
  echo "Please install Node.js (recommended) or Python to run the local server."
  exit 1
fi

