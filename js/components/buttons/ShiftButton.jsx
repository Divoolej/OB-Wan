import React from 'react'
import PropTypes from 'prop-types'

const ShiftButton = ({ isPressed }) =>
  <div className="ShiftButton">
    <img src="svg/ShiftButton.svg" />
  </div>

ShiftButton.propTypes = {
  isPressed: PropTypes.bool,
}

ShiftButton.defaultProps = {
  isPressed: false,
}

export default ShiftButton
