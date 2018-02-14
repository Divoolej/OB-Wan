import React from 'react'
import { ipcRenderer } from 'electron'

import { COLOR_BROWN, COLOR_GREEN } from '../../constants.js'
import Knob from './Knob.jsx'

const modulate = (synth, parameters) => {
  ipcRenderer.send('synth', {
    type: 'modulation',
    payload: { synth, parameters },
  })
}

const ModulationKnob = ({ label, ...props }) => (
  <div className="ModulationKnob">
    <span className="label">{label}</span>
    <Knob
      inputColor={COLOR_BROWN}
      fgColor={COLOR_BROWN}
      bgColor={COLOR_GREEN}
      roundValue={false}
      handler={modulate}
      { ...props }
    />
  </div>
)

export default ModulationKnob