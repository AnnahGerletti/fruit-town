exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('fruits', (table) => {
    table.increments('id')
    table.string('name')
    table.string('color')
    table.number('supplier_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('fruits')
};
