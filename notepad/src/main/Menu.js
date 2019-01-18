/* eslint-disable */
let {Menu,shell,ipcMain,BrowserWindow} =require('electron');

let template = [
    {
        label: '文件',
        submenu: [
            {
                label: '新建',
                accelerator: 'command+n', // 绑定快捷键
                click: function(){
                    BrowserWindow.getFocusedWindow().send('action', 'new')
                }

            },
            {
                label: '打开',
                accelerator: 'command+o', // 绑定快捷键
                click: function(){
                    // 主进程通知渲染进程操作文件
                    BrowserWindow.getFocusedWindow().send('action', 'open')
                }
            },
            
            {   
                label: '保存',
                accelerator: 'command+s', // 绑定快捷键
                click: function(){
                    BrowserWindow.getFocusedWindow().send('action', 'save')
                }
            },
            {
                type: 'separator'
            },
          
         
            {
                label: '打印',
                accelerator: 'command+p', // 绑定快捷键
                click: function(){
                    BrowserWindow.getFocusedWindow().send('action', 'print')
                }
            },
            {
                label: '退出',
                accelerator: 'command+q', // 绑定快捷键
                click: function(){
                    BrowserWindow.getFocusedWindow().send('action', 'exit')
                }
            }
        ]
    },
    {
        label: '编辑',
        submenu: [
            {
                label: '加载',
                role: 'reload'
            },
            {
                label: '撤销',
                role: 'undo'
            },
            {
                label: '恢复',
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {   label: '截切',
                role: 'cut'
            },
            {
                label: '复制',
                role: 'copy'
            },
            {
                label: '黏贴',
                role: 'paste'
            },
          
            {
                label: '删除',
                role: 'delete'
            },
            {
                label: '全选',
                role: 'selectall'
            }
        ]
    },    
    {
        label: '视图',
        submenu: [
            {
                label: '缩小',
                role: 'zoomin'
            },
            {   label: '放大',
                role: 'zoomout'
            },
            {   label: '重置缩放',
                role: 'resetzoom'
            },
            {
                type: 'separator'
            },
            {
                label: '全屏',
                role: 'togglefullscreen'
            }
        ]
    },
    {
        label: '帮助',
        submenu: [
            {
                label: '关于',
                click() { 
                    shell.openExternal('http://blog.poetries.top');
                }
            }
        ]
    }
];

let m=Menu.buildFromTemplate(template);
Menu.setApplicationMenu(m);



//右键菜单
const contextMenuTemplate=[
    {
        label: '撤销',
        role: 'undo'
    },
    {
        label: '恢复',
        role: 'redo'
    },
    {
        type: 'separator'
    },
    {   label: '截切',
        role: 'cut'
    },
    {
        label: '复制',
        role: 'copy'
    },
    {
        label: '黏贴',
        role: 'paste'
    },
    { type: 'separator' },  //分隔线
    { label: '全选',
        role: 'selectall' 
    }   //Select All菜单项
];

let contextMenu=Menu.buildFromTemplate(contextMenuTemplate);

// 监听右键事件
ipcMain.on('contextMenu',function(){
    contextMenu.popup(BrowserWindow.getFocusedWindow())
})
