import React from 'react'

import Knobs from './Knobs.jsx'
import Screen from './Screen.jsx'
import Buttons from './Buttons.jsx'
import KeyboardController from './KeyboardController.jsx'
import MidiController from './MidiController.jsx'


const App = () => (
  <div className="App">
    <Knobs />
    <Screen />
    <Buttons />
    <KeyboardController />
    <MidiController />
  </div>
)

export default App
