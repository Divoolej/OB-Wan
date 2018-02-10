import { ipcRenderer } from 'electron'
import FMSynth from './synth/fm_synth.js'

const instrumentInstance = new FMSynth();

ipcRenderer.on('noteOn', (_event, { note, velocity }) => (
  instrumentInstance.onNoteOn(note, velocity)
))

ipcRenderer.on('noteOff', (_event, { note }) => instrumentInstance.onNoteOff(note))

