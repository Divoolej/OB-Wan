import { BUTTON_DOWN, BUTTON_UP } from '../actions/keyboard-actions.js'

const initialState = {
  buttons: {
    1: false, 2: false, 3: false,
    4: false, 5: false, 6: false,
    7: false, 8: false, 9: false,
    shift: false,
  },
}

const keyboard = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_DOWN:
      return {
        ...state,
        buttons: {
          ...state.buttons,
          [action.payload.button]: true,
        },
      }
    case BUTTON_UP:
      return {
        ...state,
        buttons: {
          ...state.buttons,
          [action.payload.button]: false,
        },
      }
    default:
      return state
  }
}

export default keyboard
