import React from 'react'
import PropTypes from 'prop-types'
import hash from 'object-hash'

const ErrorsComponent = ({ errors, onDismissErrors }) => {
  if (errors && errors.length > 0) {
    return(
      <div className="Error">
        <div className="overlay"></div>
        <div className="popup">
          <span className="header">Error:</span>
          <ul className="list">
            {errors.map(error => (
              <li key={hash(error)} className="entry">{error.message}</li>
            ))}
          </ul>
          <div className="row">
            <button className="dismiss-button" onClick={onDismissErrors}>Close</button>
          </div>
        </div>
      </div>
    )
  }
  return null;
}

ErrorsComponent.propTypes = {
  errors: PropTypes.array.isRequired,
  onDismissErrors: PropTypes.func.isRequired,
}

import { connect } from 'react-redux'
import { clearErrors } from '../actions/app-actions.js'

const mapStateToProps = (state) => ({
  errors: state.app.errors,
})

const actions = { onDismissErrors: clearErrors }

const ErrorsContainer = connect(mapStateToProps, actions)(ErrorsComponent)

export default ErrorsContainer
