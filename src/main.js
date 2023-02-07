import { createApp  } from 'vue';
import './style.css';
import App from './App.vue';
/* element */
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
/* vueRouter */
import router from './router/index.js';
/* axios */
import axios from 'axios'
/* 自定义全局css */
import './assets/globals.css'
/* Animate-css动画库 */
import './assets/animate.css'
/* Svg图标全局注册组件 */
import SvgIcon from './components/svgIconFont/svgIcon.vue'
import './assets/svgIconFont/svgIconFont'


const app = createApp(App);

app.config.globalProperties.$http = axios;
app.use(router);
app.use(ElementPlus);
app.component('SvgIcon',SvgIcon)

router.isReady().then(()=>app.mount('#app'))

/* 挂载VUE原型
 * vue3.0取消了Vue.prototype，官方文档推荐使用globalProperties
 */
