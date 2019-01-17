/* eslint-disable */
let openWindow = document.querySelector('#openWindow');

var { ipcRenderer } = require('electron');

// 渲染进程和渲染进程直接的通信========
openWindow.onclick = function () {
    // 传递消息给主进程
    ipcRenderer.send('openwindow', {name:'poetries', age: 23})

    // 传递给打开的窗口 渲染进程和渲染进程直接的通信
    localStorage.setItem('username', 'poetries')
    
}

ipcRenderer.on('toIndex', (e, data)=>{
    console.log('===', data)
})
