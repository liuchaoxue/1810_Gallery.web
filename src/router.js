import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import AddUserInfo from './views/User/AddUserInfo'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
      {
          path: '/addUserInfo',
          name: 'addUserInfo',
          component: AddUserInfo
      }
  ]
})
