<style scoped>
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
    top: 40%;
    right: 30px;
    z-index: 100;
}
.ask-question:hover {
    background: #F7000E;
}
.popup {
    margin: 0;
    overflow: hidden;
    position: fixed;
    top: 40%;
    right: 0px;
    font-size: 16px;
    line-height: 1.47;
    font-family: inherit;
    z-index: 999;
    border-radius: 4px 0 0 4px;
}

.popup .popup-content {
    background-color: #fafafa;
    background: -webkit-gradient(linear, left top, left bottom, from(#fafafa), to(#e9e9e9));
    background: -webkit-linear-gradient(top, #fafafa, #e9e9e9);
    background: -moz-linear-gradient(top, #fafafa, #e9e9e9);
    background: -ms-linear-gradient(top, #fafafa, #e9e9e9);
    background: -o-linear-gradient(top, #fafafa, #e9e9e9);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#fafafa, endColorstr=#e9e9e9, GradientType=0);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-border-radius: 4px 0 0 4px;
    -moz-border-radius: 4px 0 0 4px;
    border-radius: 4px 0 0 4px;
    padding: 26px 0 26px 16px;
    text-align: center;
    font-size: 12px;
    line-height: 17px;
    position: relative
}

.popup .popup-content .hidden-chat-button {
    display: none
}

.popup .popup-content:before {
    -webkit-border-radius: 4px 0 0 4px;
    -moz-border-radius: 4px 0 0 4px;
    border-radius: 4px 0 0 4px;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 16px;
    background: #008fd3
}

.popup .btn-close {
    background: 0;
    border: 0;
    font-size: 11px;
    padding: 0 5px;
    position: absolute;
    right: 14px;
    top: 18px;
}

.popup .btn-close:focus,
.popup .btn-close:active {
    outline: 0
}

.contact-title {
    color: #000;
    font-size: 19px;
    line-height: 24px;
    margin: 0 60px 28px 0;
    padding: 0 15px
}

.popup .contact-title a {
    text-decoration: none;
    color: #000;
    cursor: default
}

.popup .contact-title .worldwide-link a,
.popup .contact-title .locations-link a,
.popup .contact-title .contact-local-phones a {
    color: #008fd3;
    cursor: pointer
}

.popup .contact-title .worldwide-link a:hover,
.popup .contact-title .locations-link a:hover,
.popup .contact-title .contact-local-phones a:hover {
    text-decoration: underline
}

.popup .contact-title .contact-local-phones {
    font-size: 12px;
    line-height: 17px
}

.popup .contact-title .locations-link {
    display: block
}

.popup .contact-tel-wrapper a {
    white-space: nowrap
}

.popup .contact-page {
    color: #000;
    font-size: 20px;
    line-height: 24px;
    margin: 0 0 28px
}

.popup .contact-page a {
    cursor: pointer
}

.contact-set {
    padding: 0 35px 3px 35px;
    display: table;
    margin: 0 auto;
    table-layout: fixed
}

.contact-set:after {
    content: '';
    display: block;
    clear: both
}

.contact-set .col {
    padding: 0 20px 4px 20px;
    border-left: 1px solid #ddd;
    display: table-cell;
    max-width: 202px;
    min-width: 202px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.contact-set .col:first-child {
    border-left: 0
}
.popup-content p {
    margin: 0;
    text-align: left;
    color: #000
}

.popup-content  .offline a.heading {
    cursor: default
}

.popup-content  .heading {
    display: block;
    text-decoration: none;
    margin: -2px 0 0
}

 .popup-content  .heading .visual {
    display: block;
    margin: 0 auto 11px
}

 .popup-content  .heading .visual img {
    display: block;
    margin: 0 auto 11px
}

 .popup-content .heading [class^="icon-"] {
    display: block;
    position: static;
    height: 46px;
    background: 0;
    filter: none;
    width: auto;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    text-indent: 0
}

 .popup-content .heading [class^="icon-"]:before {
    margin: 0;
    width: auto;
    height: auto;
    background: 0;
    color: #008fd3;
    position: static;
    display: inline-block;
    font-size: 42px;
    line-height: 46px
}

 .popup-content .heading [class^="icon-"]:hover:before {
    color: #003283
}

.popup-content .heading .h-text {
    display: block;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    margin: 0 0 6px
}

 .popup-content .heading:hover .h-text {
    text-decoration: underline
}

 .popup-content .heading:hover .h-text.chat-offline {
    text-decoration: none
}

 .popup-content .call .heading [class^="icon-"]:before {
    font-size: 27px
}

 .popup-content .contact .heading [class^="icon-"]:before {
    font-size: 36px
}

 .popup-content .online span.chat-offline {
    display: none
}

.popup-content  .offline span.chat-online {
    display: none
}

.popup-content .contact-location {
    margin: -5px auto 10px auto
}
.popup-content .contact-location [class*='icon-']:before {
    font-size: 35px;
    padding-right: 11px
}

.popup-content .contact-location .contact-country {
    color: #f0ab00;
    font-size: 18px;
    position: relative;
    white-space: nowrap;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold
}

.slide-fade-enter-active {
    animation-duration: .3s;
    animation-fill-mode: both;
    animation-play-state: paused
}

.slide-fade-leave-active {
    animation-duration: .5s;
    animation-fill-mode: both;
    animation-play-state: paused
}

.slide-fade-enter-active {
    animation-name: slideMoveNoticeIn;
    animation-play-state: running
}

.slide-fade-leave-active {
    animation-name: slideMoveNoticeOut;
    animation-play-state: running
}

.slide-fade-enter-active {
    opacity: 0;
    animation-timing-function: ease-in
}

.slide-fade-leave-active {
    animation-timing-function: ease-out
}

@keyframes slideMoveNoticeOut {
    0% {
        transform-origin: 0 0;
        transform: translateX(0);
        opacity:1
    }
    70% {
        transform-origin: 0 0;
        transform: translateX(100%);
        height: auto;
        opacity:0
    }
    100% {
        transform-origin: 0 0;
        transform: translateX(100%);
        margin-bottom: 0;
        opacity:0
    }
}

@keyframes slideMoveNoticeIn {
    0% {
        opacity:0;
        transform-origin: 0 0;
        transform: translateX(100%)
    }
    100% {
        opacity:1;
        transform-origin: 0 0;
        transform: translateX(0)
    }
}
</style>

<template>
    <div class="root">
    <div class="ask-question" @click.stop="active = !active">
        <Icon type="chatboxes" size=18></Icon>
        <p>联系<br/>我们</p>
    </div>       
    <transition name="slide-fade">
        <div class="popup" v-show="active" ref="popup">
            <div class="popup-content">
                <a class="btn-close" @click.stop="close()">
                    <Icon type="close" size=14></Icon>
                </a>
                <div class="contact-title">
                    <div class="contact-text-wrapper">
                        <span class="intro-text">请致电</span>
                        <span class="contact-tel-wrapper">
                            <a class="base-font-medium" href="tel:400123123" data-tel-number="tel:400123123">400-123-456</a>
                        </span>
                        <span class="or">，或</span>
                    </div>
                    </div> 
                    <div class="contact-set">
                        <div class="col chat offline">
                                <a class="heading" href="#">
                                    <span data-alt="" class="adaptiveImagesContainer image visual" data-picture="">
                                        <img alt="" src="../assets/img-chat.png.adapt.45_30.false.false.false.false.png">
                                        <noscript>&lt;img alt="" src="../assets/img-chat.png.adapt.45_30.false.false.false.false.png"&gt;</noscript>
                                    </span>
                                    <span class="h-text chat-offline base-font-medium">聊天当前离线</span>
                                    <p>若想获得在线帮助，请与业务代表洽谈</p>
                                </a>
                        </div>
                    
                        <div class="col contact">
                            <a class="heading" target="_self" href="javascript:;">
                                <div>
                                    <span data-alt="" class="adaptiveImagesContainer image visual" data-picture="">
                                        <img alt="" src="../assets/img-mail.png.adapt.45_30.false.false.false.false.png"></span>
                                        <noscript>&lt;img alt="" src="../assets/img-mail.png.adapt.45_30.false.false.false.false.png"&gt;</noscript>
                                    </span>
                                </div>
                                <span class="h-text base-font-medium">联系我们</span>
                                <p>如有任何意见、问题或反馈，欢迎您给我们发送电子邮件</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </transition>
    </div>
</template>

<script>
import Util from '../libs/util'
export default {
  data () {
    return {
      active: false// this.ShowMe
    }
  },
//   props: {
//     ShowMe: {
//       type: Boolean,
//       default: false
//     }
//   },
  methods: {
    close () {
      // this.$emit('HideMe', false)
      this.active = false
    },
    handleDocumentClick (e) {
      const popper = this.$refs.popup
      if (!this.$el ||
        this.$el.contains(e.target) ||
        !popper ||
        popper.contains(e.target)) return
      this.close()
    }
  },
  mounted () {
    Util.on(document, 'click', this.handleDocumentClick)
  },
  destroyed () {
    Util.off(document, 'click', this.handleDocumentClick)
  }
}
</script>
