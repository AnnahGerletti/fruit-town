var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var greetings = require('./routes/greeting')
var veggies = require('./routes/veggie')
var fruits = require('./routes/fruit')

var server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/greetings', greetings)
server.use('/api/veggies', veggies)
server.use('/api/fruits', fruits)

module.exports = function(db) {
  server.set('db', db)
  return server
}
