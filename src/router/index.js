import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import Gasp from '../views/Gasp.vue'
import Both from '../views/Both.vue'
import Bush from '../views/Bush.vue'
import Code from '../views/Code.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/gasp',
    name: 'Gasp',
    component: Gasp
  },
  {
    path: '/both',
    name: 'Both',
    component: Both
  },
  {
    path: '/bush',
    name: 'Bush',
    component: Bush
  },
  {
    path: '/code',
    name: 'Code',
    component: Code
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
