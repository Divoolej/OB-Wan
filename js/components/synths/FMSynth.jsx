import React from 'react'

import ModulationKnob from '../knobs/ModulationKnob.jsx'
import FilterKnob from '../knobs/FilterKnob.jsx'

const FMSynth = () => {
  return(
    <div className="KnobsPanel">
    	<ModulationKnob
        target="fmSynth"
        parameter="modulationIndex"
        label="Mod. Index"
        startingValue={10}
        knobProps={{ step: 0.1, max: 50 }} 
      />
      <ModulationKnob
        target="fmSynth"
        parameter="harmonicity"
        label="Harmonicity"
        startingValue={3}
        knobProps={{ step: 0.1, min: 0.1, max: 25 }} 
      />
      <ModulationKnob
        target="fmSynth" 
        parameter="detune"
        label="Detune"
        startingValue={0}
        knobProps={{ step: 1, min: -100, max: 100 }} 
      />
      <ModulationKnob
        target="fmSynth" 
        parameter="volume"
        label="Volume"
        startingValue={0}
        knobProps={{ step: 1, min: -36, max: 36 }} 
      />
      <FilterKnob
        target="fmSynth" 
        parameter="frequency"
        label="Cutoff freq."
        startingValue={0}
        knobProps={{ step: 1.1, min: 20, max: 20000, log: true }} 
      />
      <FilterKnob
        target="fmSynth" 
        parameter="Q"
        label="Resonance"
        startingValue={0}
        knobProps={{ step: 1, min: 0, max: 50 }} 
      />
    </div>
  )
}

export default FMSynth