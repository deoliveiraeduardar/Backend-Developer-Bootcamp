const http = require('http');

const host = 'localhost';
const port = 8000;

const server = http.createServer(function (req, res) {
  res.writeHead(205, { 'Set-Cookie': 'type=ninja' });
  res.end('My second server');
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
