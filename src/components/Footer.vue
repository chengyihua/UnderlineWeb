 <style scoped>
.footer {
    margin-top:150px;
    overflow: hidden;
    background: #2e3033;
    color: #fff;
}

.footer-main {
    width: 90%;
    min-width: 1003px;
    margin: 0 auto;
}

.footer-main>div {
    padding: 20px 0;
}

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
    /*border-left: 1px solid #fff;*/
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
}

.copyright-bottom {
    clear: both;
    display: block;
    text-align: center;
    font-size: 12px;
    border-top: 1px solid #999999;
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

.bottom-right ul li.phone-number span,
.content-bottom ul li.phone-number span {
    margin-right: 10px;
    width: 19px;
    height: 19px;
    float: left;
    text-indent: -9999px;
    position: relative;
    top: -1px;
}
</style>
 <template>
 <div class="footer">
            <div class="footer-main">
                <div class="footer-main-left">
                    <Row>
                        <Col span="8">
                        <h4>
                                  <Icon type="ios-navigate"></Icon>
                                    咨询
                                </h4>
                        <ul>
                            <li><a href="https://github.com/iview/iview" target="_blank">iView</a></li>
                            <li><a href="https://github.com/iview/iview-cli" target="_blank">iView Cli</a></li>
                            <li><a href="https://github.com/iview/iview-doc" target="_blank">iView Doc</a></li>
                            <li><a href="https://github.com/iview/iview-project" target="_blank">iView Project</a></li>
                            <li><a href="https://github.com/iview/iview-theme" target="_blank">iView Theme</a></li>
                        </ul>
                        </Col>
                        <Col span="8">
                        <h4>
                              <Icon type="ios-navigate"></Icon>
                                    关于我们
                                </h4>
                        <ul>
                            <li><a href="https://github.com/iview/iview" target="_blank">iView</a> - safsdfsdf</li>
                            <li><a href="https://github.com/iview/iview-cli" target="_blank">iView Cli</a></li>
                            <li><a href="https://github.com/iview/iview-doc" target="_blank">iView Doc</a></li>
                            <li><a href="https://github.com/iview/iview-project" target="_blank">iView Project</a></li>
                            <li><a href="https://github.com/iview/iview-theme" target="_blank">iView Theme</a></li>
                        </ul>
                        </Col>
                        <Col span="8">
                        <Icon type="ios-navigate"></Icon>
                        服务与支持
                        </h4>
                        <ul>
                            <li><a href="https://github.com/iview/iview" target="_blank">iView</a> - safsdfsdf</li>
                            <li><a href="https://github.com/iview/iview-cli" target="_blank">iView Cli</a></li>
                            <li><a href="https://github.com/iview/iview-doc" target="_blank">iView Doc</a></li>
                            <li><a href="https://github.com/iview/iview-project" target="_blank">iView Project</a></li>
                            <li><a href="https://github.com/iview/iview-theme" target="_blank">iView Theme</a></li>
                        </ul>
                        </Col>
                    </Row>
                </div>
                <div class="footer-main-right">
                    <ul>
                        <li>
                            <a href="/"><img src="../assets/foot.png" style="height:20px;"></a>
                        </li>
                        <li class="phone-number">
                            <Icon type="ios-telephone"></Icon> 400-222-2222</li>
                        <li>
                            <a href="mailto:support@undline.com" <Icon type="email"></Icon> support@undline.com</a>
                        </li>
                    </ul>
                    <img src="//jic.talkingdata.com/websites/images/wechat-code.png?v=1.1" class="QRcode">
                </div>
            </div>
            <div class="copyright-bottom">
                <font>广州下划线信息科技有限公司 | 粤ICP备12005794号 2017 © Undline.com</font>
    
                <font><a href="//www.talkingdata.com/terms.jsp?languagetype=zh_cn" target="_blank">服务条款</a>
                    <a href="//www.talkingdata.com/privacy.jsp?languagetype=zh_cn" target="_blank">隐私政策</a>
                </font>
            </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
