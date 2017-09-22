import React from 'react'

import Settings from './Settings.jsx'
import KnobsPanel from './KnobsPanel.jsx'
import Rack from './Rack.jsx'
import Errors from './Errors.jsx'

const App = () => (
  <div className="App">
    <Settings />
    <KnobsPanel count={8} />
    <Rack />
    <Errors />
  </div>
)

export default App
