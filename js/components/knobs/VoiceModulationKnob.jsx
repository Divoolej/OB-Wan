import React from 'react'
import { ipcRenderer } from 'electron'

import { COLOR_BROWN, COLOR_GREEN, DUO_SYNTH } from '../../constants.js'
import Knob from './Knob.jsx'

const modulateVoice = (voice, parameters) => {
  ipcRenderer.send('synth', {
    type: 'modulation',
    payload: { 
      synth: DUO_SYNTH, 
      parameters: {
        [voice]: parameters,
      }
    },
  })
}

const VoiceModulationKnob = ({ label, voice, roundValue, ...props }) => (
  <div className="VoiceModulationKnob">
    <span className="label">{label}</span>
    <Knob
      inputColor={COLOR_BROWN}
      fgColor={COLOR_BROWN}
      bgColor={COLOR_GREEN}
      roundValue={roundValue || false}
      handler={(_target, parameters) => modulateVoice(voice, parameters)}
      { ...props }
    />
  </div>
)

export default VoiceModulationKnob