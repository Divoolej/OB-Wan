import Tone from 'tone'
import { SYNTH_POLYPHONY } from '../constants.js';

export default class Instrument {
  constructor(synthType) {
    this.synth = new Tone.PolySynth({
      polyphony: SYNTH_POLYPHONY,
      voice: synthType,
    }).toMaster()
  }

  onNoteOn(note, velocity) {
    this.synth.triggerAttack(note, '+0.025', velocity || 1)
  }

  onNoteOff(note) {
    this.synth.triggerRelease(note)
  }

  modulate(parameters) {
    this.synth.set(parameters)
  }
}
