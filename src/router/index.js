import Vue from 'vue'
import Router from 'vue-router'
import downLoad from '@/components/test/downLoad'
import vuex from '@/components/test/vuex/vuex'

import home from '@/components/home'

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
      name: 'home',
      component: home
    }
  ]
})
