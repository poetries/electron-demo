/* eslint-disable */
var { ipcRenderer } = require('electron');
let myWebview = document.querySelector('#myWebview')

ipcRenderer.on('openwebview', (e, url)=>{
    myWebview.src = url
})
