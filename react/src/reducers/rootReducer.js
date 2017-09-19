import { combineReducers } from 'redux'
import pokemon from './pokemon'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  pokemon,
  visibilityFilter
})

export default rootReducer
