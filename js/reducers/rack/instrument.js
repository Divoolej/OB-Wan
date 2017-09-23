import Tone from 'tone'

const initialState = {
  enabled: true,
  type: 'Synth',
  synth: new Tone.Synth().toMaster(),
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
      state.synth.dispose()
      return {
        ...state,
        type: action.payload.type,
        synth: action.payload.synth.toMaster(),
      }
    case 'INSTRUMENT_NOTE_ON':
      if (!state.enabled) { return state }
      state.synth.triggerAttack(action.payload.note, '+0', action.payload.velocity || 1)
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
