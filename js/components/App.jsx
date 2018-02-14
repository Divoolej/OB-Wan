import React from 'react'

import Settings from './Settings.jsx'
import FMSynth from './synths/FMSynth.jsx'
import DuoSynth from './synths/DuoSynth.jsx'
import Errors from './Errors.jsx'
import KeyboardController from './KeyboardController.jsx'
import MIDIController from './MIDIController.jsx'

const App = () => (
  <div className="App">
    <Settings />
    <FMSynth />
    <DuoSynth />
    <Errors />
    <KeyboardController />
    <MIDIController />
  </div>
)

export default App
