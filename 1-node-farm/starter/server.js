const http = require('http');

const server = http.createServer((request, response) => {
  response.end('Hello this is node server!');
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to the sever!');
})
