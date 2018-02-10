import React from 'react'
import Knob from 'react-canvas-knob'
import { ipcRenderer } from 'electron'

import { COLOR_BROWN, COLOR_GREEN } from '../constants.js'

const changeFilterSettings = (parameters) => {
  ipcRenderer.send('synth', {
    type: 'changeFilterSettings',
    payload: parameters,
  })
}

export default class FilterKnob extends React.Component {
  state = {
    value: 0,
  }

  componentDidMount() {
    this.setState({ value: this.props.startingValue })
  }

  handleChange = (newValue) => {
    const roundedValue = Math.round(newValue)
    if (this.state.value !== roundedValue) {
      changeFilterSettings({ [this.props.parameter]: roundedValue })
    }
    this.setState({ value: roundedValue })
  }

  render() {
  	return (
      <div className="FilterKnob">
        <span className="label">{this.props.label}</span>
        <Knob
          value={this.state.value}
          max={127}
          step={1}
          angleArc={270}
          angleOffset={45}
          width={75}
          height={75}
          inputColor={COLOR_GREEN}
          fgColor={COLOR_GREEN}
          bgColor={COLOR_BROWN}
          onChange={this.handleChange}
          onChangeEnd={() => null} 
          { ...this.props.knobProps }
        />
      </div>
    )
  }
}