import { combineReducers } from 'redux'

import app from './app.js'
import settings from './settings.js'
import knobs from './knobs.js'
import rack from './rack'

const reducers = combineReducers({
  app,
  settings,
  knobs,
  rack,
})

export default reducers
