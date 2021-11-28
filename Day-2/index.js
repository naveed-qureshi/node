// read file in asynchronously

const fs = require('fs')
const http = require('http')

const htmlTemplate = fs.readFileSync('./index.html', 'utf-8')

const server = http.createServer((request, response) => {
  fs.readFile('./longfile.txt', 'utf-8', (error, data) => {
    if(error) return

    // response.end(data)
    console.log(data)
  })
  console.log(htmlTemplate)
  response.end(htmlTemplate)
})

server.listen(8000)
