import React from 'react'
import PropTypes from 'prop-types'

import InstrumentHeader from './InstrumentHeader.jsx'
import PolySynth from './PolySynth.jsx'
import Synth from './Synth.jsx'

const renderSynthesizer = (type) => {
  switch (type) {
    case 'Synth':
      return <Synth />
    case 'PolySynth':
      return <PolySynth />
  }
}

const InstrumentComponent = ({ type }) => {
  return(
    <div className="Instrument">
      <InstrumentHeader />
      {renderSynthesizer(type)}
    </div>
  )
}

InstrumentComponent.propTypes = {
  type: PropTypes.string.isRequired,
}

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  type: state.rack.instrument.type,
})

const InstrumentContainer = connect(mapStateToProps, null)(InstrumentComponent)

export default InstrumentContainer
