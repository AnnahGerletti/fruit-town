exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('veggies', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('veggies')
};
