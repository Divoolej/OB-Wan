import Tone from 'tone'
import Instrument from './instrument.js'

export default class FMSynth extends Instrument {
  constructor() {
    super(Tone.FMSynth)
  }
}