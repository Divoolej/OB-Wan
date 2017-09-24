import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const PolySynthSettingsComponent = ({
  selectedVoice,
  selectedPolyphony,
  availableVoices,
  availablePolyphony,
  onChangePolySynthVoice,
  onChangePolySynthPolyphony
}) => (
  <div className="PolySynthSettings">
    <div className="voice-settings">
      <span className="label">Voice: </span>
      <Select
        options={availableVoices.map(i => ({ value: i, label: i }))}
        onChange={(option) => onChangePolySynthVoice(option.value)}
        value={selectedVoice}
        searchable={false}
        clearable={false}
      />
    </div>
    <div className="polyphony-settings">
      <span className="label">Polyphony: </span>
      <Select
        options={availablePolyphony.map(i => ({ value: i, label: i }))}
        onChange={(option) => onChangePolySynthPolyphony(option.value)}
        value={selectedPolyphony}
        searchable={false}
        clearable={false}
      />
    </div>
  </div>
)

PolySynthSettingsComponent.propTypes = {
  selectedVoice: PropTypes.string.isRequired,
  selectedPolyphony: PropTypes.number.isRequired,
  availableVoices: PropTypes.arrayOf(PropTypes.string).isRequired,
  availablePolyphony: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChangePolySynthVoice: PropTypes.func.isRequired,
  onChangePolySynthPolyphony: PropTypes.func.isRequired,
}

import { connect } from 'react-redux'
import { changePolySynthVoice, changePolySynthPolyphony } from '../../actions/instrument-actions.js'

const mapStateToProps = (state) => ({
  selectedPolyphony: state.rack.instrument.polyphony,
  availableVoices: state.rack.settings.availableVoices,
  availablePolyphony: state.rack.settings.availablePolyphony,
})

const actions = {
  onChangePolySynthVoice: changePolySynthVoice,
  onChangePolySynthPolyphony: changePolySynthPolyphony,
}

const PolySynthSettingsContainer = connect(mapStateToProps, actions)(PolySynthSettingsComponent)

export default PolySynthSettingsContainer
