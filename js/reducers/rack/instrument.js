import Tone from 'tone'

const initialState = {
  enabled: true,
  type: 'PolySynth',
  polySynthVoice: 'Synth',
  synth: new Tone.PolySynth().toMaster(),
  lastPlayedNote: null,
}

const instrument = (state = initialState, action) => {
  switch (action.type) {
    case 'INSTRUMENT_TOGGLE_ENABLED':
      return {
        ...state,
        enabled: !state.enabled,
      }
    case 'INSTRUMENT_CHANGE_INSTRUMENT_TYPE':
      if (state.type === action.payload.type) { return state }
      state.synth.dispose()
      return {
        ...state,
        type: action.payload.type,
        polySynthVoice: action.payload.polySynthVoice,
        synth: action.payload.synth,
      }
    case 'INSTRUMENT_CHANGE_POLY_SYNTH_VOICE':
      if (state.type !== 'PolySynth' || state.polySynthVoice === action.payload.polySynthVoice) {
        return state
      }
      state.synth.dispose()
      return {
        ...state,
        polySynthVoice: action.payload.polySynthVoice,
        synth: action.payload.synth,
      }
    case 'INSTRUMENT_NOTE_ON':
      if (!state.enabled) { return state }
      state.synth.triggerAttack(action.payload.note, '+0.025', action.payload.velocity || 1)
      return {
        ...state,
        lastPlayedNote: action.payload.note,
      }
    case 'INSTRUMENT_NOTE_OFF':
      if (state.type !== 'PolySynth') {
        if (action.payload.note === state.lastPlayedNote) {
          state.synth.triggerRelease()
        }
      } else {
        state.synth.triggerRelease(action.payload.note)
      }
      return state
    default:
      return state
  }
}

export default instrument
