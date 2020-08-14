import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/hellodoc',
      name: 'hellodoc',
      component: () => import(/* webpackChunkName: "link" */ './views/HelloDoc.vue')
    },
    {
      path: '/link',
      name: 'link',
      component: () => import(/* webpackChunkName: "link" */ './views/Link.vue')
    }
  ]
})
