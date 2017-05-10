import axios from 'axios'
import { VueAuthenticate } from 'vue-authenticate'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:52130/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
axios.defaults.withCredentials = true
export default new VueAuthenticate(axios, {
  baseUrl: axios.defaults.baseURL,
  loginUrl: 'api/user/login',
  registerUrl: 'api/user/Register',
  requestDataKey: 'data',
  bindRequestInterceptor: function () {
    this.$http.interceptors.request.use(config => {
      if (this.isAuthenticated()) {
        config.headers['Authorization'] = [
          this.options.tokenType,
          this.getToken()
        ].join(' ')
      } else {
        delete config.headers['Authorization']
      }
      return config
    })
  },

  bindResponseInterceptor: function () {
    this.$http.interceptors.response.use(
      response => {
        this.setToken(response)
        return response
      },
      error => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              this.logout()
              this.$router.replace('/login')
              break
          }
        }
        return Promise.reject(error)
      }
    )
  }
})
