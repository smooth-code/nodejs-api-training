import http from 'http'
import { Model } from 'objection'
import app from './app'
import knex from './knex'

Model.knex(knex)

const server = http.createServer(app)

server.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`)
})
