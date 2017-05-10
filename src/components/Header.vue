<style scoped>
.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #eee;
    padding: 1px;
    min-width: 1003px;
    z-index: 997;
}

.wrapper-header {
    box-shadow: 0 1px 1px rgba(0, 0, 0, .08);
}

.wrapper-header>* {
    height: 80px;
    line-height: 80px;
}

.wrapper-header-nav {
    width: 90%;
    height: 80px;
    margin: 0 auto;
    min-width: 960px;
}

.wrapper-header-nav-list {
    height: inherit;
    float: left;
}

.wrapper-header-nav-logo {
    margin-right: 50px;
    float: left;
    padding-top: 10px;
}

.wrapper-header-nav-logo a{
     height:80px;
    line-height: 80px;
}
.wrapper-foot-logo {
    height: 30px;
    float: left;
}

.wrapper-header-nav-logo,
.wrapper-foot-logo img {
    height: 100%;
}

.wrapper-header-nav-search {
    float: left;
    margin-left: 100px;
}

.wrapper-header-nav-lgoin {
    float: right;
    overflow: hidden;
    color: #eee;
    height:80px;
    line-height: 80px;
}

.wrapper-header-nav-lgoin ul {
    display: inline-block;
    height: 80px;
    line-height: 80px;
}

.wrapper-header-nav-lgoin ul>li {
    float: left;
}

.wrapper-header-nav-logo img.ph{-ms-interpolation-mode:bicubic}
</style>

<template>
    <div class="wrapper">
        <!--<Affix>-->
        <div class="wrapper-header">
            <Menu mode="horizontal" :theme="theme" active-name="1">
                <div class="wrapper-header-nav">
                    <router-link to="/" class="wrapper-header-nav-logo">
                        <img v-bind:src="loginSetScr" class="ph"  >
                    </router-link>
                    <div class="wrapper-header-nav-search">

                    </div>
                    <div class="wrapper-header-nav-list">
                        <Menu-item name="1">
                            <!--<Icon type="ios-navigate"></Icon>-->
                            首页
                        </Menu-item>
                        <Menu-item name="2">
                            <!--<Icon type="ios-keypad"></Icon>-->
                            产品
                        </Menu-item>
                        <Menu-item name="3">
                            <!--<Icon type="ios-analytics"></Icon>-->
                            解决方案
                        </Menu-item>
                        <Menu-item name="4">
                            <!--<Icon type="ios-analytics"></Icon>-->
                            吸粉神器
                        </Menu-item>
                        <Menu-item name="5">
                            <!--<Icon type="ios-paper"></Icon>-->
                            加盟合作
                        </Menu-item>
                        <Menu-item name="6">
                            <!--<Icon type="ios-paper"></Icon>-->
                            服务支持
                        </Menu-item>
                    </div>
                    <div class="wrapper-header-nav-lgoin">
                        <ul>
                            <li>
                                <router-link to="/account">
                                    <Button type="text" v-bind:style="classObject" >会员中心</Button>
                                </router-link>
                            </li>
                            <li v-if="isAuthenticated==false">
                                <router-link to="/login">
                                    <Button type="text" v-bind:style="classObject">登录</Button>
                                </router-link>
                            </li>
                            <li class="registr" v-if="isAuthenticated==false">
                                <Tooltip content="开业酬宾前100名注册用户赠送1年免费使用" placement="bottom-end" :delay="1000">
                                    <Button type="primary">注册免费使用</Button>
                                </Tooltip>
                            </li>
                            <li class="asdsadsad" v-if="isAuthenticated==true">
                                asdasdas
                            </li>
                        </ul>
                    </div>
                </div>
            </Menu>
        </div>
        <Back-top :bottom="20"></Back-top>
        <PopupContent></PopupContent>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import PopupContent from '../components/PopupContent'
export default {
  components: { PopupContent },
  data () {
    return {
      theme: 'light'
    }
  },
  computed: {
    ...mapState({
      isAuthenticated: state => state.isAuthenticated
    }),
    loginSetScr: function () {
      let logoscr = ''
      if (this.theme === 'dark') {
        logoscr = require('../assets/logo_white_s.png')
      } else {
        logoscr = require('../assets/logo_black_s.png')
      }
      return logoscr
    },
    classObject: function () {
      let styleObject = {}
      if (this.theme === 'dark') {
        styleObject = {
          color: '#fff',
          fontSize: '13px'
        }
      } else {
        styleObject = {
          color: '#666',
          fontSize: '13px'
        }
      }
      return styleObject
    }
  }
}
</script>
