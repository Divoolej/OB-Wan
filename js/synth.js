import { ipcRenderer } from 'electron'
import fs from 'fs'
import Pd from 'webpd'

var patch
fs.readFile('patches/sine.pd', (err, data) => {
  patch = Pd.loadPatch(data.toString())
  Pd.start()
})

ipcRenderer.on('noteOn', (_event, { note, velocity }) => {
  Pd.send('note', [note])
  Pd.send('noteOn', [])
})

ipcRenderer.on('noteOff', (_event, { note }) => {
  Pd.send('noteOff', [])
})

