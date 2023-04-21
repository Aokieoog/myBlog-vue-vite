import axios from 'axios'
import token from '@/utils/http/token.js'
import router from '@/router/index.js'

const request = axios.create({
  // 获取环境变量中的 API 基础路径
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000 // 请求超时时间
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 在这里做一些请求前的处理，例如添加 token 等
    const locatoken = localStorage.getItem('token')
    if (locatoken == token) {
      return config
    } else {
      router.push('/')
      return Promise.reject(new Error('未登录或登录信息已过期，请重新登录'))
    }
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
    return response.data
  },
  error => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

export default request