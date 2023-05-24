<script setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import msg from '@/utils/message.js'
import { get } from '@/utils/http/http.js'
import { dailywordrecommend, parms } from '@/utils/http/api'
// import generateToken from '@/utils/http/token'
import cookie from '@/utils/http/cookie.js'

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
  account: '',
  password: ''
})

/* 生命周期调用 */
onMounted(() => {
  Flushed()
  // text()
  console.log('现在的环境变量为:' + import.meta.env.VITE_DEV_PARAM)
  console.log(import.meta.env.VITE_BASE_URL)
  console.log(dailywordrecommend)
})

/* 每日一句接口 */
function Flushed() {
  get(dailywordrecommend,parms).then((response) => {
    if (response.code === 1) {
      data.msg = response.data[0].content
    } else {
      data.msg = response.msg
    }
  })
}

/**
 * 点击动画
 * @returns {NodeJS.Timeout}
 * @constructor
 * proxy.$router,vue2老写法类似于this.$router
 * router.push,使用hooks属于vue-router 4.0写法
 */
function ClickHouse() {
  if (data.account === 'admin' && data.password === '123') {
    data.show = true
    cookie()
    return setTimeout(() => {
      // proxy.$router.push('hello')
      router.push('home')
    }, 1000)
  } else {
    msg.error('请输入正确的账号密码!')
  }
}
</script>
<template>
  <div>
  <h1>Login</h1>
  <div :class="['box',{animate__animated:data.show ,animate__bounceOut:data.show}]">
    <p>{{ data.msg }}</p>
    <div class="form_box">
      <div class="form">
        <el-input v-model="data.account" placeholder="Please input account"></el-input>
        <el-input v-model="data.password" placeholder="Please input password" show-password type="password" @keydown.enter.prevent="ClickHouse"></el-input>
      </div>
      <div>
        <el-button color="#68945c" style="color: white" @click="Flushed">Flushed</el-button>
        <el-button color="#88abda" style="color: white" @click="ClickHouse()">Login</el-button>
      </div>
    </div>
  </div>
  <p class="record">京ICP备17006801号-2 Theme by handsome© 2023 All rights reserved.</p>
  </div>
</template>
<style lang="less" scoped>
h1 {
  color: #88abda;
}
.box {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 59.375rem;
  margin-bottom: 15rem;
  p {
    font-size: 25px;
    line-height: 30px;
    width: 37.5rem;
    text-align: left;
    text-indent: 3rem;
  }
}
.record {
  font-size: 0.75rem;
}
.form {
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin-bottom: 2rem;
}
.form .el-input:nth-child(1) {
  margin: 3rem 0 1rem 0;
}
.form_box {
  width: 25rem;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: #fff;
  border-radius: 0.3125rem;
  box-shadow: 0 0.3125rem 0.625rem rgba(0, 0, 0, 0.1);
}
</style>