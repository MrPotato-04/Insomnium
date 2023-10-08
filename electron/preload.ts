const { contextBridge, ipcRenderer } = require('electron')

const api = {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    handle_window: (e) => {
        ipcRenderer.invoke(e)
    }
}
console.log('preload.ts loaded')
contextBridge.exposeInMainWorld('api', api)