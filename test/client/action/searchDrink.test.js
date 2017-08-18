var test = require('ava')
var nock = require('nock') //creates a fake api

import {getSearchDrink} from '../../../client/actions/searchDrink'

test.cb('search drink', t => {
  nock("http://www.thecocktaildb.com")
    .get("/api/json/v1/1/random.php")
    .reply(200, {drink: 'Gin'})

    getSearchDrink()((actual)=>{
      console.log(actual);
      t.is(actual.type, 'RECEIVE_DRINK')
      t.deepEqual(actual.drink, {drink: 'Gin'})
      t.end()
    })
})

// this test sends the api fake data and then request it back, if the data is passed correctly to me, the test will pass.
