import React from 'react'
import PropTypes from 'prop-types'
import { ipcRenderer } from 'electron';

class MIDIControllerComponent extends React.Component {
  componentDidUpdate(prevProps, _prevState) {
    if (prevProps.midiInput !== this.props.midiInput) {
      this.setEventListeners()
    }
  }

  setEventListeners = () => {
    this.props.midiInput.addListener('noteon', 'all', this.onNoteOn)
    this.props.midiInput.addListener('noteoff', 'all', this.onNoteOff)
  }

  onNoteOn = (event) => {
    const note = event.note.name + event.note.octave
    const velocity = event.rawVelocity / 127.0
    ipcRenderer.send('synth', { type: 'noteOn', payload: { note, velocity } })
  }

  onNoteOff = (event) => {
    const note = event.note.name + event.note.octave
    ipcRenderer.send('synth', { type: 'noteOff', payload: { note: note } })
  }

  render() { return null }
}

MIDIControllerComponent.propTypes = {
  midiInput: PropTypes.object,
}

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  midiInput: state.settings.selectedMidiInput,
})

const MIDIControllerContainer = connect(mapStateToProps, null)(MIDIControllerComponent)

export default MIDIControllerContainer
