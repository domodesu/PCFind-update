// Minimal static server for the built site directory without any dependencies
// Serves files from the ./site folder on http://localhost:5173
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, 'site');
const port = 5173;

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  try {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    let filePath = path.join(root, urlPath);
    if (urlPath.endsWith('/')) filePath = path.join(root, 'index.html');
    if (!path.extname(filePath)) filePath += '.html';

    fs.stat(filePath, (err, stat) => {
      if (err || !stat.isFile()) {
        // Fallback to index.html for client routing
        const fallback = path.join(root, 'index.html');
        fs.readFile(fallback, (e2, data) => {
          if (e2) {
            res.writeHead(404);
            res.end('Not found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
          }
        });
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      const type = mime[ext] || 'application/octet-stream';
      fs.createReadStream(filePath)
        .on('open', () => {
          res.writeHead(200, { 'Content-Type': type });
        })
        .on('error', () => {
          res.writeHead(500);
          res.end('Server error');
        })
        .pipe(res);
    });
  } catch {
    res.writeHead(500);
    res.end('Server error');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Serving ./site on http://localhost:${port}`);
});


