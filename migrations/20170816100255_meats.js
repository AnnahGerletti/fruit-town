
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('meats', (table) => {
    table.increments('id')
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('meats')
};
