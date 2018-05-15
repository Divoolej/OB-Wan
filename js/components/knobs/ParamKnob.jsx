import React, { Component } from 'react'

import { KNOB_SPEED } from '../../constants.js'

const throttle = (value) => {
  if (value > 10) { return 10 }
  else if (value < -10) { return -10}
  else return value
}

class ParamKnobComponent extends Component {
  state = {
    angle: 0
  }

  handleChange = (event) => {
    const newAngle = (this.state.angle - throttle(event.deltaY * KNOB_SPEED)) % 360
    this.setState({ angle: newAngle })
    this.props.modulate(throttle(event.deltaY * KNOB_SPEED))
  }

  render() {
    const { angle } = this.state

    return (
      <div className="ParamKnob">
        <img
          style={{ transform: `rotate(${angle}deg)` }}
          src="svg/ParamKnob.svg"
          onWheel={this.handleChange}
        />
      </div>
    )
  }
}

import { connect } from 'react-redux'
import { modulate } from '../../actions/knob-actions.js'

const actions = {
  modulate,
}

const ParamKnobContainer = connect(null, actions)(ParamKnobComponent)

export default ParamKnobContainer
