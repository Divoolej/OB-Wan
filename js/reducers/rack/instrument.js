import { POLY_SYNTH, SYNTH } from '../../constants.js'

const initialState = {
  type: POLY_SYNTH,
  polySynthVoice: SYNTH,
  polyphony: 4,
}

const instrument = (state = initialState, action) => {
  switch (action.type) {
    case 'INSTRUMENT_CHANGE_INSTRUMENT_TYPE':
      return {
        ...state,
        type: action.payload.type,
        polySynthVoice: action.payload.polySynthVoice || state.polySynthVoice,
        polyphony: action.payload.polyphony || state.polyphony,
      }
    case 'INSTRUMENT_CHANGE_POLY_SYNTH_VOICE':
      return {
        ...state,
        polySynthVoice: action.payload.polySynthVoice,
      }
    case 'INSTRUMENT_CHANGE_POLY_SYNTH_POLYPHONY':
      return {
        ...state,
        polyphony: action.payload.polyphony,
      }
    default:
      return state
  }
}

export default instrument
