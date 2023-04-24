import generateToken from '@/utils/http/token.js'
const token = generateToken()
const Cookie = function () {
  // 登录成功后，服务器返回 Token，并将其存储在 Cookie 中
  const expires = new Date(Date.now() + 50000) // 设置有效期
  document.cookie = `token=${token}; expires=${expires.toUTCString()}; path=/`
}
export default Cookie