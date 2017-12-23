import React from 'react'
import PropTypes from 'prop-types'

import InstrumentHeader from './InstrumentHeader.jsx'
import PolySynth from './PolySynth.jsx'
import Synth from './Synth.jsx'
import MonoSynth from './MonoSynth.jsx'

import { SYNTH, MONO_SYNTH, POLY_SYNTH } from '../../constants.js'

const renderSynthesizer = (type) => {
  switch (type) {
    case SYNTH:
      return <Synth />
    case MONO_SYNTH:
      return <MonoSynth />
    case POLY_SYNTH:
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
