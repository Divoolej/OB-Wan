import React from 'react'

import ModulationKnob from './ModulationKnob.jsx'

const KnobsPanel = () => {
  return(
    <div className="KnobsPanel">
    	<ModulationKnob 
        parameter="modulationIndex" 
        knobProps={{ step: 0.1, max: 255 }} 
      />
    </div>
  )
}

export default KnobsPanel