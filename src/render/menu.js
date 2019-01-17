/* eslint-disable */
// 在渲染进程中通过remote模块调用主进程中的模块
const { Menu }  = require('electron').remote
const { remote } = require('electron')

// 文档 https://electronjs.org/docs/api/menu-item
// 菜单项目
let menus = [
    {
        label: '文件',
        submenu: [
            {
                label: '新建文件',
                accelerator: 'ctrl+n', // 绑定快捷键
                click: function () { // 绑定事件
                    console.log('新建文件')
                }
            },
            {
                label: '新建窗口',
                click: function () {
                    console.log('新建窗口')
                }
            }
        ]
    },
    {
        label: '编辑',
        submenu: [
            {
                label: '复制',
                role: 'copy' // 调用内置角色实现对应功能
            },
            {
                label: '剪切',
                role: 'cut'  // 调用内置角色实现对应功能
            }
        ]
    },
    {
        label: '视图',
        submenu: [
            {
                label: '浏览'
            },
            {
                label: '搜索'
            }
        ]
    }
]

let m = Menu.buildFromTemplate(menus)
// Menu.setApplicationMenu(m)

// 绑定右键菜单

window.addEventListener('contextmenu', (e)=>{
   e.preventDefault()
   m.popup({
    window: remote.getCurrentWindow()
   })
}, false)