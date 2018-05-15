import { ipcRenderer } from 'electron'
import fs from 'fs'
import Pd from 'webpd'

var patch
fs.readFile('patches/ob-wan.pd', (err, data) => {
  patch = Pd.loadPatch(data.toString())
  Pd.start()
})

ipcRenderer.on('noteOn', (_event, { note }) => {
  Pd.send('note', [note])
  Pd.send('noteOn', [])
})

ipcRenderer.on('noteOff', (_event, {}) => {
  Pd.send('noteOff', [])
})

ipcRenderer.on('modulation', (_event, { type, value }) => {
  Pd.send(type, [value])
})
