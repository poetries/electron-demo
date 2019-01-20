<template>
  <div id="nedb">
    <el-row>
        <el-col :span="10">
            <el-input
                placeholder="username"
                v-model="username"
                clearable>
             </el-input>
        </el-col>
        <el-col :span="10">
            <el-input
                placeholder="age"
                v-model="age"
                clearable>
             </el-input>
        </el-col>
         
    </el-row>
    <el-row>
        <el-button type="success" @click="addData">增加数据</el-button>
        <el-button type="info" @click="findData">查找数据</el-button>
        <el-button type="warning" @click="updateData">更新数据</el-button>
        <el-button type="danger" @click="delData">删除数据</el-button>
    </el-row>
    <el-card class="box-card" v-if="list.length"> 
        <div v-for="item in list" :key="item._id" class="text item">
            {{item.username}} - {{item.age}}
        </div>
    </el-card>
  </div>
</template>

<script>

  export default {
    name: 'nedb-page',
    components: {  },
    data() {
        return {
            username:'',
            age: '',
            list: []
        }
    },
    methods: {
        addData(){
          if(!this.username || !this.age) {
              return this.$message('用户名或密码不能为空') 
          }
           this.$db.insert({username:this.username,age:this.age}, (err,doc)=>{
               if(err){
                   console.error(eer)
                   return;
               }
              
           })
        },
        findData() {
            this.$db.find({}, (err,doc)=>{
               if(err){
                   console.error(eer)
                   return;
               }
               console.log(doc)
               this.list = doc.filter(v=>v.username)
           })
        },
        updateData(){
            this.$db.update({username:'', age:''}, {$set: {'username': 'jing','age': 23}},(err,doc)=>{
               if(err){
                   console.error(eer)
                   return;
               }
               console.log(doc)
           })
        },
        delData() {
            this.$db.remove({}, (err,doc)=>{
               if(err){
                   console.error(eer)
                   return;
               }
               console.log(doc)
           })
        }
    }
  }
</script>

<style lang="scss">
    .el-row {
    margin-bottom: 20px;
    margin-top: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    margin-right: 10px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>