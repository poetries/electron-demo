import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: require('@/components/Home').default
    },
    {
      path: '/news',
      name: 'news-page',
      component: require('@/components/News').default
    },
    {
      path: '/nedb',
      name: 'nedb-page',
      component: require('@/components/Nedb').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
