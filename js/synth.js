Tone = require('tone')
const { ipcRenderer } = require('electron');

ipcRenderer.on('*', (_event, payload) => {
  console.log(payload)
})
