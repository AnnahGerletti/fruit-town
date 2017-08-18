import {combineReducers} from 'redux'

import greetings from './greetings'
import fruits from './fruits'
import veggies from './veggies'
import meats from './meats'
import getRandomDrinks from './randomDrinks'

export default combineReducers({
  greetings,
  fruits,
  veggies,
  meats,
  randomDrink: getRandomDrinks
})
