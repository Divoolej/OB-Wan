import React from 'react'

const ScreenComponent = ({ volume, harmonicity, modulation, mode }) => (
  <div className="Screen">
    <div className="content">
      Master Volume: {volume}
      <br />
      Harmonicity: {harmonicity}
      <br />
      Modulation: {modulation}
      <br />
      Keyboard Mode: {mode}
    </div>
  </div>
)

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  volume: state.app.parameters.masterVolume,
  harmonicity: state.app.parameters.harmonicity,
  modulation: state.app.parameters.modulation,
  mode: state.app.keyboardMode,
})

const ScreenContainer = connect(mapStateToProps, null)(ScreenComponent)

export default ScreenContainer
