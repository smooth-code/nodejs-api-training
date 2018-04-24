import Knex from 'knex'
import config from '../knexfile'

export default Knex(config[process.env.NODE_ENV || 'development'])
