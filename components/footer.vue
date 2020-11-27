<template>
  <div id="fyw-footer">
    <div class="fyw-footer-main">
      <div class="footer-above">
        <div class="contact">
          <p class="footer-above-title">咨询热线：400-0909-388</p>
          <p class="contact-btn-group">
            <nuxt-link to="/fillinginfo" class="contact-btn book"
              >预约体验</nuxt-link
            >
            <span class="contact-btn consult" @click="MoNiClick">在线咨询</span>
          </p>
          <div class="contact-qrCode-group">
            <div>
              <img
                src="../assets/img/footer/11 在线咨询.png"
                class="qrCodeIcon qrCode-1"
              />
              <p>企业服务公众号</p>
            </div>
            <div>
              <img
                src="../assets/img/right/APP下载.png"
                class="qrCodeIcon qrCode-2"
              />
              <p>员工服务APP</p>
            </div>
          </div>
        </div>
        <div class="products">
          <p class="footer-above-title">产品与服务</p>
          <ul class="product-list">
            <li>
              <nuxt-link to="/product/ERS" class="product-link"
                >员工关系服务</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/product/NSSO" class="product-link"
                >全国社保外包</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/product/Payroll" class="product-link"
                >薪酬核算</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/product/PaySalary" class="product-link"
                >薪资代发</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/product/attendanceAndVacation"
                class="product-link"
                >考勤与休假</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/product/staffMedicalExamination"
                class="product-link"
                >员工体检</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/product/employeeProtection" class="product-link"
                >补充员工保障</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/product/holidayBenefits" class="product-link"
                >节日福利</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/product/pointsBenefit" class="product-link"
                >积分福利</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="information">
          <p class="footer-above-title">HR智汇</p>
          <ul class="information-list">
            <li>
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=10000"
                class="information-link"
                >市场活动</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=15"
                class="information-link"
                >新闻动态</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=17"
                class="information-link"
                >劳动关系</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=18"
                class="information-link"
                >社保资讯</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=19"
                class="information-link"
                >薪酬管理</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=20"
                class="information-link"
                >员工福利</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=21"
                class="information-link"
                >认可激励</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/information/list?pageIndex=1&pageSize=10&cateId=22"
                class="information-link"
                >HR信息化</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="news" v-if="false">
          <p class="footer-above-title">泛员小报</p>
          <ul class="news-list">
            <li>
              <a target="_blank" class="news-link">泛员观点</a>
            </li>
            <li>
              <a target="_blank" class="news-link">服务案例</a>
            </li>
            <li>
              <a target="_blank" class="news-link">政策快讯</a>
            </li>
            <li>
              <a target="_blank" class="news-link">政策解读</a>
            </li>
            <li>
              <a target="_blank" class="news-link">劳动风险案例</a>
            </li>
          </ul>
        </div>
        <div class="service">
          <nuxt-link to="/aboutus" class="footer-above-title"
            >关于泛员网</nuxt-link
          >
          <!-- <ul class="service-list">
            <li>
              <nuxt-link to="/aboutus" class="service-link"
                >关于泛员网</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/" class="service-link">联系我们</nuxt-link>
            </li>
          </ul> -->
        </div>
      </div>
      <div class="footer-bottom">
        <p class="friendly-links">
          友情链接：
          <a target="_blank" href="https://www.fairhr.com/">泛亚人力</a>
          <a target="_blank" href="https://www.1renshi.com/">壹人事</a>
          <a target="_blank" href="https://www.eshebao.cn/">易社保</a>
          <a target="_blank" href="https://littletaxcloud.fairhr.com/"
            >轻税云</a
          >
        </p>
        <p class="copyright">
          <span class="text">版权归深圳泛员网网络科技有限公司所有</span>
          <span class="text"
            >Copyright2004-2019 fanyuanwang.cn Allrights reserved</span
          >
          <a
            class="text"
            target="_blank"
            href="http://beian.miit.gov.cn/publish/query/indexFirst.action"
            >粤ICP备 16013246号-4</a
          >
          <a
            class="text"
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402004177"
            >粤公网安备 44030402003842号</a
          >
        </p>
        <p class="declaration">
          【免责声明】本站部分资讯信息为互联网收集而来，如内容侵犯了您的版权，请与我们取得联系，我们会及时做出处理，谢谢合作！
        </p>
        <a
          id="govIcon"
          href="https://szcert.ebs.org.cn/0bb8912f-4841-4d80-8faa-1662ac3d556e"
          target="_blank"
        >
          <img
            src="https://szcert.ebs.org.cn/Images/newGovIcon.gif"
            title="深圳市市场监督管理局企业主体身份公示"
            alt="深圳市市场监督管理局企业主体身份公示"
            width="128"
            height="52"
            border="0"
            style="border-width: 0px; border: hidden; border: none"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    MoNiClick() {
      document.getElementById("kf5-support-btn").click();
    },
  },
  mounted() {},
};
</script>
<style scoped>
#fyw-footer {
  background: #ffffff;
}
#fyw-footer a {
  text-decoration: none;
}
.fyw-footer-main {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0 50px 0;
  border-top: 2px solid #e2e2e2;
}
.footer-above {
  display: flex;
  justify-content: space-between;
}
.footer-above-title {
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  line-height: 15px;
  margin-bottom: 31px;
}
.contact-btn-group {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}
.contact-btn-group .contact-btn {
  width: 100px;
  height: 36px;
  border-radius: 18px;
  text-align: center;
  line-height: 36px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  user-select: none;
}
.contact-btn-group .contact-btn.book {
  background: #ff7300;
  margin-right: 40px;
}
.contact-btn-group .contact-btn.consult {
  background: #4d80f8;
}
.contact-qrCode-group {
  display: flex;
  align-items: flex-start;
}
.contact-qrCode-group > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
}
.contact-qrCode-group .qrCodeIcon {
  width: 100px;
  height: 100px;
  margin-bottom: 6px;
}
.contact-qrCode-group .qrCodeIcon.qrCode-1 {
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  width: 240px;
}
.product-list li {
  list-style-type: none;
  width: 50%;
  text-align: left;
  margin-bottom: 26px;
  line-height: 14px;
}
.product-list li a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #6d6d6d;
  cursor: pointer;
}
.product-list li a:hover {
  color: #000000;
}
.information-list {
  display: flex;
  flex-wrap: wrap;
  width: 145px;
}
.information-list li {
  list-style-type: none;
  width: 50%;
  text-align: left;
  margin-bottom: 26px;
  line-height: 14px;
}
.information-list li:nth-child(2n) {
  text-align: right;
}
.information-list li a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #6d6d6d;
  cursor: pointer;
}
.information-list li a:hover {
  color: #000000;
}
.news-list {
  display: flex;
  flex-wrap: wrap;
  width: 100px;
}
.news-list li {
  list-style-type: none;
  width: 100%;
  text-align: left;
  margin-bottom: 26px;
  line-height: 14px;
}
.news-list li a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #6d6d6d;
  cursor: pointer;
}
.news-list li a:hover {
  color: #000000;
  /* font-size: 16px; */
}
.service .footer-above-title {
  text-align: right;
}
.service-list {
  display: flex;
  flex-wrap: wrap;
  width: 82px;
}
.service-list li {
  list-style-type: none;
  width: 100%;
  text-align: right;
  margin-bottom: 30px;
  margin-top: 20px;
  line-height: 14px;
}
.service-list li a {
  text-decoration: none;

  font-size: 16px;
  font-weight: 400;
  color: #000000;
  cursor: pointer;
}
.service-list li a:hover {
  color: #000000;
  opacity: 0.8;
}
.footer-bottom {
  padding: 30px 0 0 0;
  border-top: 1px solid #e2e2e2;
  position: relative;
}
.footer-bottom .friendly-links {
  color: #000000;
  line-height: 14px;
  margin-bottom: 20px;
}
.footer-bottom .friendly-links a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 14px;
  margin-right: 30px;
}
.footer-bottom .friendly-links a:hover {
  opacity: 0.8;
}
.footer-bottom .copyright {
  margin-bottom: 20px;
  line-height: 14px;
}
.footer-bottom .copyright .text {
  margin-right: 30px;
  font-size: 12px;
  color: #000000;
  font-weight: 400;
}
.footer-bottom .copyright a.text:hover {
  opacity: 0.8;
}
.footer-bottom .declaration {
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  color: #888888;
  margin-left: -8px;
}
#govIcon {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
