export const setAvailableMidiInputs = (inputs) => ({
  type: 'SETTINGS_SET_AVAILABLE_MIDI_INPUTS',
  payload: { inputs },
})

export const setSelectedMidiInput = (input) => ({
  type: 'SETTINGS_SET_SELECTED_MIDI_INPUT',
  payload: { input },
})
