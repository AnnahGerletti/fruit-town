
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meats').del()
    .then(function () {
      // Inserts seed entries
      return knex('meats').insert([
        {id: 1, name: 'hotdog'},
        {id: 2, name: 'roast chicken'},
        {id: 3, name: 'meat balls'}
      ]);
    });
};
