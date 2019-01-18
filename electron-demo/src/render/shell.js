/* eslint-disable */
const { shell } = require('electron')
let shellDom = document.querySelector('#shellDom');

shellDom.onClick = function () {
    shell.openExternal('https://github.com/poetries')
}