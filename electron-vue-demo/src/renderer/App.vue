<template>
  <div id="app">
    <myHeader></myHeader>
    <div class="header">
      <el-button type="primary">
         <router-link to="/">首页</router-link>
      </el-button>
     <el-button type="primary">
        <router-link to="/news">新闻</router-link>
      </el-button>
      
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader.vue'; 
  export default {
    name: 'electron-vue-demo',
    components:{
      MyHeader:MyHeader
    }
  }
</script>

<style>
  /* CSS */
  .header {
    height: 100px;
    background: #000;
    text-align: center;
  }
  .header a {
    color: #fff;
  }
</style>
