import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const KeyButton = ({ number, isPressed }) =>
  <div className={cx('KeyButton', `KeyButton${number}`)}>
    <img src={imageSource(number, isPressed)} />
  </div>

const imageSource = (number, isPressed) =>
  `svg/Button${number}${isPressed ? 'Pressed' : ''}.svg`

KeyButton.propTypes = {
  number: PropTypes.number.isRequired,
  isPressed: PropTypes.bool,
}

KeyButton.defaultProps = {
  isPressed: false,
}

export default KeyButton
