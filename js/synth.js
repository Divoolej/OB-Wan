import { ipcRenderer } from 'electron'
import FMSynth from './synth/fm_synth.js'
import DuoSynth from './synth/duo_synth.js'
import { FM_SYNTH, DUO_SYNTH } from './constants.js'

const fmSynthInstance = new FMSynth()
const duoSynthInstance = new DuoSynth()
window.synth = duoSynthInstance

ipcRenderer.on('noteOn', (_event, { note, velocity }) => {
  fmSynthInstance.onNoteOn(note, velocity)
  duoSynthInstance.onNoteOn(note, velocity)
})

ipcRenderer.on('modulation', (_event, { synth, parameters }) => {
  switch (synth) {
    case FM_SYNTH:
      fmSynthInstance.modulate(parameters)
      break
    case DUO_SYNTH:
      duoSynthInstance.modulate(parameters)
      break
  }
})

ipcRenderer.on('changeFilterSettings', (_event, { _synth, parameters }) => (
  fmSynthInstance.changeFilterSettings(parameters)
))

ipcRenderer.on('noteOff', (_event, { note }) => {
  fmSynthInstance.onNoteOff(note)
  duoSynthInstance.onNoteOff(note)
})

