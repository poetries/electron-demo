/* eslint-disable */
// clipboard可以在主进程或渲染进程使用

const { clipboard, nativeImage }  = require('electron')

//复制
// 运行ctrl+v可看到复制的内容
// clipboard.writeText('poetries')

// clipboard.readText() //获取复制的内容 粘贴

// 双击复制消息
let msg = document.querySelector('#msg')
let plat = document.querySelector('#plat')
let text = document.querySelector('#text')

msg.ondblclick  = function () {
    clipboard.writeText(msg.innerHTML)
    alert(msg.innerHTML)
}
plat.onclick = function () {
    text.value = clipboard.readText()
}

// 复制图片显示到界面
let copyImg = document.querySelector('#copyImg')
copyImg.onclick = function () {
    // 结合nativeImage模块
    let image = nativeImage.createFromPath('../static/img/lover.png') 

    // 复制图片
    clipboard.writeImage(image)

    // 粘贴图片
    let imgSrc = clipboard.readImage().toDataURL() // base64图片

    // 显示到页面上
    let imgDom = new Image()
    imgDom.src = imgSrc 
    document.body.appendChild(imgDom)
}
