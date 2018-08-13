import React, { Component } from 'react'

import { KNOB_SPEED } from '../../shared/constants.js'

const VOLUME_KNOB_ANGLE_OFFSET = -135;
const VOLUME_KNOB_ANGLE_RANGE = 270;

const throttle = (value) => {
  if (value > 10) { return 10 }
  else if (value < -10) { return -10}
  else return value
}

class VolumeKnobComponent extends Component {
  state = {
    angle: 0
  }

  handleChange = (event) => {
    let newAngle = (this.state.angle - throttle(event.deltaY / 4.0)) % 360
    if (newAngle < 0) newAngle = 0
    if (newAngle > VOLUME_KNOB_ANGLE_RANGE) newAngle = VOLUME_KNOB_ANGLE_RANGE
    this.setState({ angle: newAngle })
    this.props.changeVolume((newAngle / VOLUME_KNOB_ANGLE_RANGE).toFixed(2))
  }

  render() {
    const angle = this.state.angle + VOLUME_KNOB_ANGLE_OFFSET

    return (
      <div className="VolumeKnob">
        <img
          style={{ transform: `rotate(${angle}deg)` }}
          src="svg/VolumeKnob.svg"
          onWheel={this.handleChange}
        />
      </div>
    )
  }
}

import { connect } from 'react-redux'
import { changeVolume } from '../../actions/knob-actions.js'

const actions = {
  changeVolume,
}

const VolumeKnobContainer = connect(null, actions)(VolumeKnobComponent)

export default VolumeKnobContainer
