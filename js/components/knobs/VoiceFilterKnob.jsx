import React from 'react'
import { ipcRenderer } from 'electron'

import { COLOR_BLACK, COLOR_GREEN, DUO_SYNTH } from '../../constants.js'
import Knob from './Knob.jsx'

const modulateVoiceFilter = (voice, parameters) => {
  ipcRenderer.send('synth', {
    type: 'modulation',
    payload: {
      synth: DUO_SYNTH,
      parameters: {
        [voice]: {
          filter: parameters,
        }
      }
    },
  })
}

const VoiceFilterKnob = ({ label, voice, roundValue, ...props }) => (
  <div className="VoiceFilterKnob">
    <span className="label">{label}</span>
    <Knob
      inputColor={COLOR_BLACK}
      fgColor={COLOR_BLACK}
      bgColor={COLOR_GREEN}
      roundValue={roundValue || false}
      handler={(_target, parameters) => modulateVoiceFilter(voice, parameters)}
      { ...props }
    />
  </div>
)

export default VoiceFilterKnob
