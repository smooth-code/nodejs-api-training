import http from 'http'

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`)
})
