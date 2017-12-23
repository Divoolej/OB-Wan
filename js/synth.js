import { ipcRenderer } from 'electron'
import Instrument from './synth/instrument.js'

const instrument = new Instrument();

ipcRenderer.on('loadInstrument', (_event, { instrument }) => instrument.load(instrument))

ipcRenderer.on('noteOn', (_event, { note, velocity }) => {
  instrument.onNoteOn(note, velocity)
})

ipcRenderer.on('noteOff', (_event, { note }) => {
  instrument.onNoteOff(note)
})
