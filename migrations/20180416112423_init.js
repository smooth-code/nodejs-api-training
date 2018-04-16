exports.up = knex =>
  knex.schema.createTable('articles', table => {
    table.increments()
    table.string('title')
    table.string('content')
  })

exports.down = knex => knex.schema.dropTableIfExists('articles')
