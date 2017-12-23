import { ipcRenderer } from 'electron'
import Instrument from './synth/instrument.js'

const instrumentInstance = new Instrument();

ipcRenderer.on('loadInstrument', (_event, { instrument }) => (
  instrumentInstance.load(instrument)
))

ipcRenderer.on('noteOn', (_event, { note, velocity }) => (
  instrumentInstance.onNoteOn(note, velocity)
))

ipcRenderer.on('noteOff', (_event, { note }) => instrumentInstance.onNoteOff(note))

ipcRenderer.on('changePolySynthVoice', (_event, { voice }) => (
  instrumentInstance.changePolySynthVoice(voice)
))

ipcRenderer.on('changePolySynthPolyphony', (_event, { polyphony }) => (
  instrumentInstance.changePolySynthPolyphony(polyphony)
))

