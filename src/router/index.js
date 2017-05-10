import Home from '../views/Home'
import Account from '../views/Account'
import Login from '../views/Login'
import NotFoundComponent from '../views/NotFoundComponent'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
      title: '系统登录'
    }
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    meta: {
      title: '用户验证',
      requireAuth: true
    }
  },
  {
    path: '*',
    component: NotFoundComponent
  }
]

export default routes
