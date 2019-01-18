/* eslint-disable */
const {ipcRenderer, remote} = require('electron')
const fs = require('fs')
const textarea = document.querySelector('#textarea')

var isSaveFlag = true; // 判断文件是否保存
var currentFile = ''; // 保存当前文件的路径

document.title = '无标题'

// 检测内容变化
textarea.oninput = function () {
    if(isSaveFlag) {
        document.title += ' *'
    }
    isSaveFlag = false;
}

// 监听鼠标右键事件
window.addEventListener('contextmenu', e=>{
    e.preventDefault();
    ipcRenderer.send('contextMenu');
})

// 监听主进程操作
ipcRenderer.on('action', (e, action)=>{
    switch(action){
        case 'new':
            // 判断文件是否保存 如果没有保存提示
            showSaveDialog()
            textarea.value = ''
            break;
        case 'open':
            showSaveDialog()
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
            saveCurrentDoc()
            break;
        case 'exit':

            break;
    }
})

// 判断文件是否保存 提示
function showSaveDialog() {
    if(!isSaveFlag) {
        let index = remote.dialog.showMessageBox({
            type: 'question',
            message: '是否要保存此文件?',
            buttons: ['YES', 'NO']
        })
        if(index==0) {
            // 执行保存操作
            saveCurrentDoc()
        }
    }
}

// 执行保存操作
function saveCurrentDoc() {
    if(!currentFile){ // 当前路径不存在 提示保存
       let dir =  remote.dialog.showSaveDialog({
            defaultPath: 'example.txt',
            filters: [
                { name: 'All Files', extensions: ['*'] }
            ]
        })
         // console.log(data)
         if(dir){
            currentFile = dir;
            fs.writeFileSync(currentFile, textarea.value)
            isSaveFlag = true;
            document.title = currentFile //改变标题
        }
    }else{
        // 下次直接保存 不提示对话框
        fs.writeFileSync(currentFile, textarea.value)
        isSaveFlag = true;
        document.title = currentFile //改变标题
    }
}