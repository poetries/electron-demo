/* eslint-disable */
// h5api实现通知
let path = require('path')

let options = {
    title: 'electron 通知API',
    body: 'hello poetries',
    icon: path.join('../static/img/favicon2.ico') // 通知图标
}

let myNotification  = new window.Notification(options.title, options)