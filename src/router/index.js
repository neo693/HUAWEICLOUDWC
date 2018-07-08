import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/views/Loading'
import Character from '@/views/Character'
import Enter from '@/views/Enter'
import Question1 from '@/views/Question1'

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
    },
    {
      path: '/enter',
      name: 'Enter',
      component: Enter
    },
    {
      path: '/question1',
      name: 'Question1',
      component: Question1
    }
  ]
})
