const express = require("express");
const compression = require("compression");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const appNext = next({ dev });
const handle = appNext.getRequestHandler();

const PORT = process.env.PORT || 3000;

appNext.prepare().then(() => {
  const server = express();

  // -------------------------------
  // Enable Gzip Compression
  // -------------------------------
  server.use(compression());

  // -------------------------------
  // Cache settings
  // -------------------------------
  server.use((req, res, nextFn) => {
    if (/\.(html|htm)$/.test(req.url)) {
      res.setHeader(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, max-age=0"
      );
    } else if (/\.(jpg|jpeg|png|gif|webp|svg|ico|css|js)$/.test(req.url)) {
      res.setHeader(
        "Cache-Control",
        "public, max-age=31536000, immutable"
      );
    }
    nextFn();
  });

  // -------------------------------
  // Next.js request handler
  // -------------------------------
  server.all("*", (req, res) => handle(req, res));

  // -------------------------------
  // Start server
  // -------------------------------
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
});
