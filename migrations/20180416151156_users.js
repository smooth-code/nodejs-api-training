exports.up = knex =>
  knex.schema
    .createTable('users', table => {
      table.increments()
      table.string('email')
      table.string('client_id')
      table.string('client_secret')
    })
    .createTable('tokens', table => {
      table.increments()
      table
        .integer('user_id')
        .index()
        .references('id')
        .inTable('users')
        .notNullable()
      table.string('token')
      table.dateTime('expiration_date')
    })

exports.down = knex =>
  knex.schema.dropTableIfExists('users').dropTableIfExists('tokens')
