<script setup>
import { getCurrentInstance, ref } from 'vue'
import { useRoute } from 'vue-router'

const { proxy } = getCurrentInstance()
const msg = ref('今日油价')
let vale = ref('',)
const route = useRoute()

/**
 * 查询省份汽油物价
 * @param address 省份
 * @param headers 自定义请求头部
 * @constructor
 */
function OilPrices(address){
  proxy.$http({
    headers:{
      contentType : 'application/json;charset=UTF-8'
    },
    method: 'get',
    url: 'https://www.mxnzp.com/api/oil/search',
    params: {
      province:address,
      app_id:'l8lesimwu6oumkj9',
      app_secret:'cWdQQnp0Nnd6QUpweFJhM2F1L0ZwZz09'
    },
  }).then((res) => {
    console.log(res)
  })
}
OilPrices('浙江')

</script>

<template>
  <h1>{{ msg }}</h1>
  <el-input v-model="vale" placeholder="请输入查询城市"></el-input>
  <el-button @click="OilPrices(vale)">查询</el-button>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.el-input{
  width: 10.25rem;
}
</style>
