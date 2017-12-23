import { ipcRenderer } from 'electron';

import { SYNTH, POLY_SYNTH } from '../constants.js'

export const changeInstrument = (instrumentName) => {
  let polySynthVoice = undefined
  let polyphony = undefined
  switch (instrumentName) {
    case POLY_SYNTH:
      polySynthVoice = SYNTH
      polyphony = 4
      break
  }

  ipcRenderer.send('synth', {
    type: 'loadInstrument',
    payload: {
      instrument: {
        type: instrumentName,
        polySynthVoice: polySynthVoice,
        polyphony: polyphony
      }
    }
  })

  return {
    type: 'INSTRUMENT_CHANGE_INSTRUMENT_TYPE',
    payload: {
      type: instrumentName,
      polySynthVoice,
      polyphony
    }
  }
}

export const changePolySynthVoice = (voice) => {
  ipcRenderer.send('synth', {
    type: 'changePolySynthVoice',
    payload: { voice: voice }
  })

  return {
    type: 'INSTRUMENT_CHANGE_POLY_SYNTH_VOICE',
    payload: {
      polySynthVoice: voice
    }
  }
}

export const changePolySynthPolyphony = (polyphony) => {
  ipcRenderer.send('synth', {
    type: 'changePolySynthPolyphony',
    payload: { polyphony: polyphony }
  })

  return {
    type: 'INSTRUMENT_CHANGE_POLY_SYNTH_POLYPHONY',
    payload: { polyphony }
  }
}
