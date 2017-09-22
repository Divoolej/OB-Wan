import React from 'react'
import Settings from './Settings.jsx'
import KnobsPanel from './KnobsPanel.jsx'
import Rack from './Rack.jsx'

export default class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Settings />
        <KnobsPanel count={8} />
        <Rack />
      </div>
    )
  }
}
