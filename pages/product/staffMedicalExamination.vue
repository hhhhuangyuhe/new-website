<template>
  <div id="staffYearMedicalExamination">
    <img src="@/assets/img/product/yearME/组 封面.png" class="banner" />
    <div class="area area-1">
      <p class="me-title">
        <span>大中型企业</span><span class="orange">员工体检面临的问题</span>
      </p>
      <img class="div-line" src="@/assets/img/product/yearME/分割.png" />
      <div class="main-content">
        <img src="@/assets/img/product/yearME/问题.png" class="question-img" />
        <div class="question">
          <ul>
            <li>分支机构多，单一体检机构网点有限，覆盖城市少；</li>
            <li>企业HR疲于对接不同体检机构与处理员工各种体检问题，费时费力;</li>
            <li>体检流程无法获知，企业难以及时了解每一位员工的体检进度。</li>
          </ul>
          <div class="btn" @click="goPage()">获取服务方案</div>
        </div>
      </div>
    </div>
    <div class="area area-2">
      <img src="@/assets/img/product/yearME/体检bg.png" class="bg-2" />
      <p class="me-title">
        <span>泛员网</span><span class="bpcolor">年度体检</span>
      </p>
      <img class="div-line" src="@/assets/img/product/yearME/组 37.png" />
      <div class="map">
        <p class="line-title">
          覆盖<span class="blue">150+</span>城市
          <span class="blue">450+</span>体检机构
        </p>
        <div class="center">
          <img class="cn-map" src="@/assets/img/product/yearME/地图.png" />
        </div>
        <img class="logos" src="@/assets/img/product/yearME/图层 1641.png" />
        <div class="btn btn-2" @click="goPage()">预约体验</div>
        <div class="des des-1">
          <div class="text">
            <p>整合和对接国内五大主</p>
            <p>流体检机构</p>
          </div>
          <img src="@/assets/img/product/yearME/组 33.png" />
        </div>
        <div class="des des-2">
          <div class="text">
            <p>服务覆盖150+城市</p>
            <p>450+体检门店</p>
          </div>
          <img src="@/assets/img/product/yearME/组 35.png" />
        </div>
        <div class="des des-3">
          <img src="@/assets/img/product/yearME/组 36.png" />
          <div class="text">
            <p>员工可以自主选择城</p>
            <p>市和离家最近的体检</p>
            <p>机构</p>
          </div>
        </div>
      </div>
    </div>
    <div class="area area-3">
      <div class="center-content">
        <p class="line-title">全国统一套餐 高性价比</p>
        <div class="set">
          <div class="set-group set-left">
            <img
              src="@/assets/img/product/yearME/taocan-3 拷贝.png"
              class="set-icon icon-left"
            />
            <div>
              <p>员工体检全国统一套餐，</p>
              <p>统一价格，便于企业体检</p>
              <p>采购和预算管理</p>
            </div>
          </div>
          <div class="d-line"></div>
          <div class="set-group set-right">
            <img
              src="@/assets/img/product/yearME/dijiayouhui 拷贝.png"
              class="set-icon icon-right"
            />
            <div>
              <p>全国体检套餐泛员价低至</p>
              <p class="set-price">300元/人</p>
            </div>
          </div>
        </div>
        <img src="@/assets/img/product/yearME/组 37(1).png" class="set-img" />
        <div class="set-list">
          <div class="set-item">
            <img src="@/assets/img/product/yearME/a1.png" class="set-icon" />
            <div class="words">
              <p class="sm-title">【体检项目】</p>
              <p>包含员工常规体检必查项目</p>
            </div>
          </div>
          <div class="set-item">
            <img src="@/assets/img/product/yearME/a2.png" class="set-icon" />
            <div class="words">
              <p class="sm-title">【体检项目】</p>
              <p>
                常规体检基础上增加耳鼻喉、甲状腺疾病、生殖泌尿系统等项目的筛查
              </p>
            </div>
          </div>
          <div class="set-item">
            <img src="@/assets/img/product/yearME/a3.png" class="set-icon" />
            <div class="words">
              <p class="sm-title">【体检项目】</p>
              <p>
                侧重于颈椎病、甲状腺疾病、基础肿瘤以及女性妇科常规检查等项目的重点筛查
              </p>
            </div>
          </div>
          <div class="set-item">
            <img src="@/assets/img/product/yearME/a4.png" class="set-icon" />
            <div class="words">
              <p class="sm-title">【体检项目】</p>
              <p>
                侧重于乙肝、心脏功能检测（肺炎、尿毒症）、宫颈癌等项目的筛查，同时肿瘤检查项目增加至7种
              </p>
            </div>
          </div>
          <div class="set-item">
            <img src="@/assets/img/product/yearME/a5.png" class="set-icon" />
            <div class="words">
              <p class="sm-title">【体检项目】</p>
              <p>
                在A4的基础上增加心脏病、心、脑血管疾病诊断等项目的筛查，同时肝功能筛查项目增加至7项，肿瘤筛查项目增加至12项
              </p>
            </div>
          </div>
          <div class="set-item">
            <img src="@/assets/img/product/yearME/a6.png" class="set-icon" />
            <div class="words">
              <p class="sm-title">【体检项目】</p>
              <p>
                囊括HPV基因检测、胃部、心、脑血管疾病、甲、乙、丙、戊肝的诊断、骨质疏松以及动脉硬化、糖尿病等重点项目的筛查
              </p>
            </div>
          </div>
        </div>
        <div class="btn btn-3" @click="goPage()">获取套餐详情</div>
      </div>
      <div class="bg-3"></div>
    </div>
    <div class="area area-4">
      <p class="line-title">员工手机端预约体检和查看报告</p>
      <div class="details">
        <div class="pd-details">
          <img src="@/assets/img/product/yearME/对接.png" class="dt-icon" />
          <div>
            <p>泛员网直接对接员工，</p>
            <p>企业无需对接体检机构</p>
          </div>
        </div>
        <div class="pd-details">
          <img src="@/assets/img/product/yearME/预约.png" class="dt-icon" />
          <div>
            <p>员工通过手机端自主预</p>
            <p>约体检时间和体检门店</p>
          </div>
        </div>
        <div class="pd-details">
          <img src="@/assets/img/product/yearME/体检.png" class="dt-icon" />
          <div>
            <p>体检完成1～7工作日，</p>
            <p>自动推送电子体检报告员</p>
            <p>工在手机端接收和查看</p>
          </div>
        </div>
      </div>
      <img src="@/assets/img/product/yearME/组 39.png" class="phone-img" />
      <div class="btn btn-4" @click="goPage()">预约体验</div>
    </div>
    <div class="area area-5">
      <div class="zone-1"></div>
      <div class="zone-2"></div>
      <div class="zone-3"></div>
      <div class="top-zone">
        <p class="line-title">全程在线操作</p>
        <p class="sup-title">企业实时查看员工体检进度</p>
        <div class="main-content">
          <img src="@/assets/img/product/yearME/组 31.png" class="pc-img" />
          <div>
            <div class="tj-group">
              <img
                src="@/assets/img/product/yearME/组 40.png"
                class="ic ic-1"
              />
              <div class="text">
                <p>员工体检流程和重要节点均有自动提醒，</p>
                <p>系统和人工多渠道通知</p>
              </div>
            </div>
            <div class="tj-group">
              <img
                src="@/assets/img/product/yearME/组 40(2).png"
                class="ic ic-2"
              />
              <div class="text">
                <p>企业HR随时查看和掌握每一位员工的体</p>
                <p>检进度</p>
              </div>
            </div>
            <div class="tj-group">
              <img
                src="@/assets/img/product/yearME/组 40(2).png"
                class="ic ic-3"
              />
              <div class="text">
                <p>泛员网客服中心及时跟进和处理员工体检</p>
                <p>相关问题</p>
              </div>
            </div>
          </div>
        </div>
        <div class="btn btn-4" @click="goPage()">预约体验</div>
      </div>
    </div>
    <div class="area area-6">
      <img class="bg-6" src="@/assets/img/product/yearME/图层 17 拷贝 3.png" />
      <img class="bg-7" src="@/assets/img/product/yearME/组 40.png" />
      <div class="m-content">
        <p class="me-title">
          <span>泛员网</span><span class="orange">带来的价值</span>
        </p>
        <img class="div-line" src="@/assets/img/product/yearME/分割.png" />
        <div class="values">
          <div class="our-value">
            <img class="icons" src="@/assets/img/product/yearME/组 40(1).png" />
            <p class="main">HR省心</p>
            <p>为HR解压，随时随地</p>
            <p>及时了解和掌握员工</p>
            <p>体检状态</p>
          </div>
          <div class="our-value">
            <img class="icons" src="@/assets/img/product/yearME/员工.png" />
            <p class="main">员工舒心</p>
            <p>满足员工个性化需求，</p>
            <p>优化的服务让员工有更</p>
            <p>好的体验</p>
          </div>
          <div class="our-value">
            <img
              class="icons"
              src="@/assets/img/product/yearME/企业 拷贝 2.png"
            />
            <p class="main">企业放心</p>
            <p>建立员工和企业健康档</p>
            <p>案，实现员工持续健康</p>
            <p>工作</p>
          </div>
        </div>
        <div class="btn btn-6" @click="goPage()">预约体验</div>
        <p class="me-title">
          <span class="orange">3大实施流程，</span><span>轻松落地服务方案</span>
        </p>
        <img class="div-line" src="@/assets/img/product/yearME/分割.png" />
        <div class="progress">
          <p class="progress-title progress-1">企业沟通阶段</p>
          <p class="progress-title progress-2">实施上线阶段</p>
          <p class="progress-title progress-3">运营保障阶段</p>
          <div class="progress-group progress-group-1">
            <p class="num">01</p>
            <p class="text">需求沟通，商务洽谈</p>
            <p class="num">02</p>
            <p class="text">基于企业现状和问题分析及定制方案</p>
          </div>
          <div class="progress-group progress-group-2">
            <p class="num">03</p>
            <p class="text">双方签署合作协议</p>
            <p class="num">04</p>
            <p class="text">确定体检实施方案及预算</p>
            <p class="num">05</p>
            <p class="text">企业账号开通及人员培训</p>
          </div>
          <div class="progress-group progress-group-3">
            <p class="num">06</p>
            <p class="text">企业将员工信息录入泛员网平台</p>
            <p class="num">07</p>
            <p class="text">平台发信息提醒员工预约并跟踪 体检进度</p>
            <p class="num">08</p>
            <p class="text">企业在平台随时查看所有员工的 体检进度</p>
          </div>
          <div class="progress-group progress-group-4">
            <p class="num">09</p>
            <p class="text">员工手机端预约体检，接收和查 看电子体检报告</p>
            <p class="num">10</p>
            <p class="text">泛员网客服中心响应和处理员工 问题</p>
          </div>
        </div>
        <div class="btn btn-7" @click="goPage()">预约体验</div>
      </div>
    </div>
    <div class="area area-7">
      <p class="me-title">
        <span class="orange">500+</span><span>大中型企业</span
        ><span class="orange">信赖的选择</span>
      </p>
      <img class="div-line" src="@/assets/img/product/yearME/分割.png" />
      <div class="myswiper-container">
        <client-only>
          <swiper
            ref="newSwiper"
            :options="newSwiperOptions"
            class="new-swiper-wrapper"
          >
            <swiper-slide>
              <div class="each-slide">
                <div class="enterprice">
                  <div class="background">
                    <img src="../../assets/img/product/yearME/组 40(5).png" />
                  </div>
                  <div class="enterprice-info">
                    <div class="enterprice-logo">
                      <span class="logo-1">餐饮</span>
                    </div>
                    <p class="enterprice-name">某餐饮管理有限公司</p>
                    <p class="enterprice-title">各地员工年度体检管理案例</p>
                    <p class="enterprice-label">
                      <span class="label label-one">餐饮/住宿</span>
                      <span class="label label-two">年度体检</span>
                    </p>
                    <p class="enterprice-about">
                      通过泛员网体检平台，该公司分布在北京、上海、深圳等城市的500余名员工实现了员工体检全国统一管理，体检费用全国统一价格，员工自主选择城市和体检机构，HR随时查看员工体检进度，做到让企业放心、HR省心、员工舒心。
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="each-slide">
                <div class="enterprice">
                  <div class="background">
                    <img src="../../assets/img/product/yearME/组 40(6).png" />
                  </div>
                  <div class="enterprice-info">
                    <div class="enterprice-logo">
                      <span class="logo-2">建筑</span>
                    </div>
                    <p class="enterprice-name">某地产集团有限 公司</p>
                    <p class="enterprice-title">员工年度体检实施案例</p>
                    <p class="enterprice-label">
                      <span class="label label-one">建筑/房地产</span>
                      <span class="label label-two">年度体检</span>
                    </p>
                    <p class="enterprice-about">
                      采用泛员网实施方案后，该公司员工通过手机端即可自主预约体检时间和门店并自动推送体检报告，HR无需对接体检机构，同时泛员网客服中心及时跟进和处理员工任何问题，保证员工有更好的服务体验。
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="each-slide">
                <div class="enterprice">
                  <div class="background">
                    <img src="../../assets/img/product/yearME/组 40(7).png" />
                  </div>
                  <div class="enterprice-info">
                    <div class="enterprice-logo">
                      <img src="@/assets/img/willDel/logo3.png" />
                    </div>
                    <p class="enterprice-name">某信息技术股份有限公司</p>
                    <p class="enterprice-title">员工体检全线上管理案例</p>
                    <p class="enterprice-label">
                      <span class="label label-one">计算机/互联网</span>
                      <span class="label label-two">年度体检</span>
                    </p>
                    <p class="enterprice-about">
                      HR全流程线上操作，员工手机端自选体检机构并推送电子报告，同时员工体检流程和重要节点均有自动提醒，系统和人工多渠道通知，HR能随时了解和掌握每一位员工的体检进度，实现了该公司高效管理员工体检。
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
      <div class="book" @click="goPage()">预约演示</div>
    </div>
    <div class="area area-8">
      <div class="container">
        <p class="me-title"><span>选择泛员网</span></p>
        <img class="div-line" src="@/assets/img/product/yearME/分割.png" />
        <p class="f-title">拥抱数字化，持续提升人力资源运营效能</p>
        <div class="advantage">
          <div class="advantage-item">
            <img
              class="advantage-icon"
              src="@/assets/img/product/yearME/组 40(14).png"
            />
            <p>HCM SaaS</p>
          </div>
          <div class="advantage-item">
            <img
              class="advantage-icon"
              src="@/assets/img/product/yearME/组 40(15).png"
            />
            <p>全国社保</p>
            <p>外包</p>
          </div>
          <div class="advantage-item">
            <img
              class="advantage-icon"
              src="@/assets/img/product/yearME/组 40(9).png"
            />
            <p>薪酬服务</p>
            <p>外包</p>
          </div>
          <div class="advantage-item">
            <img
              class="advantage-icon"
              src="@/assets/img/product/yearME/组 40(13).png"
            />
            <p>积分福利</p>
          </div>
          <div class="advantage-item">
            <img
              class="advantage-icon"
              src="@/assets/img/product/yearME/组 40(10).png"
            />
            <p>节日福利</p>
          </div>
          <div class="advantage-item">
            <img
              class="advantage-icon"
              src="@/assets/img/product/yearME/组 40(11).png"
            />
            <p>补充医疗</p>
            <p>保险</p>
          </div>
          <div class="advantage-item">
            <img
              class="advantage-icon"
              src="@/assets/img/product/yearME/组 40(12).png"
            />
            <p>年度体检</p>
          </div>
        </div>
        <div class="btn btn-4" @click="goPage()">预约体验</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "fyw",
  head() {
    return {
      title: "员工体检_个人体检_企业员工体检",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "员工体检，个人体检，体检费用，体检项目，体检套餐，企业员工体检",
        },
        {
          hid: "description",
          name: "description",
          content:
            "泛员网员工体检服务，为客户员工精选全国450个城市150家体检机构，支持员工自主选择就近门店、预约体检和查看体检报告，泛员网客服中心提供全流程跟进提醒服务，帮助人力资源轻松管理员工体检，提升员工满意度。",
        },
      ],
    };
  },
  components: {},
  data() {
    return {
      newSwiperOptions: {
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 3,
        spaceBetween: 80,
      },
    };
  },
  methods: {
    goPage() {
      this.$router.push("/fillinginfo");
    },
  },
};
</script>

<style scoped>
.area.area-8 .div-line {
  margin: 30px auto 14px;
}
.area.area-8 .me-title {
  margin: 0;
}
.area.area-8 .me-title span {
  margin: 0;
  color: #fff;
}
.area.area-8 .container {
  width: 1200px;
  margin: 0 auto;
  padding-top: 46px;
}
.area.area-8 .advantage .advantage-item p {
  font-size: 24px;
  font-weight: normal;
  color: #ffffff;
  margin-bottom: 20px;
  line-height: 19px;
}
.area.area-8 .advantage .advantage-item .advantage-icon {
  width: 62px;
  margin-bottom: 23px;
}
.area.area-8 .advantage .advantage-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.area.area-8 .advantage {
  display: flex;
  justify-content: space-between;
}
.area.area-8 .f-title {
  font-size: 22px;
  font-weight: normal;
  color: #ffffff;
  line-height: 21px;
  margin-bottom: 56px;
  text-align: center;
}
.area.area-8 {
  width: 100%;
  height: 500px;
  background: url("../../assets/img/product/yearME/组 40(8).png");
  background-size: cover;
  position: relative;
}
.area.area-7 .book {
  width: 160px;
  height: 50px;
  background: #f3f8ff;
  border: 1px solid #ff8a00;
  border-radius: 25px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
  color: #ff8a00;
  text-align: center;
  line-height: 50px;
  user-select: none;
  cursor: pointer;
}
.area.area-7 .myswiper-container {
  width: 1300px;
  margin: 0 auto;
}
.area.area-7 .myswiper-container .new-swiper-wrapper {
  padding: 0px 0 100px;
}
.area.area-7 .myswiper-container .new-swiper-wrapper .each-slide {
  width: 400px;
  height: 400px;
  background: #ffffff;
}
.enterprice {
  border: 1px solid #eaecf2;
}
.enterprice:hover {
  border: none;
  box-shadow: 0px 10px 30px 0px rgba(126, 141, 174, 0.5);
}
.enterprice .background {
  width: 398px;
  height: 140px;
  background: url("../../assets/img/index/图层 7.png");
  background-size: cover;
}
.enterprice .background img {
  width: 100%;
  /* height: 100%; */
}
.enterprice .enterprice-info {
  padding: 20px 30px 30px;
  position: relative;
  text-align: left;
  background: #fff;
  min-height: 320px;
}
.enterprice .enterprice-info .enterprice-logo {
  width: 80px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 8px 10px 0px rgba(195, 206, 222, 0.3);
  border-radius: 50%;
  position: absolute;
  top: -30px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.enterprice .enterprice-info .enterprice-logo > img {
  width: 60px;
  height: 60px;
}
.enterprice .enterprice-info .enterprice-logo .logo-1 {
  font-size: 24px;
  font-weight: 400;
  color: #f08200;
}
.enterprice .enterprice-info .enterprice-logo .logo-2 {
  font-size: 24px;
  font-weight: 400;
  color: #556fb5;
}
.enterprice .enterprice-info .enterprice-name {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  text-indent: 90px;
  line-height: 14px;
  margin-bottom: 46px;
}
.enterprice .enterprice-info .enterprice-title {
  font-size: 20px;
  line-height: 19px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 20px;
}
.enterprice .enterprice-info .enterprice-label {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 29px;
}
.enterprice .enterprice-info .enterprice-label .label {
  height: 28px;
  line-height: 28px;
  padding: 0px 8px;
  border: 1px solid #ff8a00;
  border-radius: 4px;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 400;
}
.enterprice .enterprice-info .enterprice-label .label.label-one {
  background: #fff6eb;
  border: 1px solid #ff8a00;
  color: #ff8a00;
}
.enterprice .enterprice-info .enterprice-label .label.label-two {
  background: #f5f9ff;
  border: 1px solid #4c80fa;
  color: #4c80fa;
}
.enterprice .enterprice-info .enterprice-about {
  font-size: 16px;
  font-weight: 400;
  color: #555555;
  line-height: 22px;
  word-break: break-all;
  width: 338px;
}

.area.area-7 {
  background: #f3f8ff;
  padding: 50px 0 34px;
}
.area.area-6 .btn.btn-7 {
  margin: 116px auto 80px;
}
.progress-group-1 {
  position: absolute;
  top: 270px;
  left: 120px;
}
.progress-group-2 {
  position: absolute;
  top: 240px;
  left: 436px;
}
.progress-group-3 {
  position: absolute;
  top: 200px;
  left: 680px;
  width: 196px;
}
.progress-group-4 {
  position: absolute;
  top: 190px;
  right: 120px;
  width: 196px;
}
.progress-group .text {
  margin-bottom: 30px;
}
.progress-group .num {
  width: 18px;
  height: 18px;
  display: block;
  background: url("../../assets/img/product/yearME/矩形 910 拷贝 6.png");
  background-size: cover;
  font-size: 16px;
  font-weight: 400;
  color: #313131;
  padding: 2px 0 0 6px;
  margin-bottom: 14px;
}
.area.area-6 .m-content .progress .progress-title.progress-1 {
  top: 76px;
  left: 114px;
}
.area.area-6 .m-content .progress .progress-title.progress-2 {
  top: 40px;
  left: 448px;
}
.area.area-6 .m-content .progress .progress-title.progress-3 {
  top: 0px;
  right: 385px;
}
.area.area-6 .m-content .progress .progress-title {
  font-size: 20px;
  font-weight: normal;
  color: #313131;
  line-height: 20px;
  position: absolute;
}
.area.area-6 .m-content .progress {
  position: relative;
  z-index: 2;
  height: 490px;
}
.area.area-6 .bg-7 {
  position: absolute;
  top: 930px;
  width: 1250px;
  left: 50%;
  transform: translateX(-50%);
}
.line-pic {
  width: 1250px;
  margin: 160px auto 0;
  position: relative;
}
.area.area-6 .btn.btn-6 {
  margin: 80px auto 200px;
}
.area.area-6 .m-content .values .our-value p.main {
  font-size: 26px;
  font-weight: normal;
  color: #5282f0;
  line-height: 26px;
  margin-bottom: 20px;
}
.area.area-6 .m-content .values .our-value p {
  font-size: 14px;
  font-weight: normal;
  color: #313131;
  line-height: 26px;
}
.area.area-6 .m-content .values .our-value .icons {
  width: 100px;
  margin: 0 0 20px 0;
}
.area.area-6 .m-content .values .our-value {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.area.area-6 .m-content .values {
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
}
.area.area-6 .m-content {
  width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.area.area-6 .bg-6 {
  position: absolute;
  top: 20px;
  width: 100%;
}
.area.area-6 {
  position: relative;
}
.tj-group {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  margin-left: 22px;
}
.tj-group .ic {
  width: 43px;
  margin-right: 12px;
}
.tj-group .text {
  font-size: 14px;
  font-weight: normal;
  color: #313131;
  line-height: 30px;
}
.area.area-5 .sup-title {
  margin: 0px auto 94px;
  font-size: 30px;
  font-weight: 400;
  color: #313131;
  text-align: center;
  line-height: 30px;
  margin-top: 16px;
}
.area.area-5 .top-zone {
  position: relative;
  z-index: 2;
  width: 1200px;
  height: 846px;
  padding: 61px 0 0 0;
  margin: 0 auto;
}
.area.area-5 .top-zone .main-content {
  display: block;
  vertical-align: top;
  margin: 94px auto 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.area.area-5 .zone-1 {
  width: 100%;
  height: 339px;
  background-color: #f3f8ff;
  position: absolute;
  top: 0;
  left: 0;
}
.area.area-5 .zone-2 {
  width: 100%;
  height: 319px;
  background-color: #e5f1ff;
  position: absolute;
  top: 339px;
  left: 0;
}
.area.area-5 .zone-3 {
  width: 100%;
  height: 188px;
  background-color: #d9ecff;
  position: absolute;
  top: 658px;
  left: 0;
}
.area.area-5 {
  position: relative;
  width: 100%;
}
.area .btn.btn-4 {
  margin: 0 auto 0;
}
.area.area-4 .phone-img {
  display: block;
  margin: 0 auto 20px;
  vertical-align: top;
}
.area.area-4 .details .pd-details > div p {
  font-size: 14px;
  font-weight: normal;
  color: #434343;
  line-height: 18px;
  text-align: center;
}
.area.area-4 .details .pd-details .dt-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 9px;
}
.area.area-4 .details .pd-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.area.area-4 .details {
  padding: 0 100px;
  display: flex;
  justify-content: space-around;
  margin: 40px 0 20px;
}
.area.area-4 {
  width: 1200px;
  margin: 0 auto;
  padding: 43px 0 40px;
}
.area-3 .bg-3 {
  width: 100%;
  height: 90px;
  background: url("../../assets/img/product/yearME/图层 531.png");
  background-size: cover;
  position: absolute;
  bottom: 0;
  vertical-align: bottom;
}
.area .btn.btn-3 {
  margin: 9px auto 0;
}
.area-3 .set-list .set-item .words .sm-title {
  font-size: 14px;
  font-weight: 400;
  color: #707070;
  line-height: 22px;
}
.area-3 .set-list .set-item .words {
  font-size: 16px;
  font-weight: 400;
  color: #434343;
  line-height: 22px;
  width: 300px;
}
.area-3 .set-list .set-item .set-icon {
  width: 50px;
  margin: 0 22px 0 0;
}
.area-3 .set-list .set-item {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
}
.area-3 .set-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.area-3 .center-content .set-img {
  width: 1185px;
  margin: 0 auto 30px;
  display: block;
}
.area-3 .center-content {
  width: 1200px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
}
.area-3 .set .d-line {
  width: 1px;
  height: 40px;
  background: #7ecef4;
}
.area-3 .set {
  margin: 32px auto 27px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.area-3 .set .set-group {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 50px;
}
.area-3 .set .set-group .icon-left {
  width: 34px;
}
.area-3 .set .set-group .icon-right {
  width: 42px;
}
.area-3 .set .set-group p {
  font-size: 14px;
  font-weight: normal;
  color: #434343;
  line-height: 19px;
  margin-left: 20px;
}
.area-3 .set .set-group p.set-price {
  color: #ff9001;
  font-size: 32px;
  line-height: 32px;
}
.area.area-3 {
  background: #f3f8ff;
  padding: 40px 0 50px;
  position: relative;
}
.map .des-3 {
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 200px;
  right: 137px;
}
.map .des-2 {
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 373px;
  left: 185px;
}
.map .des-1 {
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 150px;
  left: 60px;
}
.map .des .text {
  font-size: 14px;
  font-weight: normal;
  color: #313131;
  line-height: 22px;
  margin: 12px 11px 0 0;
}
.map .des.des-2 .text {
  margin: 0px 11px 20px 0;
}
.map .des.des-3 .text {
  margin: 4px 0 0 10px;
}
.map .des.des-1 .text,
.map .des.des-2 .text {
  text-align: right;
}
.map .logos {
  display: block;
  margin: 0 auto 20px;
  vertical-align: top;
}
.area .btn.btn-2 {
  margin: 46px auto 20px;
}
.map .center {
  width: 100%;
  position: relative;
}
.map .center .cn-map {
  display: block;
  width: 518px;
  margin-top: 20px;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
}
.area-2 .map {
  width: 1200px;
  position: relative;
  background: #ffffff;
  border-radius: 4px 4px 0px 0px;
  padding: 30px 0;
  margin: 0 auto;
}
.area-2 .me-title {
  padding-top: 40px;
  text-shadow: 0px 4px 4px rgba(42, 41, 40, 0.82);
}
.area-2 .me-title span {
  color: #fff;
}
.area-2 .me-title span.bpcolor {
  color: #00fffc;
}
.area .line-title {
  font-size: 30px;
  font-weight: 400;
  color: #313131;
  line-height: 30px;
  text-align: center;
}
.area .line-title .blue {
  color: #4c80fa;
  font-size: 30px;
  font-weight: 400;
  line-height: 30px;
}
.area .line-title::before {
  content: "";
  display: inline-block;
  width: 30px;
  height: 6px;
  background: #4c85ef;
  margin-right: 6px;
  vertical-align: middle;
}
.area .line-title::after {
  content: "";
  display: inline-block;
  width: 30px;
  height: 6px;
  background: #4c85ef;
  margin-left: 6px;
  vertical-align: middle;
}
#staffYearMedicalExamination .banner {
  width: 100%;
  vertical-align: top;
}
#staffYearMedicalExamination .area {
  margin: 0 auto;
  position: relative;
}
#staffYearMedicalExamination .area.area1 {
  width: 1200px;
}
.me-title {
  width: 100%;
  text-align: center;
  line-height: 34px;
  margin-top: 70px;
}
.me-title span {
  font-size: 34px;
  font-weight: bold;
  color: #000000;
}
.me-title .orange {
  color: #f19149;
}
.me-title .bpcolor {
  color: #00fffc;
}
.div-line {
  margin: 30px auto 70px;
  display: block;
}
.main-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.area-1 .question-img {
  width: auto;
  margin-right: 100px;
}
.area-1 .question {
  width: 302px;
}
.area-1 .question ul li {
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: normal;
  color: #535353;
}
.area .btn {
  width: 166px;
  height: 50px;
  background: linear-gradient(69deg, #ff7600 0%, #ff9700 100%);
  box-shadow: 0px 5px 5px 0px rgba(56, 49, 35, 0.23);
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  user-select: none;
  cursor: pointer;
}
.area-2 .bg-2 {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>