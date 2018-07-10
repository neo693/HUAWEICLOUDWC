import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/views/Loading'
import Character from '@/views/Character'
import Enter from '@/views/Enter'
import Question from '@/views/Question/Question'
import Result from '../views/Result/Result'

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
      component: Question
    },
    {
      path: '/question2',
      name: 'Question2',
      component: Question
    },
    {
      path: '/question3',
      name: 'Question3',
      component: Question
    },
    {
      path:'/result',
      name:'Result',
      component:Result
    }
  ]
})
