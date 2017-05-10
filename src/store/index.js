import Vue from 'vue'
import Promise from 'bluebird'
import Vuex from 'vuex'
import vueAuth from '../http'
import * as types from './types'
// import R from 'ramda'

Vue.use(Vuex)
Vue.prototype.axios = vueAuth.$http
export default new Vuex.Store({
  // You can use it as state property
  state: {
    isAuthenticated: vueAuth.isAuthenticated()
  },

  // You can use it as a state getter function (probably the best solution)
  getters: {
    isAuthenticated () {
      return vueAuth.isAuthenticated()
    }
  },

  // Mutation for when you use it as state property
  mutations: {
    isAuthenticated (state, payload) {
      state.isAuthenticated = payload.isAuthenticated
    }
  },

  actions: {
    // Perform VueAuthenticate login using Vuex actions
    [types.LOGIN] (context, payload) {
      return new Promise((resolve, reject) => {
        // 原来已登录过， 先将原来登录信息注销
        if (vueAuth.isAuthenticated()) {
          vueAuth.logout().then(response => {
            context.commit('isAuthenticated', {
              isAuthenticated: vueAuth.isAuthenticated()
            })
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        }

        // 如果注销成功
        if (vueAuth.isAuthenticated() === false) {
          vueAuth.login(payload.user, payload.requestOptions).then(response => {
            context.commit('isAuthenticated', {
              isAuthenticated: vueAuth.isAuthenticated()
            })
            resolve(response)
          }).catch(error => {
            if (!error.response) {
              reject('网络错误，请稍后再试')
            } else if (error.response.data.message) {
              reject(error.response.data.message)
            } else if (error.response.data.error_description) {
              reject(error.response.data.error_description)
            } else {
              reject(error)
            }
          })
        }
      })
    },
    [types.REGISTER] (context, payload) {
      return new Promise((resolve, reject) => {
        if (vueAuth.isAuthenticated()) {
          vueAuth.logout().then(response => {
            context.commit('isAuthenticated', {
              isAuthenticated: vueAuth.isAuthenticated()
            })
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        }

        vueAuth.register(payload.user, payload.requestOptions).then(response => {
          context.commit('isAuthenticated', {
            isAuthenticated: vueAuth.isAuthenticated()
          })
          resolve(response)
        }).catch(error => {
          if (!error.response) {
            reject('网络错误，请稍后再试')
          } else {
            if (error.response.data) {

            } else {

            }
            reject(error)
          }
        })
      })
    },
    [types.LOGOUT] (context) {
      return new Promise((resolve, reject) => {
        if (vueAuth.isAuthenticated()) {
          vueAuth.logout().then(response => {
            context.commit('isAuthenticated', {
              isAuthenticated: vueAuth.isAuthenticated()
            })
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        }
      })
    }
    // [types.USERINFO] (context) {
    //   vueAuth.$http.get('api/user/userinfo').then(response => {
    //     console.log(response.data)
    //     context.commit('UserData', {
    //       UserData: response.data
    //     })
    //   })
    // }
  }
})
