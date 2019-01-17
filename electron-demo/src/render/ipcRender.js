/* eslint-disable */
let send = document.querySelector('#send');
let sendFeedback = document.querySelector('#sendFeedback');
let sendSync = document.querySelector('#sendSync');

var { ipcRenderer } = require('electron');

send.onclick = function () {
    // 触发主进程里面的方法
    ipcRenderer.send('sendMsg', {name:'poetries', age: 23})
}
// 执行并反馈给渲染进程
sendFeedback.onclick = function () {
    // 触发主进程里面的方法
    ipcRenderer.send('sendFeedback', {name:'poetries', age: 23})
}


// 接收主进程广播的事件
ipcRenderer.on('sendFeedbackToRender', (e, data)=>{
    console.log('event\n ', e)
    console.log('data\n ', data)
})

// 渲染进程和主进程同步通信
sendSync.onclick = function () {
    // 同步广播数据
   let msg =  ipcRenderer.sendSync('sendsync', {name:'poetries', age: 23})

   console.log('msg\n ', msg)
}

