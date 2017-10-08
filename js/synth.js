import Tone from 'tone'
import { ipcRenderer } from 'electron'

let type = null
let synth = null
let lastPlayedNote = null

const loadInstrument = instrument => {
  type = instrument.type
  switch (type) {
    case 'Synth':
      synth = new Tone.Synth()
      break
    case 'MonoSynth':
      synth = new Tone.MonoSynth()
      break
    case 'PolySynth':
      synth = new Tone.PolySynth(16, Tone.MonoSynth)
      break
  }
  synth.toMaster()
}

ipcRenderer.on('loadInstrument', (_event, { instrument }) => loadInstrument(instrument))

ipcRenderer.on('noteOn', (_event, { note, velocity }) => {
  synth.triggerAttack(note, '+0.025', velocity || 1)
  lastPlayedNote = note
})

ipcRenderer.on('noteOff', (_event, { note }) => {
  if (type !== 'PolySynth') {
    if (note === lastPlayedNote) {
      synth.triggerRelease()
    }
  } else {
    synth.triggerRelease(note)
  }
})

loadInstrument({
  type: 'PolySynth',
})
