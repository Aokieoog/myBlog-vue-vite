import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    meta: {
      fullPageDisplay: true//需要全页展示的组件
    },
    component: () => import('@/views/Login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      fullPageDisplay: false
    },
    component: () => import('@/views/Home/home.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    meta: {
      fullPageDisplay: true//需要全页展示的组件
    },
    component: () => import('@/views/404.vue')
  },
  {
    path: '/oilPrices',//今日油价
    name: 'oilPrices',
    meta: {
      fullPageDisplay: false//不需要全页展示的组件
    },
    component: () => import('@/views/OilPrices/oilPrices.vue')
  },
  {
    path: '/searchBox',
    name: 'searchBox',
    meta: {
      fullPageDisplay: false
    },
    component: () => import('@/components/searchBox/searchBox.vue')
  },
  {
    path: '/lineChart',
    name: 'lineChart',
    meta: {
      fullPageDisplay: false
    },
    component: () => import('@/components/echarts/lineChart.vue')
  },
  {
    path: '/getHeatMap',
    name: 'getHeatMap',
    meta: {
      fullPageDisplay: false
    },
    component: () => import('@/components/echarts/getHeatMap.vue')
  },
  {
    path: '/pieLike',
    name: 'pieLike',
    meta: {
      fullPageDisplay: true
    },
    component: () => import('@/components/echarts/pieLike.vue')
  },{
    path: '/PhotoAlbum',
    name: 'PhotoAlbum',
    meta: {
      fullPageDisplay: false
    },
    component: () => import('@/views/PhotoAlbum/PhotoAlbum.vue')
  },{
    path: '/diary',
    name: 'diary',
    meta: {
      fullPageDisplay: false
    },
    component: () => import('@/views/Diary/diary.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

// 请求接口获取动态路由配置
async function getRoutesFromApi() {
  const response = await axios.get('/api/routes')
  return response.data
}

// 初始化应用时动态添加路由
async function initApp() {
  const dynamicRoutes = await getRoutesFromApi()
  dynamicRoutes.forEach(route => {
    router.addRoute(route)
  })
}

initApp()

router.beforeEach((to, from, next) => {
  console.log('到哪里去:', to)
  console.log('来自:', from)
  next(true)
})
export default router
