<script setup>
import { getCurrentInstance, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router'

// 相当于vue2中的this
const { proxy } = getCurrentInstance()
const router = useRouter()

/**
 * 定义数据
 * ref()简单类型
 * reactive()复杂类型
 * @type {UnwrapNestedRefs<{msg: string, show: boolean}>}
 */
let data = reactive({
  msg: '',
  show: false,
  account: '222',
  password: '111'
})

/* 生命周期调用 */
onMounted(() => {
  Flushed()
})

/* 每日一句接口 */
function Flushed() {
  proxy.$http.get('https://www.mxnzp.com/api/daily_word/recommend?count=1&app_id=l8lesimwu6oumkj9&app_secret=cWdQQnp0Nnd6QUpweFJhM2F1L0ZwZz09').then((response) => {
    if (response.data.code === 1) {
      data.msg = response.data.data[0].content
    } else {
      data.msg = response.data.msg
    }
  })
}

/**
 * 点击动画
 * @returns {number}
 * @constructor
 * proxy.$router,vue2老写法类似于this.$router
 * router.push,使用hooks属于vue-router 4.0写法
 */
function ClickHouse() {
  data.show = true
  return setTimeout(() => {
    // proxy.$router.push('hello')
    router.push('oilPrices')
  }, 1000)
}


</script>


<template>
  <div :class="'box',{animate__animated:data.show ,animate__bounceOut:data.show}">
    <p>{{ data.msg }}</p>
    <div class="form">
      <el-input v-model="data.account"></el-input>
      <el-input v-model="data.password"></el-input>
    </div>
    <div>
      <el-button @click="Flushed">刷新</el-button>
      <el-button @click="ClickHouse">进入</el-button>
    </div>
  </div>
</template>


<style scoped>
.box {
  display: flex;
  align-items: center;
  flex-direction: column;
}
p {
  font-size: 25px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin-bottom: 2rem;
}
.form .el-input:nth-child(1){
  margin: 3rem 0 1rem 0;
}
</style>