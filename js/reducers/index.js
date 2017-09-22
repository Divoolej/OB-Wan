import { combineReducers } from 'redux'

import app from './app.js'
import settings from './settings.js'
import knobs from './knobs.js'

const reducers = combineReducers({
  app,
  settings,
  knobs,
})

export default reducers
