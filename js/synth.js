import Tone from 'tone'
import { ipcRenderer } from 'electron'

ipcRenderer.on('noteOn', (_event, payload) => {
  console.log(payload)
})
