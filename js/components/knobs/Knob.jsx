import React from 'react'
import ReactCanvasKnob from 'react-canvas-knob'

export default class FilterKnob extends React.Component {
  state = {
    value: -1,
  }

  componentDidMount() {
    this.setState({ value: this.props.startingValue })
    this.handleChange(this.props.startingValue)
  }

  handleChange = (newValue) => {
    const { handler, target, parameter } = this.props
    if (this.state.value !== newValue) {
      handler(target, { [parameter]: newValue })
    }
    this.setState({ value: newValue })
  }

  handleRoundedChange = (newValue) => {
    this.handleChange(Math.round(newValue))
  }

  render() {
    const { value } = this.state
    const { label, roundValue, inputColor, fgColor, bgColor, knobProps } = this.props
    const { handleChange, handleRoundedChange } = this
    return (
      <div className="Knob">
        <ReactCanvasKnob
          value={value}
          max={127}
          step={1}
          angleArc={270}
          angleOffset={45}
          width={65}
          height={65}
          inputColor={inputColor}
          fgColor={fgColor}
          bgColor={bgColor}
          onChange={roundValue ? handleRoundedChange : handleChange}
          onChangeEnd={() => null} 
          { ...knobProps }
        />
      </div>
    )
  }
}