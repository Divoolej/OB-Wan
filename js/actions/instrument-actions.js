import Tone from 'tone'

export const toggleInstrumentEnabled = () => ({
  type: 'INSTRUMENT_TOGGLE_ENABLED',
  payload: {},
})

export const changeInstrument = (instrumentName) => {
  let synth = null
  switch (instrumentName) {
    case 'Synth':
      synth = new Tone.Synth();
      break;
    case 'PolySynth':
      synth = new Tone.PolySynth();
      break;
    case 'MonoSynth':
      synth = new Tone.MonoSynth({ volume: -20 });
      break;
  }
  return {
    type: 'INSTRUMENT_CHANGE_INSTRUMENT_TYPE',
    payload: {
      type: instrumentName,
      synth: synth,
    }
  }
}

export const noteOn = (note, velocity = 1) => ({
  type: 'INSTRUMENT_NOTE_ON',
  payload: { note, velocity },
})

export const noteOff = (note) => ({
  type: 'INSTRUMENT_NOTE_OFF',
  payload: { note },
})

