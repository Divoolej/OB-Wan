import React from 'react'
import { ipcRenderer } from 'electron'

import { COLOR_BLACK, COLOR_GREEN } from '../../constants.js'
import Knob from './Knob.jsx'

const changeFilterSettings = (synth, parameters) => {
  ipcRenderer.send('synth', {
    type: 'changeFilterSettings',
    payload: { synth, parameters },
  })
}

const FilterKnob = ({ label, ...props }) => (
  <div className="FilterKnob">
    <span className="label">{label}</span>
    <Knob
      inputColor={COLOR_BLACK}
      fgColor={COLOR_BLACK}
      bgColor={COLOR_GREEN}
      roundValue={true}
      handler={changeFilterSettings}
      { ...props }
    />
  </div>
)

export default FilterKnob