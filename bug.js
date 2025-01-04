const http = require('http');

const server = http.createServer((req, res) => {
  // Without this check, the server will crash on any request other than GET
  if (req.method !== 'GET') {
    res.statusCode = 405; // Method Not Allowed
    res.end();
    return; // Important to prevent further processing
  }

  // ... rest of the request handling ...
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});