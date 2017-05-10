<template>
   <div class="wrap">
    <div class="Login">
      <button @click="userLogin()"> {{ isAuthenticated ? '已登录' : '未登录' }} </button>
      <button @click="userRegister()"> {{ isAuthenticated }}</button>
      <button @click="userLogout()">Logout</button>
      <button @click="userinfo()">Userinfo</button>
      <hr />
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'account',
  data () {
    return {
      show: false,
      animation: '',
      paddingTop: `paddingTop: ${(window.innerHeight - 440) / 2}px`,
      types: ['zoom', 'fade', 'flip', 'door', 'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight']
    }
  },
  computed: {
    ...mapState({
      isAuthenticated: state => state.isAuthenticated
    })
  },

  methods: {
    userLogin: function () {
      let user = {
        Username: 'Administrator',
        Password: 'Cheng!9800919'
      }
      let header = {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'withCredentials': true
      }

      let payload = {
        user: user,
        requestOptions: header
      }

      // console.log(args)
      this.$store.dispatch('login', payload)
    },

    userRegister: function () {
      let user = {
        Username: 'John Doe',
        Email: 'john.doe@domain.com',
        Phone: '13580570368',
        Password: 'pass!23456',
        ConfirmPassword: 'pass!23456'
      }

      let payload = {
        user: user,
        requestOptions: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          'withCredentials': true
        }
      }

      this.$store.dispatch('register', payload)
    },

    userLogout: function () {
      this.$store.dispatch('logout')
    },

    userinfo: function () {
      this.$store.dispatch('userinfo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* -- container -- */
#app,
.wrap {
    height: 100%;
}
.container {
    width: 100%;
}
.title,
.intro {
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.title {
    font-size: 70px;
    margin: 0;
}
.intro {
    font-size: 30px;
    margin: 15px 10px 20px;
}
.btn-area {
    width: 600px;
    margin: 0 auto;
}
/* -- scale animation -- */
@keyframes scale {
    from {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
    }
    to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }
}
.scale {
    animation: scale both .4s cubic-bezier(0.4, 0, 0, 1.5);
}
/* -- btn -- */
.btn {
    display: inline-block;
    color: #0a1855;
    width: 140px;
    padding: 0;
    font-size: 18px;
    background: #fff;
    margin: 20px 30px;
    line-height: 42px;
    user-select: none;
    text-align: center;
    border: none;
    border-radius: 4px;
}
.btn:hover {
    box-shadow: 0 0 50px rgba(255,255,255,.3);
}
.btn:active {
    box-shadow: 0 0 50px rgba(255,255,255,.3), inset 2px 2px 2px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0);
}
@media (max-width: 600px) {
    .container {
        padding-top: 30px!important;
    }
    .title {
        font-size: 40px;
    }
    .intro {
        font-size: 20px;
    }
    .btn {
        width: 35%;
        font-size: 16px;
        line-height: 34px;
        margin: 10px 0 10px 10%;
    }
    .btn-area {
        width: 100%;
    }
}
/* -- title -- */
.header {
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9e9e9;
    text-align: left;
}
/* -- body -- */
.body {
    padding-top: 15px;
    text-align: left;
}
/* -- button -- */
.vodal-cancel-btn, .vodal-confirm-btn {
    position: absolute;
    font: inherit;
    bottom: 16px;
    width: 70px;
    padding: 4px 15px;
    border-radius: 3px;
    transition: background .2s;
    border: 1px solid #03a9f4;
}
.vodal-confirm-btn {
    color: #fff;
    right: 102px;
    background: #03a9f4;
}
.vodal-confirm-btn:hover {
    background: #0098e3;
}
.vodal-cancel-btn {
    color: #03a9f4;
    right: 16px;
    background: #fff;
}
.vodal-cancel-btn:hover {
    background: #fafafa;
}
.vodal-cancel-btn:focus, .vodal-confirm-btn:focus {
    outline: none;
}
.vodal-confirm-btn:active {
    background: #0087d2;
}
.vodal-cancel-btn:active {
    background: #fafafa;
    box-shadow: inset 1px 1px 1px rgba(0,0,0,.2),0 0 1px transparent;
}

</style>
