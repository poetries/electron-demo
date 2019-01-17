/* eslint-disable */
const { ipcMain }  = require('electron')

// 主进程处理渲染进程广播数据
ipcMain.on('sendMsg', (event, data)=> {
    console.log('data\n ', data)
    console.log('event\n ', event)
})

// 主进程处理渲染进程广播数据，并反馈给渲染进程
ipcMain.on('sendFeedback', (event, data)=> {
    // console.log('data\n ', data)
    // console.log('event\n ', event)
    // 主进程给渲染进程广播数据
    event.sender.send('sendFeedbackToRender', '来自主进程的反馈')
})

// 渲染进程和主进程同步通信 接收同步广播
ipcMain.on('sendsync', (event, data)=> {
    // console.log('data\n ', data)
    // console.log('event\n ', event)
    // 主进程给渲染进程广播数据
    event.returnValue ='渲染进程和主进程同步通信 接收同步广播，来自主进程的反馈.';
})