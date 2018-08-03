import Vue from 'vue'
import Router from 'vue-router'
import Child from '@/components/Child'
import Parent from '@/components/Parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/child',
      name: 'child',
      component: Child
    },
    {
      path: '/parent',
      name: 'parent',
      component: Parent
    }
  ]
})
