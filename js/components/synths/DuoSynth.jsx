import React from 'react'

import ModulationKnob from '../knobs/ModulationKnob.jsx'
import FilterKnob from '../knobs/FilterKnob.jsx'

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
        parameter="volume"
        label="Volume"
        startingValue={0}
        knobProps={{ step: 1, min: -36, max: 36 }} 
      />
    </div>
  )
}

export default DuoSynth