var express = require('express')
var router = express.Router()

var meatDb = require('../db/meat')

router.get('/', (req,res) =>{
  let db = req.app.get('db')
  meatDb.getMeat(db)
    .then((meats) =>{
      res.json(meats)
    })
})

module.exports = router
