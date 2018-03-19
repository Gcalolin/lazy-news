import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

let index = [
  {
    path: '/',
    name: 'NewsIndex',
    component: resolve =>require(['../views/news/news2.vue'], resolve)
  },
  {
    path: '/news2',
    name: 'newsTest',
    component: resolve => require(['../views/news/news2.vue'], resolve)
  },
  {
    path: '/news-detail',
    name: 'NewsDetail',
    component: resolve => require(['../views/news/NewsDetail.vue'], resolve)
  },
  {
    path: '/vedio',
    name: 'VedioIndex',
    component: resolve => require(['../views/vedio.vue'], resolve)
  },
  {
    path: '/locale',
    name: 'LocaleIndex',
    component: resolve => require(['../views/locale.vue'], resolve)
  },
  {
    path: '/me',
    name: 'MeIndex',
    component: resolve => require(['../views/me.vue'], resolve)
  }
]

const router = new Router( {
  routes: index,
  linkActiveClass: 'active',
})
export default router
