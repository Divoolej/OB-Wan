import React from 'react'
import { func } from 'prop-types'

const BUTTONS_MAP = {
  q: '1', w: '2', e: '3',
  a: '4', s: '5', d: '6',
  z: '7', x: '8', c: '9',
  ' ': 'shift',
}

class KeyboardControllerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.buttonsState = {}
    this.setEventListeners()
  }

  onKeyDown = (event) => {
    if (!!BUTTONS_MAP[event.key]) {
      // Prevent firing multiple events when the key is being held
      if (this.buttonsState[event.key] !== true) {
        this.props.onKeyDown(BUTTONS_MAP[event.key])
        this.buttonsState[event.key] = true
      }
    }
  }

  onKeyUp = (event) => {
    if (!!BUTTONS_MAP[event.key]) {
      this.props.onKeyUp(BUTTONS_MAP[event.key])
      this.buttonsState[event.key] = false
    }
  }

  setEventListeners = () => {
    document.addEventListener('keydown', this.onKeyDown)
    document.addEventListener('keyup', this.onKeyUp)
  }

  render() { return null }
}

KeyboardControllerComponent.propTypes = {
  onKeyUp: func.isRequired,
  onKeyDown: func.isRequired,
}

import { connect } from 'react-redux'
import { keyUp, keyDown } from '../actions/keyboard-actions.js'

const actions = {
  onKeyUp: keyUp,
  onKeyDown: keyDown,
}

const KeyboardControllerContainer = connect(null, actions)(KeyboardControllerComponent)

export default KeyboardControllerContainer
