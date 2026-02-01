/**
 * Custom Next.js Production Server for Plesk Deployment
 * This file is used to start the Next.js application on Plesk hosting
 */

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Environment configuration
const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const preferredPort = parseInt(process.env.PORT || '4000', 10);
const maxPortAttempts = 10; // จะลองพอร์ต 10 ตัว

// Function to try starting server on a port
function tryListen(app, handle, port, attempt = 0) {
  if (attempt >= maxPortAttempts) {
    console.error(`❌ ไม่สามารถหาพอร์ตว่างได้หลังจากลอง ${maxPortAttempts} พอร์ต`);
    process.exit(1);
  }

  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal server error');
    }
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️  พอร์ต ${port} ไม่ว่าง ลองพอร์ต ${port + 1}...`);
      server.close();
      tryListen(app, handle, port + 1, attempt + 1);
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });

  server.listen(port, hostname, () => {
    console.log(`✅ Ready on http://${hostname}:${port}`);
    console.log(`> Environment: ${process.env.NODE_ENV}`);
    if (port !== preferredPort) {
      console.log(`> หมายเหตุ: ใช้พอร์ต ${port} แทนพอร์ต ${preferredPort} ที่ไม่ว่าง`);
    }
  });
}

// Initialize Next.js app
const app = next({ dev, hostname, port: preferredPort });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  tryListen(app, handle, preferredPort);

  // Graceful shutdown
  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    process.exit(0);
  });

  process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server');
    process.exit(0);
  });
});
