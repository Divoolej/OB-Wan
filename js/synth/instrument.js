import Tone from 'tone'
import { SYNTH, MONO_SYNTH, POLY_SYNTH } from '../constants.js'

export default class Instrument {
  constructor() {
    this.load({ type: POLY_SYNTH })
  }

  load(instrument) {
    this.synthType = instrument.type
    switch (this.synthType) {
      case SYNTH:
        this.synth = new Tone.Synth()
        break
      case MONO_SYNTH:
        this.synth = new Tone.MonoSynth()
        break
      case POLY_SYNTH:
        this.synth = new Tone.PolySynth(16, Tone.MonoSynth)
        break
    }
    this.synth.toMaster()
  }

  onNoteOn(note, velocity) {
    this.synth.triggerAttack(note, '+0.025', velocity || 1)
    this.lastPlayedNote = note
  }

  onNoteOff(note) {
    if (this.synthType !== POLY_SYNTH) {
      if (note === this.lastPlayedNote) {
        this.synth.triggerRelease()
      }
    } else {
      this.synth.triggerRelease(note)
    }
  }
}
