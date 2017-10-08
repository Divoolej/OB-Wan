export const changeInstrument = (instrumentName) => {
  let polySynthVoice = null
  let polyphony = 1
  switch (instrumentName) {
    case 'Synth':
      // synth = new Tone.Synth().toMaster()
      break
    case 'PolySynth':
      polySynthVoice = 'Synth'
      polyphony = 4
      break
    case 'MonoSynth':
      // synth = new Tone.MonoSynth({ volume: -20 }).toMaster()
      break
  }
  return {
    type: 'INSTRUMENT_CHANGE_INSTRUMENT_TYPE',
    payload: {
      type: instrumentName,
      polySynthVoice,
      polyphony,
    }
  }
}

export const changePolySynthVoice = (voice) => {
  switch (voice) {
    case 'Synth':
      // synth = new Tone.PolySynth().toMaster()
      break
    case 'MonoSynth':
      // synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster()
      // synth.set({ volume: -20 })
      break
  }
  return {
    type: 'INSTRUMENT_CHANGE_POLY_SYNTH_VOICE',
    payload: {
      polySynthVoice: voice,
    }
  }
}

export const changePolySynthPolyphony = (polyphony) => ({
  type: 'INSTRUMENT_CHANGE_POLY_SYNTH_POLYPHONY',
  payload: { polyphony }
})

export const noteOn = (note, velocity = 1) => ({
  type: 'INSTRUMENT_NOTE_ON',
  payload: { note, velocity },
})

export const noteOff = (note) => ({
  type: 'INSTRUMENT_NOTE_OFF',
  payload: { note },
})

