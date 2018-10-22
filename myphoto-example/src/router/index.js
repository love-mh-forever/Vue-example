import Vue from 'vue'
import Router from 'vue-router'
import Main from '../page/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    }
  ]
})
