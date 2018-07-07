import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/views/Loading'
import Character from '@/views/Character'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/character',
      name: 'Character',
      component: Character
    }
  ]
})
