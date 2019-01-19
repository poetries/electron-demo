/* eslint-disable */

var {globalShortcut, app} = require('electron')

app.on('ready', ()=>{
    // 注册全局快捷键
    globalShortcut.register('command+e', ()=>{
        console.log(1)
    })

    // 检测快捷键是否注册成功 true是注册成功
    let isRegister = globalShortcut.isRegistered('command+e')
    console.log(isRegister)
})

// 退出的时候取消全局快捷键
app.on('will-quit', ()=>{
    globalShortcut.unregister('command+e')
})