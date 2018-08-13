import { sendControl } from '../shared/utils.js'

import { BUTTON_DOWN, BUTTON_UP } from '../actions/keyboard-actions.js'
import { MOD, CHANGE_VOLUME } from '../actions/knob-actions.js'

const NOTES = {
  1: 60, 2: 61, 3: 62,
  4: 57, 5: 58, 6: 59,
  7: 54, 8: 55, 9: 56,
}

const initialState = {
  keyboardMode: 'control',
  parameters: {
    masterVolume: 0.5,
    harmonicity: 2,
    modulation: 100,
  },
  buttons: {
    1: false, 2: false, 3: false,
    4: false, 5: false, 6: false,
    7: false, 8: false, 9: false,
    shift: false,
  },
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_DOWN:
      if (!state.buttons.shift && action.payload.button !== 'shift' && state.keyboardMode === 'play') {
        sendControl('NoteOn', NOTES[action.payload.button])
      }
      return {
        ...state,
        keyboardMode: (state.buttons.shift && action.payload.button === '9')
          ? (state.keyboardMode === 'control' ? 'play' : 'control')
          : state.keyboardMode,
        buttons: {
          ...state.buttons,
          [action.payload.button]: true,
        },
      }
    case BUTTON_UP:
      if (state.keyboardMode === 'play' && action.payload.button !== 'shift') {
        for (var button in state.buttons) {
          if (button !== 'shift' && button !== action.payload.button && state.buttons[button])
            return {
              ...state,
              buttons: {
                ...state.buttons,
                [action.payload.button]: false,
              },
            }
        }
        sendControl('NoteOff')
      }
      return {
        ...state,
        buttons: {
          ...state.buttons,
          [action.payload.button]: false,
        },
      }
    case MOD:
      if (state.keyboardMode === 'play') return state
      if (state.buttons[1]) {
        const harmonicity = (state.parameters.harmonicity - (action.payload.delta > 0 ? 0.25 : -0.25)) > 0
          ? state.parameters.harmonicity - (action.payload.delta > 0 ? 0.25 : -0.25)
          : state.parameters.harmonicity
        sendControl('Harmonicity', harmonicity)
        return {
          ...state,
          parameters: {
            ...state.parameters,
            harmonicity,
          },
        }
      }
      if (state.buttons[2]) {
        const modulation = (state.parameters.modulation - action.payload.delta / 2.0).toFixed() > 0
          ? (state.parameters.modulation - action.payload.delta / 2.0).toFixed()
          : state.parameters.modulation
        sendControl('Modulation', modulation)
        return {
          ...state,
          parameters: {
            ...state.parameters,
            modulation,
          },
        }
      }
      else return state
    case CHANGE_VOLUME:
      sendControl('MasterVolume', action.payload.volume)
      return {
        ...state,
        parameters: {
          ...state.parameters,
          masterVolume: action.payload.volume,
        },
      }
    default:
      return state
  }
}

export default app
