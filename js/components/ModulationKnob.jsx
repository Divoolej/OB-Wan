import React from 'react'
import Knob from 'react-canvas-knob'
import { ipcRenderer } from 'electron'

import { COLOR_BROWN, COLOR_GREEN } from '../constants.js'

const modulate = (synth, parameters) => {
  ipcRenderer.send('synth', {
    type: 'modulation',
    payload: { synth, parameters },
  })
}

export default class ModulationKnob extends React.Component {
  state = {
    value: 0,
  }

  componentDidMount() {
    this.setState({ value: this.props.startingValue })
  }

  handleChange = (newValue) => {
    if (this.state.value !== newValue) {
      modulate(this.props.target, { [this.props.parameter]: newValue })
    }
    this.setState({ value: newValue })
  }

  render() {
  	return (
      <div className="ModulationKnob">
        <span className="label">{this.props.label}</span>
        <Knob
          value={this.state.value}
          max={127}
          step={1}
          angleArc={270}
          angleOffset={45}
          width={65}
          height={65}
          inputColor={COLOR_BROWN}
          fgColor={COLOR_BROWN}
          bgColor={COLOR_GREEN}
          onChange={this.handleChange}
          onChangeEnd={() => null} 
          { ...this.props.knobProps }
        />
      </div>
    )
  }
}