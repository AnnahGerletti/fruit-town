var express = require('express')
var router = express.Router()

var fruitsDb = require('../db/fruit')

router.get('/', (req, res) =>{
  let db = req.app.get('db')
  fruitsDb.getFruits(db)
    .then(fruits => {
      res.json(fruits)
    })
})

// router.post(/)

module.exports = router
