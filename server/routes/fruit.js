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
  fruitDb.addFruit(req.body, db)
  .then(fruit =>{
    res.json(fruit)
    console.log(req.body);
  })
  .catch((err) =>{
    res.status(500).send(err.message)
  })
})
//add fruit to db when it is submited on the app

module.exports = router
