import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'home',
    meta:{
      fullPageDisplay:true//不需要全页展示的组件
    },
    component: ()=>import('../views/Home/home.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    meta:{
      fullPageDisplay:true//需要全页展示的组件
    },
    component: () => import('../views/404.vue')
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes
});
router.beforeEach((to, from, next) => {
  console.log('到哪里去:', to);
  console.log('来自:', from);
  next(true);
});
export default router;
