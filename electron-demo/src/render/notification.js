/* eslint-disable */
// h5api实现通知
var path = require('path')

var options = {
    title: 'electron 通知API',
    body: 'hello poetries',
    icon: path.join('../static/img/favicon2.ico') // 通知图标
}



 document.querySelector('#showNotification').onclick = function () {
    var myNotification  = new window.Notification(options.title, options)
    myNotification.onclick = function () {
        console.log('click notification')
    }
 }


 // 监听网络变化
// 端开网络 再次连接测试
// 监听网络变化实现消息通知
 window.addEventListener('online', function(){
    console.log('online')
 }); 
 window.addEventListener('offline', function(){
    // 断开网络触发事件
    var options = {
        title: 'QQ邮箱',
        body: '网络异常，请检查你的网络',
        icon: path.join('../static/img/favicon2.ico') // 通知图标
    }
    var myNotification  = new window.Notification(options.title, options)
    myNotification.onclick = function () {
        console.log('click notification')
    }
 });


