const { app, BrowserWindow } = require('electron');
const path = require('path');
const { setMainMenu } = require('./app-menu');

let mainWindow;

app.on('ready', () => {
  // Create the browser main window
  mainWindow = new BrowserWindow({
    show: false
  });
  // Set the load URL
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
  // Set the menu of the main window's application
  setMainMenu();
  // When the main window is ready, show it
  mainWindow.on('ready-to-show', () => mainWindow.show());
});
