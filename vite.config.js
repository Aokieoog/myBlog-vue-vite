import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],


  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'views': path.resolve(__dirname, 'src/views'),
      'components': path.resolve(__dirname, 'src/components')
    }
  },

  // 代理配置
  server: {
    proxy: {
      '/dev': {
        target: 'https://www.mxnzp.com', //目标url
        changeOrigin: true, //支持跨域
        //重写路径,替换/dev
        rewrite: (path) => path.replace(/^\/dev/, "")
      }
    }
  }

})