const { app, Menu } = require('electron');
// Check if its running on Windows
const isWin = process.platform === 'win32';

const setMainMenu = () => {
  const template = [
    {
      label: isWin ? 'File' : app.getName(),
      submenu: [
        {
          label: isWin ? 'Exit' : `Quit ${app.getName()}`,
          accelerator: isWin ? 'Alt+F4' : 'CmdOrCtrl+Q',
          click() {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { role: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectall' }
      ]
    }
  ];
  // Build a menu from template
  const menu = Menu.buildFromTemplate(template);
  // Set the application menu
  Menu.setApplicationMenu(menu);
};

module.exports = { setMainMenu };
