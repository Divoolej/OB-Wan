import Tone from 'tone'
import Instrument from './instrument.js'

export default class FMSynth extends Instrument {
  constructor() {
    super(Tone.FMSynth)
  	this.filter = new Tone.Filter({
      frequency: 20000,
    }).toMaster()
    this.synth.connect(this.filter)
  }

  changeFilterSettings(parameters) {
    this.filter.set(parameters)
  }
}