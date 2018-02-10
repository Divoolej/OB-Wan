import React from 'react'

import ModulationKnob from './ModulationKnob.jsx'
import FilterKnob from './FilterKnob.jsx'

const KnobsPanel = () => {
  return(
    <div className="KnobsPanel">
    	<ModulationKnob
        parameter="modulationIndex"
        label="Modulation Index"
        startingValue={10}
        knobProps={{ step: 0.1, max: 50 }} 
      />
      <ModulationKnob 
        parameter="harmonicity"
        label="Harmonicity"
        startingValue={3}
        knobProps={{ step: 0.1, min: 0.1, max: 25 }} 
      />
      <ModulationKnob 
        parameter="detune"
        label="Detune"
        startingValue={0}
        knobProps={{ step: 1, max: 1000 }} 
      />
      <ModulationKnob 
        parameter="volume"
        label="Volume"
        startingValue={0}
        knobProps={{ step: 1, min: -36, max: 36 }} 
      />
      <FilterKnob 
        parameter="frequency"
        label="Cutoff freq."
        startingValue={0}
        knobProps={{ step: 1.1, min: 20, max: 20000, log: true }} 
      />
    </div>
  )
}

export default KnobsPanel