import { createRouter, createWebHistory } from 'vue-router'
import util from '@/utils/util'
const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      fullPageDisplay: true, //需要全页展示的组件
      title: '登录'
    },
    component: () => import('@/views/Login/login.vue')
  },
  {
    path: '/',
    name: 'jx3home',
    meta: {
      fullPageDisplay: true,
      title: '欢迎'
    },
    component: () => import('@/views/Home/jx3home.vue')
  },{
    path: '/home',
    name: 'home',
    meta: {
      fullPageDisplay: false,
      title: '主页'
    },
    component: () => import('@/views/Home/home.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    meta: {
      fullPageDisplay: true, //需要全页展示的组件
      title: '404'
    },
    component: () => import('@/views/404.vue')
  },
  {
    path: '/oilPrices',//今日油价
    name: 'oilPrices',
    meta: {
      fullPageDisplay: false, //不需要全页展示的组件
      title: '今日油价'
    },
    component: () => import('@/views/OilPrices/oilPrices.vue')
  },
  {
    path: '/js3book',//剑三记账本
    name: 'js3book',
    meta: {
      fullPageDisplay: false, //不需要全页展示的组件
      title: '账单'
    },
    component: () => import('@/views/Js3book/js3book.vue')
  },
  {
    path: '/searchBox',
    name: 'searchBox',
    meta: {
      fullPageDisplay: false,
      title: '搜索框'
    },
    component: () => import('@/components/searchBox/searchBox.vue')
  },
  {
    path: '/lineChart',
    name: 'lineChart',
    meta: {
      fullPageDisplay: false,
      title: '图表'
    },
    component: () => import('@/components/echarts/lineChart.vue')
  },
  {
    path: '/getHeatMap',
    name: 'getHeatMap',
    meta: {
      fullPageDisplay: false,
      title: '热力图'
    },
    component: () => import('@/components/echarts/getHeatMap.vue')
  },
  {
    path: '/pieLike',
    name: 'pieLike',
    meta: {
      fullPageDisplay: true,
      title: '图饼'
    },
    component: () => import('@/components/echarts/pieLike.vue')
  },
  {
    path: '/PhotoAlbum',
    name: 'PhotoAlbum',
    meta: {
      fullPageDisplay: false,
    },
    component: () => import('@/views/PhotoAlbum/PhotoAlbum.vue')
  },
  {
    path: '/diary',
    name: 'diary',
    meta: {
      fullPageDisplay: false,
      title: 'ip'
    },
    component: () => import('@/views/Diary/diary.vue')
  },
  {
    path: '/Swiper',
    name: 'Swiper',
    meta: {
      fullPageDisplay: true
    },
    component: () => import('@/components/Swiper/Swiper.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    meta: {
      fullPageDisplay: true
    },
    component: () => import('@/dome/counter.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

// 请求接口获取动态路由配置
// async function getRoutesFromApi() {
//   const response = await axios.get('/api/routes')
//   return response.data
// }

// 初始化应用时动态添加路由
// async function initApp() {
//   const dynamicRoutes = await getRoutesFromApi()
//   dynamicRoutes.forEach(route => {
//     router.addRoute(route)
//   })
// }

// initApp()

// router.beforeEach((to, from, next) => {
//   let token = util.getCookie('token')
//   document.title = to.meta.title
//   if (!token && to.meta.fullPageDisplay == false) {
//     next({ path: '/' })
//   } else {
//     next()
//   }
// })
export default router
