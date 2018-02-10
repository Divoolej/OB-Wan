import Tone from 'tone'

export default class Instrument {
  onNoteOn(note, velocity) {
    this.synth.triggerAttack(note, '+0.025', velocity || 1)
  }

  onNoteOff(note) {
    this.synth.triggerRelease(note)
  }
}
