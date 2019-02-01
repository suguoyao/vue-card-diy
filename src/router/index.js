import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Preview from '@/views/Preview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }
  ]
})
