var express = require ('express')
var router = express.Router()

var veggiesDb = require('../db/veggie')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  veggiesDb.getVeggies(db)
    .then(veggies =>{
      res.json(veggies)
    })
})

module.exports = router
