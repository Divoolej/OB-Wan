import React from 'react'
import { shape, bool } from 'prop-types'

import KeyButton from './buttons/KeyButton.jsx'
import ShiftButton from './buttons/ShiftButton.jsx'

const ButtonsComponent = ({ buttonsState }) => (
  <div className="Buttons">
    <KeyButton number={1} isPressed={buttonsState[1]} />
    <KeyButton number={2} isPressed={buttonsState[2]} />
    <KeyButton number={3} isPressed={buttonsState[3]} />
    <KeyButton number={4} isPressed={buttonsState[4]} />
    <KeyButton number={5} isPressed={buttonsState[5]} />
    <KeyButton number={6} isPressed={buttonsState[6]} />
    <KeyButton number={7} isPressed={buttonsState[7]} />
    <KeyButton number={8} isPressed={buttonsState[8]} />
    <KeyButton number={9} isPressed={buttonsState[9]} />
    <ShiftButton isPressed={buttonsState['shift']} />
  </div>
)

ButtonsComponent.propTypes = {
  buttonsState: shape({
    1: bool, 2: bool, 3: bool,
    4: bool, 5: bool, 6: bool,
    7: bool, 8: bool, 9: bool,
    shift: bool,
  })
}

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  buttonsState: state.app.buttons,
})

const ButtonsContainer = connect(mapStateToProps, null)(ButtonsComponent)

export default ButtonsContainer
