<template>
  <div id="fyw-right">
    <ul>
      <li @click="MoNiClick">
        <img src="../assets/img/index/在线咨询.png" />
        <span>在线咨询</span>
      </li>
      <li @click="$router.push('/fillinginfo')">
        <img src="../assets/img/right/Play-Button.png" />
        <span>预约演示</span>
      </li>
      <li @mouseenter="showPhone = true" @mouseleave="showPhone = false">
        <img src="../assets/img/index/电话.png" />
        <span>咨询热线</span>
        <p class="phone" v-show="showPhone">400 0909 388</p>
      </li>
      <li @mouseenter="showQrCodes = true" @mouseleave="showQrCodes = false">
        <img src="../assets/img/index/app 下载.png" />
        <span>员工移动</span>
        <span style="margin-top:4px">服务平台</span>
        <div class="qrCodes" v-show="showQrCodes">
          <div class="codeBox">
            <img src="../assets/img/right/APP下载.png"/>
            <p>下载APP登陆</p>
          </div>
          <!-- <div class="codeBox">
            <img src="../assets/img/right/泛员之家微信号.png"/>
            <p>微信公众号登陆</p>
          </div> -->
        </div>
      </li>
      <li @click="toTop">
        <img src="../assets/img/index/置顶.png" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      showPhone: false,
      showQrCodes: false,
    };
  },
  methods: {
    MoNiClick(){
      document.getElementById('kf5-support-btn').click()
    },
    toTop(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  },
  mounted() {},
};
</script>
<style scoped>
#fyw-right ul {
  display: flex;
  flex-direction: column;
  color: #ffffff;
}
#fyw-right ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  background: rgba(0,0,0,.6);
  border: 1px solid #e2e2e2;
  /* opacity: 0.6; */
  border-radius: 4px;
  padding: 16px 0;
  margin-bottom: 2px;
  cursor: pointer;
  position: relative;
}
#fyw-right ul li img {
  vertical-align: bottom;
}
#fyw-right ul li span {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 14px;
  margin-top: 9px;
}
.phone{
  position: absolute;
    top: 16px;
    display: block;
    width: 165px;
    height: 50px;
    background: rgba(0,0,0,.6);
    border-radius: 4px;
    left: -180px;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
}
.phone::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-left: 6px solid rgba(0,0,0,.6);
    border-bottom: 7px solid transparent;
}
.qrCodes{
position: absolute;
    top: 0;
    left: -200px;
    width: 185px;
    height: 200px;
    background: rgba(0,0,0,.6);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 36px;
}
.qrCodes .codeBox {
    text-align: center;
}
.qrCodes .codeBox img {
    margin-bottom: 9px;
    vertical-align: bottom;
}
.qrCodes::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 33%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-left: 6px solid rgba(0,0,0,.6);
    border-bottom: 7px solid transparent;
}
</style>
