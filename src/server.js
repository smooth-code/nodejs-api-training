import http from 'http'
import app from './app'
import setupDatabase from './setupDatabase'

setupDatabase()

const server = http.createServer(app)

server.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`)
})
