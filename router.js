import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './pages'
import CatalogPage from './pages/catalog'

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'catalog',
        path: '/catalog',
        component: CatalogPage
      },
      {
        name: 'home',
        path: '/',
        component: HomePage
      }
    ]
  })
}
