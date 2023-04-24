import axios from 'axios'
import router from '@/router/index.js'
import msg from '@/utils/message'
import util from '@/utils/util.js'

const request = axios.create({
  // 获取环境变量中的 API 基础路径
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000 // 请求超时时间
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 在这里做一些请求前的处理，例如添加 token 等
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 在这里对返回的数据进行处理，例如格式化日期等
    let token = util.getCookie('token')
    if (!token && location.pathname !== '/') {
      msg.error('登陆失效,请重新登录')
      setTimeout(() => {
        router.push('/')
      },1000)
    }
    return response.data
  },
  error => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

export default request