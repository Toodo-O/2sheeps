import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' },
  },
  {
    path: '/mobile-backhaul',
    name: 'MobileBackhaul',
    component: () => import('../views/MobileBackhaul.vue'),
    meta: { title: 'モバイル・バックホール' },
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('../views/Location.vue'),
    meta: { title: '接続拠点' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    // 支持锚点滚动
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

// 全局前置守卫，修改页面标题
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Baobo Technology`
  next()
})

export default router
