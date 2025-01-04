const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.statusCode = 405; // Method Not Allowed
    res.setHeader('Allow', 'GET'); // Inform client of allowed methods
    res.end();
    return;
  }

  // ... rest of the request handling ...
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});