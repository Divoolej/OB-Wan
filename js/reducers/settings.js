const initialState = {
  availableMidiInputs: [],
  selectedMidiInput: null,
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'SETTINGS_SET_AVAILABLE_MIDI_INPUTS':
      return {
        ...state,
        availableMidiInputs: action.payload.inputs,
      }
    case 'SETTINGS_SET_SELECTED_MIDI_INPUT':
      return {
        ...state,
        selectedMidiInput: action.payload.input,
      }
    default:
      return state
  }
}

export default settings
