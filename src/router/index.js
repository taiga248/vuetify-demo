import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Skill from '../views/Grid.vue'
import Card from '../views/Card.vue'
import SNS from '../views/SNS.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/Grid',
    name: 'Grid',
    component: Skill
  },
  {
    path: '/Card',
    name: 'Card',
    component: Card
  },
  {
    path: '/SNS',
    name: 'SNS',
    component: SNS
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
