const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/test') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found\n');
  }
});

const PORT = 3000;
const IP = '127.0.0.1';

server.listen(PORT, IP, () => {
  console.log(`Server running at http://${IP}:${PORT}/`);

  // Automatically stop the server after 5 seconds (5000 milliseconds)
  setTimeout(() => {
    server.close(() => {
      console.log('Server closed.');
    });
  }, 5000);
});
