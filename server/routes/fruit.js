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

router.post('/', (req, res) =>{
  let db = req.app.get('db')
  fruitDb.insertFruit(req.body, db)
  .then(fruit =>{
    res.json(fruit)
  })
  .catch((err) =>{
    res.status(500).send(err.message)
  })
})

// router.post(/)

module.exports = router
