import React from 'react'

import VolumeKnob from './knobs/VolumeKnob.jsx'
import ParamKnob from './knobs/ParamKnob.jsx'

const Knobs = () =>
  <div className="Knobs">
    <VolumeKnob />
    <ParamKnob />
  </div>

export default Knobs
