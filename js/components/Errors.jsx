import React from 'react'
import PropTypes from 'prop-types'

const ErrorsComponent = ({ errors, onDismissErrors }) => {
  if (errors && errors.length > 0) {
    return(
      <div className="Error">
        {errors}
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
