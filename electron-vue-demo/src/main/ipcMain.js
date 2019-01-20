var {ipcMain,BrowserWindow} =require('electron');

ipcMain.on('toMain', (e, data)=>{
    console.log(data)
})

//接收渲染进程广播的数据执行最小化 最大化  关闭的操作
//获取当前的窗口对象   BrowserWindow.getFocusedWindow();

ipcMain.on('window-min',()=>{
    BrowserWindow.getFocusedWindow().minimize()
})

ipcMain.on('window-max',()=>{
    if(BrowserWindow.getFocusedWindow().isMaximized()){
        BrowserWindow.getFocusedWindow().restore();
     }else{
        BrowserWindow.getFocusedWindow().maximize()
    }
})

ipcMain.on('window-close',()=>{
    BrowserWindow.getFocusedWindow().close()
})