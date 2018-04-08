import Vue from 'vue'
import Router from 'vue-router'
import downLoad from '@/components/test/downLoad'
import vuex from '@/components/test/vuex/vuex'

import home from '@/views/home'
import register from '@/views/register'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/downLoad',
      name: 'downLoad',
      component: downLoad
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
