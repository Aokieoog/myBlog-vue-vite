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
  show: false
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
    router.push('hello')
  }, 1000)
}


</script>


<template>
  <div :class="{animate__animated:data.show ,animate__bounceOut:data.show}">
    <h1>{{ data.msg }}</h1>
    <el-button @click="Flushed">刷新</el-button>
    <el-button @click="ClickHouse">进入</el-button>
  </div>
</template>


<style scoped>

</style>