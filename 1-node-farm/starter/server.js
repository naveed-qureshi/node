const http = require('http');

const server = http.createServer((request, response) => {
  const pathUrl = request.url;

  if (pathUrl === '/product' || pathUrl === '/') {
    response.end('This is product page');
  }
  else if (pathUrl ===  '/review') {
    response.end('this is review page');
  }
  else {
    response.writeHead(400, {
      'Content-type' : 'text/html',
      'my-own-header' : 'hello wordl'
    })
    response.end('<h1>Page not found</h1>')
  }
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to the sever!');
})
