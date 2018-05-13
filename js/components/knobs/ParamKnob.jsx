import React, { Component } from 'react'

class ParamKnob extends Component {
  state = {
    angle: 0
  }

  handleChange = (event) => {
    const newAngle = (this.state.angle - event.deltaY / 4.0) % 360
    this.setState({ angle: newAngle })
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

export default ParamKnob
