import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import forgotPwd from '../views/forgot-pwd.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/forgot-pwd',
    name: 'forgot-pwd',
    component: forgotPwd
  },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
