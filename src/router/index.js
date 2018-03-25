import Vue from 'vue'
import Router from 'vue-router'
import downLoad from '@/components/test/downLoad'

import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'downLoad',
      component: downLoad
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
