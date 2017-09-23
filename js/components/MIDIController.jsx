import React from 'react'
import PropTypes from 'prop-types'

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
    this.props.noteOn(note /*, velocity */) // DISABLE VELOCITY FOR NOW BECAUSE MY MIDI KEYBOARD SUCKS
  }

  onNoteOff = (event) => {
    const note = event.note.name + event.note.octave
    this.props.noteOff(note)
  }

  render() { return null }
}

MIDIControllerComponent.propTypes = {
  midiInput: PropTypes.object,
  noteOn: PropTypes.func.isRequired,
  noteOff: PropTypes.func.isRequired,
}

import { connect } from 'react-redux'
import { noteOn, noteOff } from '../actions/instrument-actions.js'

const mapStateToProps = (state) => ({
  midiInput: state.settings.selectedMidiInput,
})

const actions = { noteOn, noteOff }

const MIDIControllerContainer = connect(mapStateToProps, actions)(MIDIControllerComponent)

export default MIDIControllerContainer
