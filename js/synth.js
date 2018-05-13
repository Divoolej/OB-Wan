import { ipcRenderer } from 'electron'

ipcRenderer.on('noteOn', (_event, { note, velocity }) => {
  // NOT IMPLEMENTED
})

ipcRenderer.on('noteOff', (_event, { note }) => {
  // NOT IMPLEMENTED
})

