/* eslint-disable */
const path = require('path');
let btn = document.querySelector('#btn');
const BrowerWindow = require('electron').remote.BrowserWindow;
let win = null;

btn.onclick = function () {
    win = new BrowerWindow({
        width: 400,
        height: 300,
        frame: true,
        fullscreen: false
    })
    win.loadURL(`file://${__dirname}/news.html`);
    win.on('closed', () => {
        win = null;
    });
}