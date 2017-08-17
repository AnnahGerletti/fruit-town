var test = require('ava')

var setupDb = require('../setup-db')
var dbFruits = require('../../../server/db/fruit')

setupDb(test)

test.cb ('fruit and suppliers', t => {
  dbFruits.getSupplierFruits(t.context.db)
    .then((data)=>{
      t.is(data.length, 3)
      t.is(data[0].supplier_name, 'Dan')
      t.end()
    })
    .catch((err)=>{
      console.log(err);
    })
})
