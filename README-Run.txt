PCFind - Local Run (No Dev Tools Needed)
========================================

This package contains a minimal static server and the built site located in the `site/` folder.

Windows
-------
1) Double-click `start-windows.cmd`
   - Uses Node if available; falls back to Python if present.
2) Your browser: open http://localhost:5173

macOS / Linux
-------------
1) Open Terminal in this folder
2) Run: `sh ./start.sh` (uses Node if available; falls back to Python)
3) Open: http://localhost:5173

Notes
-----
- Prefer Node.js (any recent version). If `node` is not on PATH, Windows script tries the default path. Both scripts can fall back to Python if Node is missing.
- To stop the server, close the terminal window or press Ctrl+C there.

