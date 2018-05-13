import React, { Component } from 'react'

import { KNOB_SPEED } from '../../constants.js'

const VOLUME_KNOB_ANGLE_OFFSET = -135;
const VOLUME_KNOB_ANGLE_RANGE = 270;

class VolumeKnob extends Component {
  state = {
    angle: 0
  }

  handleChange = (event) => {
    let newAngle = (this.state.angle - event.deltaY / 4.0) % 360
    if (newAngle < 0) newAngle = 0
    if (newAngle > VOLUME_KNOB_ANGLE_RANGE) newAngle = VOLUME_KNOB_ANGLE_RANGE
    this.setState({ angle: newAngle })
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

export default VolumeKnob
