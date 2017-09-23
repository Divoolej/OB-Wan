import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import WebMidi from 'webmidi'

class SettingsComponent extends React.Component {
  componentDidMount() {
    WebMidi.enable(this.onInitializeWebMidi);
  }

  onInitializeWebMidi = (error) => {
    if (error) {
      this.props.onThrowError({ message: `Failed to initialize WebMidi: ${error}` })
    } else {
      this.props.onUpdateMidiInputs(WebMidi.inputs)
    }
  }

  onSelectMidiInput = (input) => {
    const selectedInput = input.value !== 'NONE' ? WebMidi.getInputByName(input.value) : null
    if (selectedInput !== false) {
      this.props.onSelectMidiInput(selectedInput)
    } else {
      this.props.onThrowError({ message: `Couldn't find ${input.value}. Make sure it is connected and try again.` })
    }
  }

  getOptionsForMidiInputs = () => {
    return this.props.availableMidiInputs
      .map(input => ({ value: input.name, label: input.name }))
      .concat({ value: 'NONE', label: 'NONE' })
  }

  getSelectedMidiInput = () => {
    return this.props.selectedMidiInput ? this.props.selectedMidiInput.name : 'NONE'
  }

  render() {
    return(
      <div className="Settings">
        <div className="row">
          <span className="label">MIDI Input: </span>
          <Select
            options={this.getOptionsForMidiInputs()}
            onChange={this.onSelectMidiInput}
            value={this.getSelectedMidiInput()}
            searchable={false}
            clearable={false}
          />
        </div>
      </div>
    )
  }
}

SettingsComponent.propTypes = {
  availableMidiInputs: PropTypes.array.isRequired,
  selectedMidiInput: PropTypes.object,
  onSelectMidiInput: PropTypes.func.isRequired,
  onUpdateMidiInputs: PropTypes.func.isRequired,
  onThrowError: PropTypes.func.isRequired,
}

import { connect } from 'react-redux'
import { setAvailableMidiInputs, setSelectedMidiInput } from '../actions/settings-actions.js'
import { throwError } from '../actions/app-actions.js'

const mapStateToProps = (state) => ({
  availableMidiInputs: state.settings.availableMidiInputs,
  selectedMidiInput: state.settings.selectedMidiInput,
})

const actions = {
  onSelectMidiInput: setSelectedMidiInput,
  onUpdateMidiInputs: setAvailableMidiInputs,
  onThrowError: throwError,
}

const SettingsContainer = connect(mapStateToProps, actions)(SettingsComponent)

export default SettingsContainer
