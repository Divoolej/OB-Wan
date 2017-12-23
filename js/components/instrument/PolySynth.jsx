import React from 'react'
import PropTypes from 'prop-types'

import PolySynthSettings from './PolySynthSettings.jsx'
import Synth from './Synth.jsx'
import MonoSynth from './MonoSynth.jsx'

import { SYNTH, MONO_SYNTH } from '../../constants.js'

const renderInnerSynthesizer = (selectedVoice) => {
  switch (selectedVoice) {
    case SYNTH:
      return <Synth />
    case MONO_SYNTH:
      return <MonoSynth />
  }
}

const PolySynthComponent = ({ selectedVoice }) => (
  <div className="PolySynth">
    <PolySynthSettings selectedVoice={selectedVoice} />
    {renderInnerSynthesizer(selectedVoice)}
  </div>
)

PolySynthComponent.propTypes = {
  selectedVoice: PropTypes.string.isRequired,
}

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  selectedVoice: state.rack.instrument.polySynthVoice,
})

const PolySynthContainer = connect(mapStateToProps, null)(PolySynthComponent)

export default PolySynthContainer;
