export const throwError = (message) => ({
  type: 'APP_ADD_ERROR',
  payload: { message },
})

export const clearErrors = () => ({
  type: 'APP_CLEAR_ERRORS',
  payload: {},
})
