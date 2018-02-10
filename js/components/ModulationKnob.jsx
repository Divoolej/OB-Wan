import React from 'react'
import Knob from 'react-canvas-knob'
import { ipcRenderer } from 'electron'

const modulate = (parameters) => {
  ipcRenderer.send('synth', {
    type: 'modulation',
    payload: parameters,
  })
}

export default class ModulationKnob extends React.Component {
  state = {
    value: 50,
  }

  handleChange = (newValue) => {
    if (this.state.value !== newValue) {
      modulate({ [this.props.parameter]: newValue })
    }
    this.setState({ value: newValue })
  }

  render() {
  	return (
      <Knob
        value={this.state.value}
        max={50}
        step={1}
        angleArc={270}
        angleOffset={45}
        width={100}
        height={100}
        onChange={this.handleChange}
        onChangeEnd={() => null} 
        { ...this.props.knobProps }
      />
    )
  }
}