var {ipcMain}  = require('electron')

ipcMain.on('toMain', (e, data)=>{
    console.log(data)
})