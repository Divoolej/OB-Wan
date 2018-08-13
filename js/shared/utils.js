import { ipcRenderer } from 'electron'

export const sendControl = (type, payload) => ipcRenderer.send('control', { type, payload })
