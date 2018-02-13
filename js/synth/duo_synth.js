import Tone from 'tone'
import Instrument from './instrument.js'

export default class DuoSynth extends Instrument {
  constructor() {
    super(Tone.DuoSynth)
    this.synth.toMaster()
  }
}