import {combineReducers} from 'redux'

import greetings from './greetings'
import fruits from './fruits'

export default combineReducers({
  greetings,
  fruits
})
