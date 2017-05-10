<style scoped>
.wrapper-container {
    display: block;
    background: #fff;
    width: 100%;
    min-height: 1200px;
    /*margin: 15px auto 15px;*/
    border-radius: 0px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
}

.page-home {
    height: 100%;
}

.page-home .section--banner {
    position: relative;
    text-align: center;
    font-family: AvenirNext-Regular, PingFangHK-Light;
    height: 600px;
    padding: 220px 0px 80px 0px;
    margin-top: 80px;
    background-image: url('//everlook-qcloud.meiqia.com/assets/banner_home-c94f442bd4b1de395a4e82ba292e739225a5d6d8f790f0ce599f03b91f75981b.jpg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    transition: background-image 500ms linear
}


.page-home .form__signup-simple {
    position: absolute;
    width: 800px;
    bottom: -30px;
    left: 0;
    right: 0;
    z-index: 1;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 7px;
    font-size: 14px;
    box-shadow: 0 4px 12px 0 rgba(52, 63, 75, 0.06), 0 10px 40px 0 rgba(52, 63, 75, 0.08), 0 0 0 1px rgba(52, 63, 75, 0.06)
}

.page-home .form__signup-simple input {
    display: inline-block;
    float: left;
    margin: 0;
    padding: 30px 20px;
    width: 640px;
    border: none;
    border-radius: 7px 0 0 7px;
    height: 40px;
    font-size: inherit
}

.page-home .form__signup-simple input:focus {
    outline: none;
    box-shadow: inset 0 0 2px 1px #2c7cff
}

.page-home .form__signup-simple input.warning {
    box-shadow: inset 0 0 5px 0 red
}

.page-home .form__signup-simple button {
    display: inline-block;
    float: left;
    margin: 0;
    width: 160px;
    height: 60px;
    color: #fff;
    border: none;
    border-radius: 0 7px 7px 0;
    padding: 0;
    font-size: inherit;
    background-color: #2c7cff;
    box-shadow: inset 0 0 0 1px rgba(52, 63, 75, 0.06), 0 4px 12px 0 rgba(52, 63, 75, 0.06), 0 10px 40px 0 rgba(52, 63, 75, 0.08), 0 0 0 1px rgba(52, 63, 75, 0.06)
}

.page-home .form__signup-simple button:hover {
    cursor: pointer;
    background: #1166F0
}

.section--banner h1,
.section--banner h2 {
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    text-align: center;
    color: #2a3541;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    margin: 0
}

.section--banner h1 {
    letter-spacing: 1px;
    font-size: 32px;
    line-height: 1.88
}

.section--banner h2 {
    font-size: 16px;
    line-height: 2.0;
    letter-spacing: 1px
}

.footer {
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    background: #fafbfd
}
</style>

<template>
    <div class="home ">
        <MyHeader></MyHeader>
        <div class="wrapper-container page-home">
            <section class="section--banner">
                <div class="inr">
                    <h1>连接客户，亲密无间</h1>
                    <h2>我们专注于为企业提供以客户为中心的全流程产品，帮助企业获得成功</h2>
                    <form class="form__signup-simple" action="https://app.meiqia.com/signup" method="get">
                        <input name="phone" type="tel" required="" placeholder="请填写手机号">
                        <button type="submit">开始免费试用</button>
                    </form>
                </div>
            </section>
        </div>
    
        <div class="fancy">万岁！</div>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
import MyHeader from '../components/Header'
import MyFooter from '../components/Footer'
export default {
  components: { MyHeader, MyFooter },
  data () {
    return {

    }
  }
}
</script>
