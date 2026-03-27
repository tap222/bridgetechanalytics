const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3443;

// Serve everything in /public as static files
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all: always return index.html (single-page app)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
};

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`✅ BridgeTech Platform running on https://localhost:${PORT}`);
});
