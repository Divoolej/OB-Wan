const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win, synth

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 1280, height: 778 })
  // And the Synth window (hidden)
  synth = new BrowserWindow(/*{ show: false }*/)

  // Load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'ui.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Load the synth.html
  synth.loadURL(url.format({
    pathname: path.join(__dirname, 'synth.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Install Redux DevTools
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  synth.on('closed', () => {
    synth = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// 'synth' message acts as a proxy connecting the UI with the Synth window.
ipcMain.on('synth', (_event, { type, payload }) => {
  synth.webContents.send(type, payload)
})
