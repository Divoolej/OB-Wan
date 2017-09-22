const initialState = {
  errors: [],
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_ADD_ERROR':
      return {
        ...state,
        errors: [
          ...state.errors,
          {
            message: action.payload.message,
          }
        ],
      }
    case 'APP_CLEAR_ERRORS':
      return {
        ...state,
        errors: [],
      }
    default:
      return state
  }
}

export default settings
