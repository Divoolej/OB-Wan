import React from 'react'

import KeyButton from './buttons/KeyButton.jsx'
import ShiftButton from './buttons/ShiftButton.jsx'

const Buttons = () => (
  <div className="Buttons">
    <KeyButton number={1} />
    <KeyButton number={2} />
    <KeyButton number={3} />
    <KeyButton number={4} />
    <KeyButton number={5} />
    <KeyButton number={6} />
    <KeyButton number={7} />
    <KeyButton number={8} />
    <KeyButton number={9} />
    <ShiftButton />
  </div>
)

export default Buttons
