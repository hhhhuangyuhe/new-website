<template>
  <div id="fyw-header">
    <div class="fyw-header-content">
      <div class="fyw-header-left">
        <!-- <img src="../assets/img/header/logo_new.png" class="new-logo" @click="$router.push('/')"/> -->
        <nuxt-link to="/" class="new-logo"></nuxt-link>
        <ul class="fyw-content">
          <li @mouseenter="showPDList = true" @mouseleave="showPDList = false">
            产品与解决方案
            <div class="pd-list" v-show="showPDList">
              <nuxt-link to="/product/ers" class="ispan">
                <p class="pd-name">
                  <img src="../assets/img/header/组 2.png" class="pd-icon" />
                  <span class="pd-label">员工关系服务</span>
                </p>
                <p class="pd-desc">智能在线入离职，人事管理全流程可视化</p>
              </nuxt-link>
              <nuxt-link to="/product/staffMedicalExamination" class="ispan">
                <p class="pd-name">
                  <img src="../assets/img/header/组 7.png" class="pd-icon" />
                  <span class="pd-label">员工体检</span>
                </p>
                <p class="pd-desc">
                  150+城市，450+体检机构，员工体检进度即时可视
                </p>
              </nuxt-link>
              <nuxt-link to="/product/nsso" class="ispan">
                <p class="pd-name">
                  <img src="../assets/img/header/组 3.png" class="pd-icon" />
                  <span class="pd-label">全国社保外包</span>
                </p>
                <p class="pd-desc">300+城市，在线增减，数据即时可视</p>
              </nuxt-link>
              <nuxt-link to="/product/employeeProtection" class="ispan">
                <p class="pd-name">
                  <img src="../assets/img/header/组 8.png" class="pd-icon" />
                  <span class="pd-label">补充员工保障</span>
                </p>
                <p class="pd-desc">在线参保与理赔，每月结算与付款</p>
              </nuxt-link>
              <nuxt-link to="/product/payroll" class="ispan">
                <p class="pd-name">
                  <img src="../assets/img/header/组 4.png" class="pd-icon" />
                  <span class="pd-label">薪酬核算</span>
                </p>
                <p class="pd-desc">一键核算，智能纠错，数据安全准确</p>
              </nuxt-link>
              <nuxt-link to="/product/holidayBenefits" class="ispan">
                <p class="pd-name">
                  <img src="../assets/img/header/组 9.png" class="pd-icon" />
                  <span class="pd-label">节日福利</span>
                </p>
                <p class="pd-desc">精选节日商品，员工自主N选1，全国免费包邮</p>
              </nuxt-link>
              <nuxt-link to="/product/paySalary" class="ispan">
                <p class="pd-name">
                  <img src="../assets/img/header/组 5.png" class="pd-icon" />
                  <span class="pd-label">薪资代发</span>
                </p>
                <p class="pd-desc">银企直连，电子工资条，个税属地化申报</p>
              </nuxt-link>
              <nuxt-link to="/product/pointsBenefit" class="ispan">
                <p class="pd-name">
                  <img src="../assets/img/header/组 10.png" class="pd-icon" />
                  <span class="pd-label">积分福利</span>
                </p>
                <p class="pd-desc">
                  激活组织活力，增加员工到手收入，降低企业财税压力
                </p>
              </nuxt-link>
              <nuxt-link to="/product/attendanceAndVacation" class="ispan">
                <p class="pd-name">
                  <img src="../assets/img/header/组 6.png" class="pd-icon" />
                  <span class="pd-label">考勤与休假</span>
                </p>
                <p class="pd-desc">移动定位考勤，智能排班，实时考勤报表</p>
              </nuxt-link>
            </div>
          </li>
          <li
            class="sed"
            @mouseenter="showZHList = true"
            @mouseleave="showZHList = false"
          >
            <nuxt-link to="/information">HR智汇</nuxt-link>
            <div class="zh-list" v-show="showZHList">
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=10000"
                class="zh-list-link"
                >市场活动</nuxt-link
              >
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=15"
                class="zh-list-link"
                >新闻动态</nuxt-link
              >
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=17"
                class="zh-list-link"
                >劳动关系</nuxt-link
              >
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=18"
                class="zh-list-link"
                >社保资讯</nuxt-link
              >
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=19"
                class="zh-list-link"
                >薪酬管理</nuxt-link
              >
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=20"
                class="zh-list-link"
                >员工福利</nuxt-link
              >
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=21"
                class="zh-list-link"
                >认可激励</nuxt-link
              >
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=22"
                class="zh-list-link"
                >HR信息化</nuxt-link
              >
            </div>
          </li>
          <li><nuxt-link to="/aboutus">关于我们</nuxt-link></li>
        </ul>
      </div>
      <div class="fyw-header-right">
        <!-- <span class="welfare" @click="$router.push('/product/pointsBenefit')">福利商城</span> -->
        <!-- <span class="language"></span> -->
        <span class="apply" @click="$router.push('/fillinginfo')"
          >预约体验</span
        >
        <a
          class="HRLogin"
          href="https://vip.fanyuanwang.cn/Login/HrLogin"
          target="_blank"
          >HR登录</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      nowRoute: "index",
      showPDList: false,
      showZHList: false,
    };
  },
  methods: {
    HightlightRoute() {
      // console.log(this.$route)
      this.nowRoute = this.$route.name;
      this.showPDList = false;
      this.showZHList = false;
    },
  },
  mounted() {
    this.HightlightRoute();
  },
  watch: {
    $route() {
      this.HightlightRoute();
    },
  },
};
</script>
<style scoped>
#fyw-header {
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0px 0px 18px 2px rgba(181, 185, 195, 0.5);
  width: 100%;
  height: 90px;
  z-index: 99;
}

.fyw-header-content {
  width: 1200px;
  height: inherit;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fyw-header-left {
  display: flex;
  align-items: center;
  height: 100%;
}
.fyw-header-left .fyw-logo {
  display: block;
  width: 118px;
  height: 35px;
  background-size: cover;
  background: url(../assets/img/index/newlogo.png);
  margin-right: 79px;
  cursor: pointer;
}
.new-logo {
  width: 126px;
  height: 35px;
  margin-right: 79px;
  cursor: pointer;
  vertical-align: bottom;
  /* background: url(../assets/img/header/logo_new.png); */
  background: url(../assets/img/header/泛员云.png);
  background-size: cover;
}
.fyw-content {
  display: flex;
  align-items: center;
  height: 100%;
}
.fyw-content li {
  list-style-type: none;
  font-size: 16px;
  font-weight: 400;
  color: #38424f;
  cursor: pointer;
  position: relative;
  height: 100%;
  line-height: 90px;
  margin-right: 39px;
  user-select: none;
  display: flex;
  align-items: center;
}
.fyw-content li a {
  color: #38424f;
  font-size: 16px;
  font-weight: 400;
  height: 100%;
  display: block;
}
.fyw-content li:first-child::after {
  content: "";
  display: inline-block;
  width: 10px;
  height: 5px;
  background: url(../assets/img/index/more.png);
  /* margin-right: 39px; */
  margin-left: 10px;
  vertical-align: middle;
}
.fyw-content li.sed::after {
  content: "";
  display: inline-block;
  width: 10px;
  height: 5px;
  background: url(../assets/img/index/more.png);
  /* margin-right: 39px; */
  margin-left: 10px;
  vertical-align: middle;
}
.fyw-header-right {
  display: flex;
  align-items: center;
  user-select: none;
}
.fyw-header-right .welfare {
  font-size: 16px;
  font-weight: 400;
  color: #38424f;
  margin-right: 39px;
  display: flex;
  cursor: pointer;
}
.fyw-header-right .welfare::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 22px;
  background: url(../assets/img/index/福利1.png);
  margin-right: 9px;
}
.fyw-header-right .language {
  width: 28px;
  height: 26px;
  background: url(../assets/img/index/中英切换.png);
  margin-right: 30px;
  cursor: pointer;
}
.fyw-header-right .apply {
  font-size: 16px;
  font-weight: 400;
  color: #4c80fa;
  width: 100px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #4c80fa;
  border-radius: 4px;
  text-align: center;
  line-height: 40px;
  margin-right: 29px;
  cursor: pointer;
}
.fyw-header-right .HRLogin {
  font-size: 16px;
  font-weight: 400;
  color: #38424f;
  cursor: pointer;
}
.pd-list {
  width: 800px;
  height: 480px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  top: 90px;
  padding: 14px 18px 14px 18px;
  border: 1px solid #e2e2e2;
  display: flex;
  flex-wrap: wrap;
}
.pd-list .ispan {
  height: 90px;
  width: 380px;
  padding: 15px 16px 15px 28px;
}
.pd-list .ispan:hover {
  background-color: #f6faff;
}
.pd-list .pd-name {
  display: flex;
  align-items: center;
}
.pd-list .pd-icon {
  width: 30px;
  margin-right: 22px;
}
.pd-list .pd-label {
  font-size: 16px;
  font-weight: 400;
  color: #38424f;
  line-height: 17px;
}
.pd-list .pd-desc {
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  margin-top: 12px;
  color: rgba(156, 162, 178, 1);
}
.zh-list {
  width: 220px;
  height: 220px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  top: 90px;
  padding: 14px 18px 14px 18px;
  border: 1px solid #e2e2e2;
  display: flex;
  flex-wrap: wrap;
}
.zh-list .zh-list-link {
  height: 44px;
  line-height: 44px;
  width: 50%;
  text-align: center;
}
.zh-list .zh-list-link:hover {
  background-color: #f6faff;
}
@media screen and (min-width: 1440px) {
  #fyw-header {
    height: 90px;
  }
}
@media screen and (max-width: 1439px) {
  #fyw-header {
    height: 70px;
  }
  .fyw-content li {
    line-height: 70px;
  }
  .pd-list {
    top: 70px;
  }
  .zh-list {
    top: 70px;
  }
}
</style>
