import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/auth/login.vue'
import signup from '../views/auth/signup.vue'
import home from '../views/Home'
import forgotPwd from '../views/auth/forgot-pwd.vue'
import loginEmail from '../views/auth/login-email.vue'
import signupEmail from '../views/auth/signup-email'
import profile from '../views/profile.vue'
import layout from '../views/layout'
import lasVegas from '../views/las-vegas-singles.vue'
import notifications from '../views/notifications'
import message from '../views/message'


const routes = [
  {
    path: '',
    name: 'layout',
    component: layout,
    children:[
      {
        path: '/home',
        name: 'home',
        component: home,
      },
      {
        path: '/profile',
        name: 'profile',
        component:profile
      },
      {
        path: '/notifications',
        name: 'notifications',
        component:notifications 
      }
     
    ]
  },
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
  {
    path: '/login-email',
    name: 'login-email',
    component: loginEmail
  },
  {
    path: '/signup-email',
    name: 'signup-email',
    component: signupEmail
  },
 
  {
    path: '/las-vegas-singles',
    name: 'las-vegas-singles',
    component:lasVegas
  },
  {
    path: '/message',
    name: 'message',
    component: message
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
