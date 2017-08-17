var test = require('ava')
var nock = require('nock') //creates a fake api

import {getRandomDrink} from '../../../client/actions/randomDrink'

test.only.cb('random drink', t => {
  nock("http://www.thecocktaildb.com")
    .get("/api/json/v1/1/random.php")
    .reply(200, {drink: 'Martini'})

    getRandomDrink()((actual)=>{
      console.log(actual);
      t.is(actual.type, 'RECEIVE_DRINK')
      t.deepEqual(actual.drink, {drink: 'Martini'})
      t.end()
    })
})

// this test sends the api fake data and then request it back, if the data is passed correctly to me, the test will pass.
