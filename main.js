const { app, BrowserWindow } = require('electron');
const path = require('path');
const { setMainMenu } = require('./app-menu');
const execa = require('execa');

require('electron-debug')({ showDevTools: true });

let mainWindow;

function runParcel() {
  return new Promise(resolve => {
    let output = '';
    const parcelProcess = execa('parcel', ['index.html']);
    const concat = chunk => {
      output += chunk;
      console.log(output);
      if (output.includes('Built in ')) {
        parcelProcess.stdout.removeListener('data', concat);
        console.log(output);
        resolve();
      }
    };
    parcelProcess.stdout.on('data', concat);
  });
}

app.on('ready', async () => {
  // Create the browser main window
  mainWindow = new BrowserWindow({
    show: false,
  });
  await runParcel();
  // Set the load URL
  mainWindow.loadURL('http://localhost:1234');
  // Set the menu of the main window's application
  setMainMenu();
  // When the main window is ready, show it
  mainWindow.on('ready-to-show', () => mainWindow.show());
});
