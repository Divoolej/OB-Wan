import React from 'react'
import PropTypes from 'prop-types'

import PolySynthSettings from './PolySynthSettings.jsx'
import Synth from './Synth.jsx'

const renderInnerSynthesizer = (selectedVoice) => {
  switch (selectedVoice) {
    case 'Synth':
      return <Synth />
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
