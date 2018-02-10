import Tone from 'tone'
import Instrument from './instrument'

export default class FMSynth extends Instrument {
  constructor() {
    super();
    this.synth = new Tone.PolySynth({
      polyphony: 8,
      voice: Tone.FMSynth,
    }).toMaster();
  }
}