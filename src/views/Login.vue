<template>
  <div class="home">
    <div class="wrapper">
      <div class="wrapper-header">
        <Menu mode="horizontal" theme="light" active-name="1">
          <div class="wrapper-header-nav  y-row">
            <a class="wrapper-header-nav-logo">
              <img src="../assets/logo_s.png">
            </a>
            <h2 class="logo-title">登录</h2>
            <div class="wrapper-header-nav-right">
              <ul>
                <li>
                  <router-link to="/">返回首页</router-link>
                </li>
              </ul>
            </div>
          </div>
        </Menu>
      </div>
      <!--</Affix>-->
      <div class="wrapper-container y-row">
        <div class="wrapper-container-from">
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" label-position="top">
            <div id="login-title" style="font-size:12px;font-weight:normal;">
              登录后进入会员中心
            </div>
            <div>{{ formValidate.error }}</div>
            <a href="javascript:;" class="formValidate-tip">忘记登录名？</a>
            <Form-item label="登录名:" prop="username" style="font-weight: 700;">
              <Input type="text" v-model="formValidate.username" size="large" placeholder="用户名/手机号码"></Input>
            </Form-item>
            <a href="javascript:;" class="formValidate-tip">忘记登录密码？</a>
            <Form-item label="登录密码:" prop="passwd" style="font-weight: 700;">
              <Input type="password" v-model="formValidate.passwd" size="large" placeholder="登录密码"></Input>
            </Form-item>
            <Form-item>
              <Button type="primary" @click="handleSubmit('formValidate')" long size="large" :loading="loading">登录</Button>
              <!--<Button type="primary" @click="handleSubmit1()" long size="large">登录</Button>-->
            </Form-item>
            <a href="javascript:;" class="formValidate-tip">还不是会员？马上注册</a>
  
          </Form>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-main">
        <div class="help-banner">  
          <div class="list-help">
            <div class="left-icon">
              <span>
              <img src="../assets/TB1w96hMVXXXXX8apXXXXXXXXXX-100-82.gif" alt="">
          </span>
            </div>
            <div class="right-text">
              <div class="left">
                <p class="title">
                  售前咨询
                </p>
                <p class="desc">
                  4008-123-123
                </p>
              </div>
              <div class="right">
  
                <p class="list">
  
                  <a href="https://www.aliyun.com/support/95187" target="_blank" data-spmcode="login001" data-spm-click="gostr=/aliyun;locaid=indexHelpBanner;;site=400phonelogin&amp;content=unLogin&amp;click=login001">全方位的购买咨询</a>
                </p>
  
                <p class="list">
  
                  <a href="https://www.aliyun.com/support/95187" target="_blank" data-spmcode="login002" data-spm-click="gostr=/aliyun;locaid=indexHelpBanner;;site=400phonelogin&amp;content=unLogin&amp;click=login002">精准的配置推荐</a>
                </p>
  
                <p class="list">
  
                  <a href="https://www.aliyun.com/support/95187" target="_blank" data-spmcode="login003" data-spm-click="gostr=/aliyun;locaid=indexHelpBanner;;site=400phonelogin&amp;content=unLogin&amp;click=login003">灵活的价格方案</a>
                </p>
  
                <p class="list">
  
                  <a href="https://www.aliyun.com/support/95187" target="_blank" data-spmcode="login004" data-spm-click="gostr=/aliyun;locaid=indexHelpBanner;;site=400phonelogin&amp;content=unLogin&amp;click=login004">1对1贴心服务</a>
                </p>
  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-bottom">
        <font>广州下划线信息科技有限公司 | 粤ICP备12005794号 2017 © Undline.com</font>
  
        <font><a href="//www.talkingdata.com/terms.jsp?languagetype=zh_cn" target="_blank">服务条款</a>
          <a href="//www.talkingdata.com/privacy.jsp?languagetype=zh_cn" target="_blank">隐私政策</a>
        </font>
      </div>
    </div>
    <Back-top :bottom="100"></Back-top>
    <PopupContent></PopupContent>
  </div>
</template>

<script>
import PopupContent from '../components/PopupContent'
export default {
  components: { PopupContent },
  data () {
    const validateusername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入登录名！'))
      } else {
        callback()
      }
    }
    const validateuserpwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入登录密码！'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      formValidate: {
        username: '',
        passwd: ''
      },
      ruleValidate: {
        username: [
          { validator: validateusername }
        ],
        passwd: [
          { validator: validateuserpwd }
        ]
      }
    }
  },
  methods: {
    handleSubmit: function (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.userLogin(this.formValidate.username, this.formValidate.passwd)
        }
      })
    },
    userLogin: function (username, password) {
      this.loading = true
      let payload = {
        user: {
          username: username,
          Password: password
        }
      }

      this.$store.dispatch('login', payload).then(() => {
        this.loading = false
        const redirectUrl = this.$route.query.redirect_url || '/'
        this.$router.push(redirectUrl)
      }).catch((error) => {
        this.$Message.error(error)
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  background-color: #fff;
  padding: 1px;
  min-width: 1003px;
}


.wrapper-header>* {
  height: 80px;
  line-height: 80px;
}

.wrapper-header .logo-title {
  /*float: left;*/
  display: inline-block;
  width: auto;
  height: 80px;
  line-height: 80px;
  font-size: 20px;
  font-weight: normal;
  margin-top: 0px;
  color: #3c3c3c;
}

.formValidate-tip {
  /*display: inline-block;*/
  float: right;
  padding: 0 0 10px 0;
  text-align: right;
  vertical-align: middle;
  font-size: 12px;
  color: #00a2ca;
  line-height: 1;
  box-sizing: border-box;
 }

.wrapper-header-nav {
  width: 90%;
  height: 80px;
  margin: 0 auto;
}

.wrapper-header-nav-list {
  height: inherit;
  float: left;
}

.wrapper-header-nav-logo {
  margin-top: 15px;
  margin-right: 30px;
  float: left;
}

.wrapper-foot-logo {
  height: 30px;
  float: left;
}

.wrapper-header-nav-logo,
.wrapper-foot-logo img {
  height: 100%;
}

.wrapper-header-nav-right {
  float: right;
  overflow: hidden;
}

.wrapper-header-nav-right ul {
  display: inline-block;
  height: 80px;
  line-height: 80px;
}

.wrapper-header-nav-right ul>li {
  float: left;
}

.wrapper-container {
  position: relative;
  margin-top: 95px;
  min-height: 485px;
  vertical-align: middle;
}

.y-row {
  min-width: 1000px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  zoom: 1;
}

.wrapper-container-from {
  position: absolute;
  border: 1px solid #D4D4D4;
  padding-top: 20px;
  right: 160px;
  margin-bottom: 10px;
  background-color: #fff;
  min-width: 292px;
  min-height: 320px;
  background: rgba(255, 255, 255, 0.3);
  z-index: 2;
}

.wrapper-container-from form {
  position: relative;
  padding: 10px 20px;
  overflow: hidden;
}

#login-title {
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 10px;
}


.footer {
  overflow: hidden;
  background: #fff;
  color: #fff;
}

.footer-main {
  font-family: 'Microsoft YaHei';
  outline: none;
}
.help-banner
{  
  height: 130px;
  padding: 39px 0;
  background: #EBEBEB;
}
.footer-main .help-banner .list-help {
  display: block;
  min-width: 1000px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  zoom: 1;
  color: #373D41;
  width: 100%;
}

.footer-main .help-banner .list-help .left-icon {
  float: left;
  width: 50px;
  height: 50px;
  display: table;
}

.footer-main .help-banner .list-help .left-icon span {
  display: table-cell;
  vertical-align: middle;
}

.footer-main .help-banner .list-help .left-icon span img {
  width: 100%;
}

.footer-main .help-banner .list-help .right-text .left {
  display: inline-block;
  height: 50px;
}

.footer-main .help-banner .list-help .right-text .left .title {
  color: #373D41;
  font-size: 16px;
  line-height: 1;
  padding-bottom: 5px;
}


.footer-main .help-banner .list-help .right-text .left .desc {
  font-size: 22px;
  color: #373D41;
}

.footer-main .help-banner .list-help .right-text .right {
  margin-left: 90px;
  display: inline-block;
  height: 24px;
}

.footer-main .help-banner .list-help .right-text .right .list {
  float: left;
  padding: 0 10px;
  font-size: 16px;
  color: #373D41;
}
.footer-main .help-banner .list-help .right-text .right .list:not(:last-child) {
    border-right: 1px solid #CFD0D1;
}
.footer-main .help-banner .list-help .right-text .right .list a {
     text-decoration: none;
    color: inherit;
}

.footer-main .help-banner .list-help .right-text {
  margin-left: 77px;
  height: 50px;
}


/*
.footer-main-left {
    width: 703px;
    float: left;
    display: block;
    color: #999999;
}

.footer-main-left ul>li {
    padding-left: 10px;
    margin-top: 9px;
}

.footer-main-right {
    margin: 5px auto;
    padding-left: 10px;
    width: 300px;
    float: right;
    display: block;
}

.footer-main-right ul {
    float: left;
    padding: 0;
    zoom: 1;
    margin-right: 20px;
}

.footer-main-right ul li {
    float: right;
    clear: both;
    display: block;
    padding: 0 0 9px;
    color: #999999;
}*/

.copyright-bottom {
  clear: both;
  display: block;
  text-align: center;
  font-size: 12px;
  /*border-top: 1px solid #999999;*/
  padding-top: 20px;
  color: #999999;
}

.copyright-bottom font {
  clear: both;
  display: block;
}

.copyright-bottom font a {
  text-decoration: none;
  cursor: pointer;
  margin: 6px 5px;
  display: inline-block;
}


/*
.bottom-right ul li.phone-number span,
.content-bottom ul li.phone-number span {
    margin-right: 10px;
    width: 19px;
    height: 19px;
    float: left;
    text-indent: -9999px;
    position: relative;
    top: -1px;
}*/

.ask-question {
  width: 45px;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  background: #f50;
  color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
