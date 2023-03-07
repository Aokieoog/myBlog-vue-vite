import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],


  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },

  // 代理配置
  server: {
    proxy: {
      '/dev': {
        target: 'https://www.mxnzp.com', //目标url
        changeOrigin: true, //支持跨域
        //重写路径,替换/dev
        rewrite: (path) => path.replace(/^\/dev/, '')
      },
      // '/text':{
      //   target:'https://meiriyiwen.com',
      //   changeOrigin:true,
      //   rewrite:(path)=>path.replace(/^\/text/,'')
      // }
    }
  }

})