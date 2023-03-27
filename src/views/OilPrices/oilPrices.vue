<script setup>
/**
 * @说明: 油价页面
 * @作者: Aoki
 * @时间: 2023/02/21 10:02:02
*/
import { getCurrentInstance, ref } from 'vue'
import { useRoute } from 'vue-router'
// import { ElMessage } from 'element-plus'
// import  msg  from '../../utils/message'
import msg from '/src/utils/message'

const { proxy } = getCurrentInstance()
const route = useRoute()
const title = ref('今日油价')
let city = ref('')//查询城市
let resdata = ref({})

/**
 * 查询省份汽油物价
 * @param address 省份
 * @param headers 自定义请求头部
 * @constructor
 */
function OilPrices(address) {
  proxy.$http({
    headers: {
      contentType: 'application/json;charset=UTF-8'
    },
    method: 'get',
    url: '/dev/api/oil/search',
    params: {
      province: address,
      app_id: 'l8lesimwu6oumkj9',
      app_secret: 'cWdQQnp0Nnd6QUpweFJhM2F1L0ZwZz09'
    }
  }).then((res) => {
    if (res.data.code === 1) {
      resdata.value = res.data.data
      msg.success(res.data.msg)
    }else {
      // VUE2写法
      // proxy.$message('message')
      // VUE3写法
      // ElMessage({
      //   showClose: false,
      //   message: 'Oops, this is a error message.',
      //   type: 'error',
      // })
      msg.error(res.data.msg)
    }
  })
}

OilPrices('浙江')

</script>

<template>
  <h2>{{ title }}</h2>
  <div class="margin-top exterior">
    <div class="inline div-flex">
      <el-input v-model="city" placeholder="请输入查询省份,如'浙江'"></el-input>
      <el-button @click="OilPrices(city)">查询</el-button>
    </div>
    <div class="div-flex">
      <el-button color="#626aef">#0号柴油</el-button>
      <el-button color="green">{{ resdata.t0 }} 元</el-button>
    </div>
    <div class="div-flex">
      <el-button color="#626aef">#89号汽油</el-button>
      <el-button color="green">{{ resdata.t89 }} 元</el-button>
    </div>
    <div class="div-flex">
      <el-button color="#626aef">#92号汽油</el-button>
      <el-button color="green">{{ resdata.t92 }} 元</el-button>
    </div>
    <div class="div-flex">
      <el-button color="#626aef">#95号汽油</el-button>
      <el-button color="green">{{ resdata.t95 }} 元</el-button>
    </div>
    <div class="div-flex">
      <el-button color="#626aef">#98号汽油</el-button>
      <el-button color="green">{{ resdata.t98 }} 元</el-button>
    </div>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.el-input {
  width: 11.75rem;
  margin-right: 2rem;
}
.inline {
  display: inline;
}
.margin-top {
  margin-top: 2rem;
}
.div-flex {
  display: flex;
  justify-content: space-between;
  width: 20rem;
  margin-bottom: 2rem;
}
.div-flex .el-button {
  width: 8rem;
}
.exterior {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
