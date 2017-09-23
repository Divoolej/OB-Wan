export const throwError = (error) => ({
  type: 'APP_ADD_ERROR',
  payload: { message: error.message },
})

export const clearErrors = () => ({
  type: 'APP_CLEAR_ERRORS',
  payload: {},
})
