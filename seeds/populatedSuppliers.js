
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('suppliers').del()
    .then(function () {
      // Inserts seed entries
      return knex('suppliers').insert([
        {id: 1, name: 'Dan'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Sue'}
      ]);
    });
};
