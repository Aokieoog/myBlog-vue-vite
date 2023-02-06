import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 代理配置
  server: {
    proxy: {
      '/dev': {
        target: 'https://www.mxnzp.com', //目标url
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/dev/, "")
        //重写路径,替换/dev
      }
    }
  }
})