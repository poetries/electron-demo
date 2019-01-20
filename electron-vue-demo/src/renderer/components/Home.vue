<template>
  <div id="wrapper">
    {{msg}}
    <el-button type="success"  @click="sendMsg()">给主进程广播数据</el-button>
    <el-button type="warning" @click="openUrl()"> 前往Poetries blo</el-button>
    <div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'home-page',
    data(){
      return {
        msg: '首页组件'
      }
    },
    components: {  },
    methods: {
      sendMsg(){ 
        this.$electron.ipcRenderer.send('toMain', {name:'poetries', age: 22, msg: '我是渲染进程数据'})
      },
      openUrl() {
        this.$electron.shell.openExternal('http://blog.poetries.top')
      }
    }
  }
</script>