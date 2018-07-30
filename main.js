const { app, BrowserWindow } = require("electron");
const path = require("path");
const { setMainMenu } = require("./app-menu");

const { environment } = require("./config");

try {
  require("electron-reloader")(module);
} catch (err) {}

if (environment === "DEVELOPMENT") {
  require("electron-debug")({ showDevTools: true });
}

let mainWindow;

app.on("ready", async () => {
  // Create the browser main window
  mainWindow = new BrowserWindow({
    show: false,
  });
  mainWindow.loadURL(path.join("file://", __dirname, "index.html"));
  // Set the menu of the main window's application
  setMainMenu();
  // When the main window is ready, show it
  mainWindow.on("ready-to-show", () => mainWindow.show());
});
