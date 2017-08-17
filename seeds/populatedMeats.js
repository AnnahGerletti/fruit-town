
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meats').del()
    .then(function () {
      // Inserts seed entries
      return knex('meats').insert([
        {id: 1, name: 'hotdog', 'supplier_id': 3},
        {id: 2, name: 'roast chicken', 'supplier_id': 2},
        {id: 3, name: 'meat balls', 'supplier_id': 3}
      ]);
    });
};
