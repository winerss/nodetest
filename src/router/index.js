import Vue from 'vue'
import Router from 'vue-router'
import downLoad from '@/components/test/downLoad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'downLoad',
      component: downLoad
    }
  ]
})
