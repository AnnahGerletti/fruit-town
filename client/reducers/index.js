import {combineReducers} from 'redux'

import greetings from './greetings'
import fruits from './fruits'
import veggies from './veggies'

export default combineReducers({
  greetings,
  fruits,
  veggies
})
