// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import iView from 'iview'
import VueRouter from 'vue-router'
import Routers from './router'
import Util from './libs/util'
import store from './store'
import App from './App'

import 'normalize.css'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)
// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
}

const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  Util.title(to.meta.title)
  if (to.meta.requireAuth === true) {
    if (store.state.isAuthenticated === true) {
      // 继续路由导航
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    if (store.state.isAuthenticated === true && to.name === 'login') {
      next({
        path: '/account',
        query: { redirect: '/' }
      })
    } else {
      next()
    }
  }
})

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
