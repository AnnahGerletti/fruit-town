
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fruits').del()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {id: 1, name: 'apple', color: 'red'},
        {id: 2, name: 'banana', color: 'yellow'},
        {id: 3, name: 'orange', color: 'orange'}
      ]);
    });
};
