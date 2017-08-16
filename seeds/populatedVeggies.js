
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('veggies').del()
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert([
        {id: 1, name: 'carrots', rating: 10},
        {id: 2, name: 'broccoli', rating: 6},
        {id: 3, name: 'beets', rating: 3}
      ]);
    });
};
