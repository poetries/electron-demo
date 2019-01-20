<template>
  <div id="app">
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
  export default {
    name: 'electron-vue-demo'
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
