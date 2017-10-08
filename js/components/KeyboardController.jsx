import React from 'react'
import PropTypes from 'prop-types'

const { ipcRenderer } = require('electron');

class KeyboardControllerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.pressedKeys = {}
    this.setEventListeners()
    this.noteMap = {
      a: 'C4', w: 'C#4', s: 'D4', e: 'D#4', d: 'E4', f: 'F4', t: 'F#4', g: 'G4',
      y: 'G#4', h: 'A4', u: 'A#4', j: 'B4', k: 'C5', o: 'C#5', l: 'D5', p: 'D#5',
    }
  }

  onKeyDown = (event) => {
    if (this.pressedKeys[event.key] !== true) {
      this.pressedKeys[event.key] = true
      const note = this.noteMap[event.key]
      if (note) {
        this.props.noteOn(note)
      }
      ipcRenderer.send('synth', { type: 'noteOn', payload: { note: note } })
    }
  }

  onKeyUp = (event) => {
    this.pressedKeys[event.key] = false
    const note = this.noteMap[event.key]
    if (note) {
      this.props.noteOff(note)
    }
  }

  setEventListeners = () => {
    document.addEventListener('keydown', this.onKeyDown)
    document.addEventListener('keyup', this.onKeyUp)
  }

  render() { return null }
}

KeyboardControllerComponent.propTypes = {
  noteOn: PropTypes.func.isRequired,
  noteOff: PropTypes.func.isRequired,
}

import { connect } from 'react-redux'
import { noteOn, noteOff } from '../actions/instrument-actions.js'

const actions = { noteOn, noteOff }

const KeyboardControllerContainer = connect(null, actions)(KeyboardControllerComponent)

export default KeyboardControllerContainer
