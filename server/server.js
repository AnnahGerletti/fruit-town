var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var greetings = require('./routes/greeting')
var veggies = require('./routes/veggie')
var fruits = require('./routes/fruit')
var meats = require('./routes/meat')

var server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/greetings', greetings)
server.use('/api/veggies', veggies)
server.use('/api/fruits', fruits)
server.use('/api/meats', meats)

var request = require('superagent')
server.get('/api/external', (req, res) => {
  request
  .get('http://www.thecocktaildb.com/api/json/v1/1/random.php')
  .end((err, response)=>{
    if (err){
      console.log('error', err)
    }
    else{
      console.log(res.body);
      res.json(response.body)
      // dispatch(receiveDrink(res.body.drinks[0]))
    }
  })
})
//the external api for drinks. 

module.exports = function(db) {
  server.set('db', db)
  return server
}
