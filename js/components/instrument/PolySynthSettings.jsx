import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const PolySynthSettingsComponent = ({ selectedVoice, availableVoices, onChangePolySynthVoice }) => (
  <div className="PolySynthSettings">
    <div className="row">
      <span className="label">Voice: </span>
      <Select
        options={availableVoices.map(i => ({ value: i, label: i }))}
        onChange={(option) => onChangePolySynthVoice(option.value)}
        value={selectedVoice}
        searchable={false}
        clearable={false}
      />
    </div>
  </div>
)

PolySynthSettingsComponent.propTypes = {
  selectedVoice: PropTypes.string.isRequired,
  availableVoices: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangePolySynthVoice: PropTypes.func.isRequired,
}

import { connect } from 'react-redux'
import { changePolySynthVoice } from '../../actions/instrument-actions.js'

const mapStateToProps = (state) => ({
  availableVoices: state.rack.settings.availableVoices,
})

const actions = {
  onChangePolySynthVoice: changePolySynthVoice
}

const PolySynthSettingsContainer = connect(mapStateToProps, actions)(PolySynthSettingsComponent)

export default PolySynthSettingsContainer
