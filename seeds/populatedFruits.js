
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fruits').del()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {id: 1, name: 'apple', color: 'red', supplier_id: 1},
        {id: 2, name: 'banana', color: 'yellow', supplier_id: 1},
        {id: 3, name: 'orange', color: 'orange', supplier_id: 2}
      ]);
    });
};
