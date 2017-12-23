import { SYNTH, MONO_SYNTH, POLY_SYNTH } from '../../constants.js'

const initialState = {
  availableInstruments: [SYNTH, POLY_SYNTH, MONO_SYNTH],
  availableVoices: [SYNTH, MONO_SYNTH],
  availablePolyphony: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default settings
