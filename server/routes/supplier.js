var express = require('express')
var router = express.Router()

var suppliersDb = require('../db/supplier')

router.get('/', (req, res)=>{
  let db = req.app.get('db')
  suppliersDb.getSuppliers(db)
    .then(suppliers => {
      res.json(suppliers)
    })
})

module.exports = router
