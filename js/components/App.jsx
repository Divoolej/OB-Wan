import React from 'react'

import Settings from './Settings.jsx'
import KnobsPanel from './KnobsPanel.jsx'
import Rack from './Rack.jsx'
import Errors from './Errors.jsx'
import KeyboardController from './KeyboardController.jsx'
import MIDIController from './MIDIController.jsx'

const App = () => (
  <div className="App">
    <Settings />
    <KnobsPanel count={8} />
    <Rack />
    <Errors />
    <KeyboardController />
    <MIDIController />
  </div>
)

export default App
