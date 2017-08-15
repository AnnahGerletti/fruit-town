import {combineReducers} from 'redux'

import greetings from './greetings'
import fruit from './fruit'

export default combineReducers({
  greetings,
  fruit
})
