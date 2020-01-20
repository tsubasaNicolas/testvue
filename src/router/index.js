import Vue from 'vue'
import VueRouter from 'vue-router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


const routes = [
  {
    path: '/perfil',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/perfil.vue')
  },
  {
    path: '/menuprincipal',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/menuprincipal.vue')
  },
  {
    path: '/menuprincipal/modulos/:id',
    name: 'modulos',
    component: () => import(/* webpackChunkName: "modulos" */ '../views/modulos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
//solo para crear un nuevo commiteste comentario
