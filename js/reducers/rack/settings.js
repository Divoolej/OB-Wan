const initialState = {
  availableInstruments: ['Synth', 'PolySynth', 'MonoSynth'],
  availableVoices: ['Synth', 'MonoSynth'],
  availablePolyphony: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default settings
