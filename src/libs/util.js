let util = {

}

util.title = function (title) {
  title = title ? title + ' - 广州下划线信息科技-美容软件-美发软件-收银软件-进销存软件-微信公众号-标注您的人生-起航您的事业' : '广州下划线信息科技-美容软件-美发软件-收银软件-进销存软件-微信公众号-标注您的人生-起航您的事业'
  window.document.title = title
}

util.isEmptyObject = function (obj) {
  for (var key in obj) {
    console.log(key)
    return false
  }
  return true
}

util.on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

util.off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()
export default util
