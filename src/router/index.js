import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld,
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('../views/404.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
router.beforeEach((to, from, next) => {
  console.log('到哪里去:',to);
  console.log('来自:',from);
  next(true);
});
export default router;
