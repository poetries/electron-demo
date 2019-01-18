/* eslint-disable */
let { ipcMain,BrowserWindow } = require('electron')
const path = require('path')

let win;

// 接收到广播
ipcMain.on('openwindow', (e, userInfo)=> {
      // 获取当前窗口ID
    let winId = BrowserWindow.getFocusedWindow().id

    // 调用window打开新窗口
    win = new BrowserWindow({
        width: 400,
        height: 300,
    });
    win.loadURL(path.join('file:',__dirname, '../news.html'));

    // 新开窗口调试模式
    win.webContents.openDevTools()

  

    // 把渲染进程传递过来的数据再次传递给渲染进程news
    // 等待窗口加载完
    win.webContents.on('did-finish-load', ()=>{
        win.webContents.send('toNews', userInfo, winId)
    })
    

    win.on('closed', () => {
        win = null;
      });
})




