/* eslint-disable */
var { ipcRenderer } = require('electron');
const BrowerWindow = require('electron').remote.BrowserWindow;

// let username = localStorage.getItem('username')
// console.log(username)

// 监听主进程传递过来的数据 
ipcRenderer.on('toNews',(e, userInfo, winId)=>{
    // windID 第一个窗口ID
    // 获取对应ID的窗口
    let firstWin = BrowerWindow.fromId(winId)
    firstWin.webContents.send('toIndex', '来自news进程反馈的信息')
    console.log(userInfo)
})

