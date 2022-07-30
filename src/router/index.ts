import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Start from '../views/Start.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path:'/test',
      name:'Test',
      // 按需引入
      // 如果每天访问/test 就不会加载这个组件 节约性能
      component:()=>import('../components/test/test.vue')
    }
  ]
})

export default router
