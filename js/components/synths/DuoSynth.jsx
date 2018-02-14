import React from 'react'

import ModulationKnob from '../knobs/ModulationKnob.jsx'
import FilterKnob from '../knobs/FilterKnob.jsx'
import VoiceModulationKnob from '../knobs/VoiceModulationKnob.jsx'

const DuoSynth = () => {
  return(
    <div className="KnobsPanel">
    	<ModulationKnob
        target="duoSynth"
        parameter="harmonicity"
        label="Harmonicity"
        startingValue={3}
        knobProps={{ step: 0.1, min: 0.1, max: 25 }} 
      />
      <ModulationKnob
        target="duoSynth" 
        parameter="vibratoAmount"
        label="Vibrato Amount"
        startingValue={0}
        knobProps={{ step: 1, min: 0, max: 127 }} 
      />
      <ModulationKnob
        target="duoSynth" 
        parameter="vibratoRate"
        label="Vibrato Rate"
        startingValue={0.1}
        knobProps={{ step: 1.1, min: 0.1, max: 2000, log: true }}
      />
      <ModulationKnob
        target="duoSynth" 
        parameter="volume"
        label="Volume"
        startingValue={0}
        knobProps={{ step: 1, min: -36, max: 36 }} 
      />
      <VoiceModulationKnob
        voice="voice0"
        parameter="detune"
        label="Osc. 1 - Detune"
        startingValue={0}
        knobProps={{ step: 1, min: -100, max: 100 }} 
      />
      <VoiceModulationKnob
        voice="voice1"
        parameter="detune"
        label="Osc 2 - Detune"
        startingValue={0}
        knobProps={{ step: 1, min: -100, max: 100 }} 
      />
      <VoiceModulationKnob
        voice="voice0"
        parameter="volume"
        label="Osc. 1 - Volume"
        startingValue={0}
        knobProps={{ step: 1, min: -36, max: 36 }} 
      />
      <VoiceModulationKnob
        voice="voice1"
        parameter="volume"
        label="Osc 2 - Volume"
        startingValue={0}
        knobProps={{ step: 1, min: -36, max: 36 }} 
      />
    </div>
  )
}

export default DuoSynth