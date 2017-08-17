var test = require('ava')

var setupDb = require('../setup-db')
var dbMeats = require('../../../server/db/meat')

setupDb(test)

test.cb('meat and suppliers', t => {
  dbMeats.getSupplierMeats(t.context.db)
    .then((data) =>{
      t.is(data[2].name, 'meat balls')
      t.is(data[2].supplier_id, 3)
      t.end()
    })
    .catch((err) =>{
      console.log(err);
    })
})
