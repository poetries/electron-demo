/* eslint-disable */
/**
 * 系统托盘
 */

let { Menu,Tray, BrowserWindow, app } = require('electron')
let path = require('path')

let iconTray = new Tray(path.join(__dirname, '../static/img/lover.png'))

// 绑定右键菜单
let trayMenu = Menu.buildFromTemplate([
    {
        label: '设置',
        click: function () {
            console.log('设置')
        }
    },
    {
        label: '升级',
        click: function () {
            console.log('升级')
        }
    },
    {
        label: '退出',
        click: function () {
            // console.log('退出')
            app.quit()
        }
    }
])

iconTray.setContextMenu(trayMenu)

// 鼠标放上去提示
iconTray.setToolTip('hello poetries')

// 实现点击关闭按钮，让应用保存在托盘里面，双击托盘打开
// let win = BrowserWindow.getFocusedWindow()

// win.on('close', (e)=>{
//     e.preventDefault()
//     win.hide()
// })

// iconTray.on('double-click', (e)=>{
//     win.show()
// })
