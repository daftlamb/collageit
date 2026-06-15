const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('licenseApi', {
  getStatus: () => ipcRenderer.invoke('license:getStatus'),
  activate: (email, code) => ipcRenderer.invoke('license:activate', { email, code }),
  clear: () => ipcRenderer.invoke('license:clear')
});
