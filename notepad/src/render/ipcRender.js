/* eslint-disable */
const {ipcRenderer, remote} = require('electron')
const fs = require('fs')
const textarea = document.querySelector('#textarea')

// 监听事件
window.addEventListener('contextmenu', e=>{
    e.preventDefault();
    ipcRenderer.send('contextMenu');
})

// 监听主进程操作
ipcRenderer.on('action', (e, action)=>{
    switch(action){
        case 'open':
            // 通过dialog打开文件
            remote.dialog.showOpenDialog({
                properties: ['openFile']
            },(path)=>{
                // 获取文件内容
               if(path){
                    let fileData = fs.readFileSync(path[0])
                    textarea.innerHTML = fileData
               }
            })
            break;
        case 'save':
            remote.dialog.showSaveDialog({
                defaultPath: 'example.txt',
                filters: [
                    { name: 'All Files', extensions: ['*'] }
                ]
            },(dir)=>{
                // console.log(data)
                if(dir){
                    fs.writeFile(dir, textarea.value, (err)=>{
                        if(!err){
                            console.log('success')
                        }
                    })
                }
                
            })
            break;
    }
})