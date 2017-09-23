import React from 'react'

import Instrument from './instrument/Instrument.jsx'

export default class Rack extends React.Component {
  render() {
    return(
      <div className="Rack">
        <Instrument />
      </div>
    )
  }
}
