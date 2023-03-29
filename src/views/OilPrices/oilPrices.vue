<script setup>
/**
 * @说明: 油价页面
 * @作者: Aoki
 * @时间: 2023/02/21 10:02:02
 */
import { getCurrentInstance, onMounted, ref } from 'vue'
// import { ElMessage } from 'element-plus'
// import  msg  from '../../utils/message'
import msg from '/src/utils/message'

const { proxy } = getCurrentInstance()
const title = ref('今日油价')
let city1 = ref(['安徽', '北京', '重庆', '福建', '甘肃', '广东', '广西', '贵州', '海南', '河北', '黑龙江', '河南', '湖北', '湖南', '江苏', '江西', '吉林', '辽宁', '内蒙古', '宁夏', '青海', '陕西', '上海', '山东', '山西', '四川', '天津', '西藏', '新疆', '云南', '浙江'
])//查询城市
let city = ref('')
let resdata = ref({})
let tableData = ref([])


onMounted(() => {
  setTime()
})

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
      tableData.value.push(resdata.value)
      localStorage.setItem('myArray', JSON.stringify(tableData.value))
      msg.success(res.data.msg)
    } else {
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

function setTime() {
  const myArray = JSON.parse(localStorage.getItem('myArray'))
  if (myArray) {
    tableData.value = myArray
  } else {
    city1.value.map((x, i) => {
      setTimeout(() => {
        OilPrices(x)
      }, i * 3000)
    })
  }
}

function Update() {
  localStorage.removeItem('myArray')
}
</script>

<template>
  <h2>{{ title }}</h2>
  <el-button style="margin-bottom: 1rem;float: right" @click="Update">更新</el-button>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column label="省份" prop="province" width="" />
    <el-table-column label="0#汽油" prop="t0" width="" />
    <el-table-column label="89#汽油" prop="t89" width="" />
    <el-table-column label="92#汽油" prop="t92" width="" />
    <el-table-column label="95#汽油" prop="t95" width="" />
    <el-table-column label="98#汽油" prop="t98" width="" />
  </el-table>
</template>

<style scoped>

</style>
