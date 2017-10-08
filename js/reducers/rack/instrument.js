const initialState = {
  type: 'PolySynth',
  polySynthVoice: 'Synth',
  polyphony: 4,
  synth: null, //new Tone.PolySynth().toMaster(),
  lastPlayedNote: null,
}

const instrument = (state = initialState, action) => {
  switch (action.type) {
    case 'INSTRUMENT_CHANGE_INSTRUMENT_TYPE':
      if (state.type === action.payload.type) { return state }
      state.synth.dispose()
      return {
        ...state,
        type: action.payload.type,
        polySynthVoice: action.payload.polySynthVoice,
        polyphony: action.payload.polyphony,
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
    case 'INSTRUMENT_CHANGE_POLY_SYNTH_POLYPHONY':
      if (state.type !== 'PolySynth') { return state }
      state.synth.dispose()
      let synth = null
      switch (state.polySynthVoice) {
        case 'Synth':
          // synth = new Tone.PolySynth(action.payload.polyphony, Tone.Synth).toMaster()
          break
        case 'MonoSynth':
          // synth = new Tone.PolySynth(action.payload.polyphony, Tone.MonoSynth).toMaster()
          break
      }
      return {
        ...state,
        synth,
        polyphony: action.payload.polyphony,
      }
    case 'INSTRUMENT_NOTE_ON':
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
