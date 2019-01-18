/* eslint-disable */
const {ipcMain, app} = require('electron')

// 监听客户端的退出
ipcMain.on('exit-app', (e, data)=>{
    console.log('exit')
    app.quit()
})