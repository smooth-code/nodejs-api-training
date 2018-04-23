exports.up = knex =>
  knex.schema.createTable('documents', table => {
    table.increments()
    table.string('name')
    table.string('path')
    table.string('article_id')
  })

exports.down = knex => knex.schema.dropTableIfExists('documents')
