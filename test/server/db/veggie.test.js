var test = require('ava')

var setupDb = require('../setup-db')
var dbVeggies = require('../../../server/db/veggie')

setupDb(test)

test.cb('veggie and suppliers', t => {
  dbVeggies.getSupplierVeggies(t.context.db)
    .then((data) =>{
      t.is(data.length, 3)
      t.is(data[2].rating, 3)
      t.end()
    })
    .catch((err) =>{
      console.log(err);
    })
})
