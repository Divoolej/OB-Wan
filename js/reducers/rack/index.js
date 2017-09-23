import { combineReducers } from 'redux'
import instrument from './instrument.js'
import settings from './settings.js'

const rack = combineReducers({
  settings,
  instrument,
})

export default rack
