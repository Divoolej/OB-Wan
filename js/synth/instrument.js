import Tone from 'tone'
import { SYNTH, MONO_SYNTH, POLY_SYNTH } from '../constants.js'

export default class Instrument {
  constructor() {
    this.load({ type: POLY_SYNTH })
  }

  load(instrument) {
    this.synthType = instrument.type
    this.polyphony = instrument.polyphony || 4
    this.polySynthVoice = instrument.polySynthVoice || SYNTH

    switch (this.synthType) {
      case SYNTH:
        this.synth = new Tone.Synth()
        break
      case MONO_SYNTH:
        this.synth = new Tone.MonoSynth()
        break
      case POLY_SYNTH:
        let voice
        switch (this.polySynthVoice) {
          case SYNTH:
            voice = Tone.Synth
            break
          case MONO_SYNTH:
            voice = Tone.MonoSynth
            break
        }
        this.synth = new Tone.PolySynth(this.polyphony, voice)
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

  changePolySynthVoice(voice) {
    this.polySynthVoice = voice
    this.synth.dispose()
    switch (this.polySynthVoice) {
      case SYNTH:
        this.synth = new Tone.PolySynth(this.polyphony, Tone.Synth)
        break
      case MONO_SYNTH:
        this.synth = new Tone.PolySynth(this.polyphony, Tone.MonoSynth)
        break
    }
    this.synth.toMaster()
  }

  changePolySynthPolyphony(polyphony) {
    this.polyphony = polyphony
    this.synth = new Tone.PolySynth(this.polyphony, Tone.Synth)
    this.synth.toMaster()
  }
}
