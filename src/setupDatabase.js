import { Model } from 'objection'
import knex from './knex'

function setupDatabase() {
  Model.knex(knex)
}

export default setupDatabase
