
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fruits').del()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {id: 1, name: 'hotdog'},
        {id: 2, name: 'roast chicken'},
        {id: 3, name: 'meat balls'}
      ]);
    });
};
