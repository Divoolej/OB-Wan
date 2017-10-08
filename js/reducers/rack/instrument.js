const initialState = {
  type: 'PolySynth',
  polySynthVoice: 'Synth',
  polyphony: 4,
  lastPlayedNote: null,
}

const instrument = (state = initialState, action) => {
  switch (action.type) {
    case 'INSTRUMENT_CHANGE_INSTRUMENT_TYPE':
      return {
        ...state,
        type: action.payload.type,
        polySynthVoice: action.payload.polySynthVoice,
        polyphony: action.payload.polyphony,
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
