<template>
  <div id="index-page">
    <div id="index-swiper">
      <div class="adv bone" v-if="!clientEnter">
        <img src="@/assets/img/index/banner.png" class="adv" />
      </div>
      <client-only>
        <swiper ref="indexSwiper" :options="indexSwiperOptions">
          <swiper-slide v-for="(item, index) in banner_list" :key="index">
            <img
              :src="item.imgPath"
              class="adv"
              @click="goToLink(item.targetLink)"
            />
          </swiper-slide>
        </swiper>
      </client-only>
      <div class="swiper-btn prev-btn" @click="viewPrev"></div>
      <div class="swiper-btn next-btn" @click="viewNext"></div>
      <div class="linkin" v-show="clientEnter">
        <ul>
          <li
            :class="{ active: activeLinkin == 1 }"
            @mouseenter="activeLinkin = 1"
          >
            <p class="row-one">
              <img src="../assets/img/index/云管理.png" class="linkin-icon" />
              <span>HCM SaaS</span>
            </p>
            <p class="row-two">企业数字化管理云服务平台</p>
          </li>
          <li
            :class="{ active: activeLinkin == 2 }"
            @mouseenter="activeLinkin = 2"
          >
            <nuxt-link to="/product/pointsBenefit">
              <p class="row-one">
                <img src="../assets/img/index/积分.png" class="linkin-icon" />
                <span>积分福利</span>
              </p>
              <p class="row-two">激发组织活力，降低财税压力</p>
            </nuxt-link>
          </li>
          <li
            :class="{ active: activeLinkin == 3 }"
            @mouseenter="activeLinkin = 3"
          >
            <nuxt-link to="/hrreading">
              <p class="row-one">
                <img src="../assets/img/index/HR解读.png" class="linkin-icon" />
                <span>下载《HR解读》</span>
              </p>
              <p class="row-two">专注人力资源管理实践与变革</p>
            </nuxt-link>
          </li>
          <li
            :class="{ active: activeLinkin == 4 }"
            @mouseenter="activeLinkin = 4"
          >
            <nuxt-link to="/information">
              <p class="row-one">
                <img src="../assets/img/index/课堂.png" class="linkin-icon" />
                <span>泛员网云课堂</span>
              </p>
              <p class="row-two">新形势下HR全方位进阶指南</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div id="index-block1" class="index-block">
      <p class="block-title">构建数字化人力资源服务生态</p>
      <div class="pd-pics">
        <div class="pd-group pd-1">
          <img class="static" src="../assets/img/index/组 81.png" />
          <span>组织人事管理</span>
        </div>
        <nuxt-link to="/product/attendanceAndVacation">
          <div
            class="pd-group pd-2"
            @mouseenter="hoverPD = 2"
            @mouseleave="hoverPD = ''"
          >
            <img
              class="static"
              src="../assets/img/index/组 82.png"
              v-show="hoverPD != 2"
            />
            <img
              class="active"
              src="../assets/img/index/组 82悬浮.png"
              v-show="hoverPD == 2"
            />
            <span :class="{ active: hoverPD == 2 }">考勤排班管理</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/product/attendanceAndVacation">
          <div
            class="pd-group pd-3"
            @mouseenter="hoverPD = 3"
            @mouseleave="hoverPD = ''"
          >
            <img
              class="static"
              src="../assets/img/index/组 83.png"
              v-show="hoverPD != 3"
            />
            <img
              class="active"
              src="../assets/img/index/组 83悬浮.png"
              v-show="hoverPD == 3"
            />
            <span :class="{ active: hoverPD == 3 }">休假管理</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/product/nsso">
          <div
            class="pd-group pd-4"
            @mouseenter="hoverPD = 4"
            @mouseleave="hoverPD = ''"
          >
            <img
              class="static"
              src="../assets/img/index/组 84.png"
              v-show="hoverPD != 4"
            />
            <img
              class="active"
              src="../assets/img/index/组 84悬浮.png"
              v-show="hoverPD == 4"
            />
            <span :class="{ active: hoverPD == 4 }">全国社保服务</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/product/payroll">
          <div
            class="pd-group pd-5"
            @mouseenter="hoverPD = 5"
            @mouseleave="hoverPD = ''"
          >
            <img
              class="static"
              src="../assets/img/index/组 85.png"
              v-show="hoverPD != 5"
            />
            <img
              class="active"
              src="../assets/img/index/组 85悬浮.png"
              v-show="hoverPD == 5"
            />
            <span :class="{ active: hoverPD == 5 }">薪酬核算服务</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/product/paySalary">
          <div
            class="pd-group pd-6"
            @mouseenter="hoverPD = 6"
            @mouseleave="hoverPD = ''"
          >
            <img
              class="static"
              src="../assets/img/index/组 86.png"
              v-show="hoverPD != 6"
            />
            <img
              class="active"
              src="../assets/img/index/组 86悬浮.png"
              v-show="hoverPD == 6"
            />
            <span :class="{ active: hoverPD == 6 }">薪资发放服务</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/product/holidayBenefits">
          <div
            class="pd-group pd-7"
            @mouseenter="hoverPD = 7"
            @mouseleave="hoverPD = ''"
          >
            <img
              class="static"
              src="../assets/img/index/组 87.png"
              v-show="hoverPD != 7"
            />
            <img
              class="active"
              src="../assets/img/index/组 87悬浮.png"
              v-show="hoverPD == 7"
            />
            <span :class="{ active: hoverPD == 7 }">节日福利</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/product/staffMedicalExamination">
          <div
            class="pd-group pd-8"
            @mouseenter="hoverPD = 8"
            @mouseleave="hoverPD = ''"
          >
            <img
              class="static"
              src="../assets/img/index/组 88.png"
              v-show="hoverPD != 8"
            />
            <img
              class="active"
              src="../assets/img/index/组 88悬浮.png"
              v-show="hoverPD == 8"
            />
            <span :class="{ active: hoverPD == 8 }">员工体检</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/product/employeeProtection">
          <div
            class="pd-group pd-9"
            @mouseenter="hoverPD = 9"
            @mouseleave="hoverPD = ''"
          >
            <img
              class="static"
              src="../assets/img/index/组 89.png"
              v-show="hoverPD != 9"
            />
            <img
              class="active"
              src="../assets/img/index/组 89悬浮.png"
              v-show="hoverPD == 9"
            />
            <span :class="{ active: hoverPD == 9 }">医疗保险</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/product/pointsBenefit">
          <div
            class="pd-group pd-10"
            @mouseenter="hoverPD = 10"
            @mouseleave="hoverPD = ''"
          >
            <img
              class="static"
              src="../assets/img/index/组 90.png"
              v-show="hoverPD != 10"
            />
            <img
              class="active"
              src="../assets/img/index/组 90悬浮.png"
              v-show="hoverPD == 10"
            />
            <span :class="{ active: hoverPD == 10 }">员工激励</span>
          </div>
        </nuxt-link>
      </div>
      <div class="know-more" @click="$router.push('/fillinginfo')">
        了解详情
      </div>
    </div>
    <div id="index-block2" class="index-block">
      <p class="block-title">500+大中型企业信赖的选择</p>
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
                    <img src="../assets/img/willDel/wb1.png" />
                  </div>
                  <div class="enterprice-info">
                    <div class="enterprice-logo">
                      <img src="../assets/img/willDel/logo1.png" />
                    </div>
                    <p class="enterprice-name">某日化公司</p>
                    <p class="enterprice-title">全国社保数字化管理案例</p>
                    <p class="enterprice-label">
                      <span class="label label-one">快消行业/化妆品</span>
                      <span class="label label-two">全国社保外包</span>
                    </p>
                    <p class="enterprice-about">
                      采用泛员网实施方案后，全公司分布全国的5360余名员工已实现社保统一管理，员工参保线上操作，流程进度追踪可视，各地社保政策及时维护提醒，避免了社保漏停漏缴等风险，有效提升人力资源运营效率
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="each-slide">
                <div class="enterprice">
                  <div class="background">
                    <img src="../assets/img/willDel/wb2.png" />
                  </div>
                  <div class="enterprice-info">
                    <div class="enterprice-logo">
                      <img src="../assets/img/willDel/logo2.png" />
                    </div>
                    <p class="enterprice-name">某科技通信公司</p>
                    <p class="enterprice-title">节日福利管理案例</p>
                    <p class="enterprice-label">
                      <span class="label label-one">通信/电力</span>
                      <span class="label label-two">节日福利</span>
                    </p>
                    <p class="enterprice-about">
                      通过泛员网福利平台，1人管理全国员工年节福利，1天完成所有员工福利发放，员工自由兑换节日福利寄送到家，有效提升人力部门福利实施效果，员工满意度大幅提升。
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="each-slide">
                <div class="enterprice">
                  <div class="background">
                    <img src="../assets/img/willDel/wb3.jpg" />
                  </div>
                  <div class="enterprice-info">
                    <div class="enterprice-logo">
                      <img src="../assets/img/willDel/logo3.png" />
                    </div>
                    <p class="enterprice-name">某互联网公司</p>
                    <p class="enterprice-title">弹性福利实施案例</p>
                    <p class="enterprice-label">
                      <span class="label label-one">互联网/计算机</span>
                      <span class="label label-two">积分福利</span>
                    </p>
                    <p class="enterprice-about">
                      企业通过积分将福利形式扩展到加班补贴、全勤奖励、组内激励，项目创新等各类组织文化建设场景，HR全程线上操作，福利管理简单高效；360°全覆盖消费场景，满足员工个性化需求；多场景扩展应用，实现员工保障到激励的有效延伸
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
      <div class="details">
        <a class="details-btn details-more">查看更多行业案例</a>
        <a
          class="details-btn details-show"
          @click="$router.push('/fillinginfo')"
          >预约演示</a
        >
      </div>
    </div>
    <div id="index-block3" class="index-block">
      <div class="customer-wall">
        <div class="industry">
          <p class="block-title">泛员网正在服务这些行业的员工</p>
          <div class="industry-list">
            <div class="industry-item">
              <img src="../assets/img/index/物流.png" class="industry-icon" />
              <span class="industry-name">物流行业</span>
            </div>
            <div class="industry-item">
              <img src="../assets/img/index/金融.png" class="industry-icon" />
              <span class="industry-name">金融行业</span>
            </div>
            <div class="industry-item">
              <img src="../assets/img/index/快消.png" class="industry-icon" />
              <span class="industry-name">快消行业</span>
            </div>
            <div class="industry-item">
              <img src="../assets/img/index/汽车.png" class="industry-icon" />
              <span class="industry-name">汽车行业</span>
            </div>
            <div class="industry-item">
              <img src="../assets/img/index/化工.png" class="industry-icon" />
              <span class="industry-name">化工行业</span>
            </div>
            <div class="industry-item">
              <img src="../assets/img/index/酒店.png" class="industry-icon" />
              <span class="industry-name">地产行业</span>
            </div>
            <div class="industry-item">
              <img src="../assets/img/index/制造.png" class="industry-icon" />
              <span class="industry-name">制造行业</span>
            </div>
            <div class="industry-item">
              <img src="../assets/img/index/服务.png" class="industry-icon" />
              <span class="industry-name">服务行业</span>
            </div>
            <div class="industry-item">
              <img
                src="../assets/img/index/卫星地图.png"
                class="industry-icon"
              />
              <span class="industry-name">高科技行业</span>
            </div>
            <div class="industry-item">
              <img src="../assets/img/index/医药箱.png" class="industry-icon" />
              <span class="industry-name">医药行业</span>
            </div>
            <div class="industry-item">
              <img src="../assets/img/index/酒店.png" class="industry-icon" />
              <span class="industry-name">酒店行业</span>
            </div>
            <div class="industry-item">
              <img src="../assets/img/index/互联网.png" class="industry-icon" />
              <span class="industry-name">互联网行业</span>
            </div>
          </div>
          <p class="customer-number">
            月度服务员工
            <span class="num">30</span>万+
          </p>
        </div>
        <div class="customer-logo">
          <div class="logo-wrap">
            <div class="logo-odd">
              <img src="../assets/img/index/logo 1.png" class="logo-img" />
              <img src="../assets/img/index/logo 1.png" class="logo-img" />
            </div>
            <div class="logo-even">
              <img src="../assets/img/index/logo 2.png" class="logo-img" />
              <img src="../assets/img/index/logo 2.png" class="logo-img" />
            </div>
            <div class="logo-odd">
              <img src="../assets/img/index/logo 3.png" class="logo-img" />
              <img src="../assets/img/index/logo 3.png" class="logo-img" />
            </div>
            <div class="logo-even">
              <img src="../assets/img/index/logo 4.png" class="logo-img" />
              <img src="../assets/img/index/logo 4.png" class="logo-img" />
            </div>
            <div class="logo-odd">
              <img src="../assets/img/index/logo 5.png" class="logo-img" />
              <img src="../assets/img/index/logo 5.png" class="logo-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="index-block4" class="index-block">
      <p class="block-title">HR智汇</p>
      <div class="block-content">
        <div class="wall">
          <img
            :class="{ hovering: hoverWallOne }"
            src="../assets/img/index/图层 876.png"
            @mouseenter="wallDetails(1)"
          />
          <nuxt-link
            class="hover-shadow"
            v-show="hoverWallOne"
            :class="{ gd: changeWallOne }"
            @mouseleave="leaveDetails(1)"
            to="/hrreading"
          >
            <span>了解详情</span>
            <span class="about"></span>
          </nuxt-link>
        </div>
        <div class="wall">
          <img
            :class="{ hovering: hoverWallTwo }"
            src="../assets/img/index/行业白皮书.png"
            @mouseenter="wallDetails(2)"
          />
          <div
            class="hover-shadow"
            v-show="hoverWallTwo"
            :class="{ gd: changeWallTwo }"
            @mouseleave="leaveDetails(2)"
          >
            <span>了解详情</span>
            <span class="about"></span>
          </div>
        </div>
        <div class="info-box">
          <div
            class="info-list"
            v-for="item in fydt"
            :key="item._id"
            @click="
              $router.push({
                path: '/information/inner',
                query: { id: item._id, cateId: item._categoryid },
              })
            "
          >
            <img :src="item._newimgurl" class="item-img" />
            <div class="item-detail">
              <p class="item-title">{{ item._title }}</p>
              <p class="item-time">{{ item._summary }}</p>
            </div>
          </div>
          <nuxt-link class="info-more" to="/information">查看更多</nuxt-link>
        </div>
      </div>
    </div>
    <div id="index-block5" class="index-block">
      <span class="go" @click="$router.push('/fillinginfo')">立即进入</span>
      <span class="number">400-0909-388</span>
    </div>
  </div>
</template>

<script>
export default {
  layout: "fyw",
  components: {},
  async asyncData({ app, query }) {
    let indexData = await app.$axios.get(`/api/NewActive/IndexData`);
    let banner_data = await app.$axios({
      method: "post",
      url: `https://api.fanyuanwang.cn/api/AdIMG/GetPictureList`,
      data: JSON.stringify([10]),
      headers: { "content-type": "application/json; charset=utf-8" },
    });
    return {
      allData: indexData.data,
      banner_list: banner_data.data.executeResult,
    };
  },
  computed: {
    swiper() {
      return this.$refs.indexSwiper.$swiper;
    },
  },
  mounted() {
    let fydt_orign =
      this.allData.hasOwnProperty("fydt") && this.allData.fydt.length > 0
        ? this.allData.fydt.slice(0, 3)
        : [];
    fydt_orign.forEach((item) => {
      item._newimgurl = item._imgurl.replace(/https:/g, "http:");
    });
    this.fydt = fydt_orign;
    this.clientEnter = true;
  },
  methods: {
    goToLink(targetLink) {
      if (targetLink != "") {
        window.location.href = targetLink;
      }
    },
    goPath(i) {
      if (i.targetLink != undefined && i.targetLink != "") {
        window.open(i.targetLink);
      }
    },
    viewPrev() {
      this.swiper.slidePrev();
    },
    viewNext() {
      this.swiper.slideNext();
    },
    wallDetails(f) {
      if (f == 1) {
        this.hoverWallOne = true;
        setTimeout(() => {
          this.changeWallOne = true;
        }, 20);
      } else if (f == 2) {
        this.hoverWallTwo = true;
        setTimeout(() => {
          this.changeWallTwo = true;
        }, 20);
      }
    },
    leaveDetails(f) {
      if (f == 1) {
        this.changeWallOne = false;
        setTimeout(() => {
          this.hoverWallOne = false;
        }, 20);
      } else if (f == 2) {
        this.changeWallTwo = false;
        setTimeout(() => {
          this.hoverWallTwo = false;
        }, 20);
      }
    },
    clickBanner(i) {
      console.log(i);
      if (i && i.link) {
        this.$router.push(i.link);
      }
    },
  },
  data() {
    return {
      banner_list: [],
      activeLinkin: 1,
      clientEnter: false,
      bannerList: [
        // {
        //   id: 0,
        //   img: require("@/assets/img/index/活动海报-新官网网址banner图-1022.jpg"),
        //   link: "/information/inner?id=24&cateId=10000",
        // },
        {
          id: 1,
          img: require("@/assets/img/index/banner.png"),
        },
        {
          id: 2,
          img: require("@/assets/img/index/banner5.jpg"),
          link: "/product/pointsBenefit",
        },
        {
          id: 3,
          img: require("@/assets/img/index/泛员网网站体检banner3.jpg"),
          link: "/product/staffMedicalExamination",
        },
      ],
      indexSwiperOptions: {
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
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
      hoverPD: "",
      // HR智汇
      hoverWallOne: false,
      changeWallOne: false,
      hoverWallTwo: false,
      changeWallTwo: false,
      fydt: [],
    };
  },
};
</script>

<style scoped>
#index-swiper {
  position: relative;
  width: 100%;
}
#index-swiper .swiper-btn {
  background: url(../assets/img/index/banner_arrow.png) no-repeat left top;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  color: #fff;
  width: 70px;
  height: 70px;
  cursor: pointer;
}
#index-swiper .swiper-btn.prev-btn {
  left: 100px;
}
#index-swiper .swiper-btn.next-btn {
  right: 100px;
  background: url(../assets/img/index/banner_arrow.png) no-repeat left bottom;
}
.linkin {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 160px;
  background: rgba(27, 27, 27, 0.5);
  z-index: 1;
}
.linkin ul {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  height: inherit;
}
.linkin ul li {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  cursor: pointer;
}
.linkin ul li a {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.linkin ul li.active {
  background: rgba(27, 27, 27, 0.8);
}
.linkin ul li .row-one {
  display: flex;
  align-items: center;
  line-height: 26px;
}
.linkin ul li .row-one span {
  color: #ffffff;
  font-weight: 300;
  font-size: 26px;
}
.linkin ul li .row-two {
  font-size: 14px;
  font-family: Source Han Sans SC;
  font-weight: 300;
  color: #ffffff;
  opacity: 0.6;
  margin-top: 20px;
}
.linkin-icon {
  height: 26px;
  margin-right: 10px;
}
#index-swiper .adv {
  width: 100%;
  vertical-align: bottom;
}
#index-swiper .adv.bone {
  height: 100vh;
}
.index-block {
  margin: 0 auto;
  text-align: center;
}
.block-title {
  font-size: 36px;
  font-weight: bold;
  color: #000000;
  line-height: 35px;
}
#index-block1 {
  width: 1200px;
  padding: 80px 0 50px;
}
#index-block1 .pd-pics {
  width: 900px;
  height: 570px;
  margin: 20px auto;
  background: url("../assets/img/index/组70_2.png");
  background-size: cover;
  position: relative;
}
#index-block1 .pd-pics .pd-group {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
#index-block1 .pd-pics .pd-group img {
  width: 35px;
  cursor: pointer;
}
#index-block1 .pd-pics .pd-group img.active {
  width: 70px;
  margin-bottom: -18px;
}
#index-block1 .pd-pics .pd-group span {
  font-size: 14px;
  color: #4c80fa;
  margin-top: 10px;
}
#index-block1 .pd-pics .pd-group span.active {
  font-weight: bold;
}
.pd-group.pd-1 {
  bottom: 104px;
  left: 155px;
}
.pd-group.pd-2 {
  bottom: 190px;
  left: 145px;
}
.pd-group.pd-3 {
  bottom: 272px;
  left: 208px;
}
.pd-group.pd-4 {
  bottom: 338px;
  left: 268px;
}
.pd-group.pd-5 {
  bottom: 372px;
  left: 357px;
}
.pd-group.pd-6 {
  bottom: 372px;
  left: 462px;
}
.pd-group.pd-7 {
  bottom: 338px;
  right: 285px;
}
.pd-group.pd-8 {
  bottom: 271px;
  right: 216px;
}
.pd-group.pd-9 {
  bottom: 190px;
  right: 162px;
}
.pd-group.pd-10 {
  bottom: 104px;
  right: 168px;
}
#index-block1 .know-more {
  width: 180px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  border-radius: 24px;
  background: linear-gradient(to right, #ff7500, #ff9900);
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.2s ease-out;
  user-select: none;
}
#index-block1 .know-more:hover {
  transform: translateY(-2%);
  background: linear-gradient(to right, #e86a00, #f79300);
}
#index-block2 {
  background: #f3f8ff;
  padding: 50px 0;
  position: relative;
}
#index-block2 .myswiper-container {
  width: 1300px;
  /* height: 530px; */
  /* margin: 50px auto 80px; */
  margin: 0 auto;
}
#index-block2 .myswiper-container .new-swiper-wrapper {
  padding: 50px 0 100px;
}
#index-block2 .myswiper-container .new-swiper-wrapper .each-slide {
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
  background: url("../assets/img/index/图层 7.png");
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
#index-block2 .details {
  display: flex;
  align-items: center;
  justify-content: center;
}
#index-block2 .details .details-btn {
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  border-radius: 25px;
  font-size: 20px;
  font-weight: 400;
  display: block;
  transition: all 0.2s ease-out;
}
#index-block2 .details .details-btn.details-more {
  width: 220px;
  height: 50px;
  background: #f3f8ff;
  border: 1px solid #a5b3c4;
  color: #6d8099;
  margin-right: 30px;
  user-select: none;
}
#index-block2 .details .details-btn.details-more:hover {
  background: #6d8099;
  color: #f3f8ff;
  transform: translateY(-2%);
}
#index-block2 .details .details-btn.details-show {
  width: 160px;
  height: 50px;
  background: #f3f8ff;
  border: 1px solid #ff8a00;
  color: #ff8a00;
  user-select: none;
}
#index-block2 .details .details-btn.details-show:hover {
  background: #ff8a00;
  color: #f3f8ff;
  transform: translateY(-2%);
}
#index-block3 {
  width: 100%;
  height: 720px;
  padding: 100px 0;
}
#index-block3 .customer-wall {
  width: 1200px;
  height: 520px;
  padding: 30px 0;
  margin: 0 auto;
  background: url("../assets/img/index/BG.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#index-block3 .customer-wall .industry {
  width: 504px;
  height: 460px;
}
#index-block3 .customer-wall .block-title {
  margin: 50px 0 30px;
}
#index-block3 .customer-wall .customer-number {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  line-height: 32px;
  position: relative;
}
#index-block3 .customer-wall .customer-number .num {
  font-size: 48px;
  font-weight: bold;
  color: #000000;
  position: relative;
  top: 2px;
}
#index-block3 .customer-wall .customer-logo {
  width: 620px;
  height: 460px;
  background: #ffffff;
  box-shadow: 0px 10px 30px 0px rgba(126, 141, 174, 0.5);
  padding: 45px 55px;
  position: relative;
  overflow: hidden;
  font-size: 0;
}
.customer-logo .logo-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  font-size: 0;
}
.customer-logo .logo-odd {
  width: 5700px;
  -webkit-animation: scrollToRight 42s linear infinite;
  animation: scrollToRight 42s linear infinite;
  margin-bottom: 30px;
}
.customer-logo .logo-even {
  width: 5700px;
  -webkit-animation: scrollToRight 38s linear infinite;
  animation: scrollToRight 38s linear infinite;
  margin-bottom: 30px;
}
@-webkit-keyframes scrollToRight {
  from {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0%, 0, 0);
    transform: translate3d(0%, 0, 0);
  }
}
@keyframes scrollToRight {
  from {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0%, 0, 0);
    transform: translate3d(0%, 0, 0);
  }
}
@keyframes scrollToRight {
  from {
    -webkit-transform: translate3d(-50%, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0%, 0, 0);
  }
}
.customer-logo .logo-img {
  width: calc(50% - 33px);
  display: inline-block;
  vertical-align: bottom;
  margin-right: 30px;
}
.industry-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 10px;
  padding: 0 30px;
}
.industry-list .industry-item {
  width: 33.3%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.industry-list .industry-item:nth-child(3n-1) {
  justify-content: center;
}
.industry-list .industry-item:nth-child(3n) {
  justify-content: flex-end;
}
.industry-list .industry-item .industry-icon {
  height: 26px;
  margin-right: 10px;
}
.industry-list .industry-item .industry-name {
  font-size: 16px;
  font-weight: 400;
  color: #38424f;
}
#index-block4 {
  width: 100%;
  height: 680px;
  background: url("../assets/img/index/BG(1).png");
  background-size: cover;
  padding: 100px 0;
}
#index-block4 .block-content {
  width: 1200px;
  margin: 50px auto 0;
  display: flex;
  /* align-items: center; */
}
#index-block4 .block-content .wall {
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  margin-right: 75px;
  background: #fff;
  overflow: hidden;
}
#index-block4 .block-content .wall img {
  width: 260px;
  height: 346px;
  vertical-align: bottom;
  position: absolute;
  top: 27px;
  left: 20px;
  cursor: pointer;
  transition: all 0.5s;
}
#index-block4 .block-content .wall img.hovering {
  transform: scale(1.1538);
}
#index-block4 .block-content .wall .hover-shadow {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  transition: all 1s;
  opacity: 0;
}
#index-block4 .block-content .wall .hover-shadow.gd {
  opacity: 1;
}
#index-block4 .block-content .wall .hover-shadow span {
  font-size: 28px;
  font-weight: 400;
  color: #ffffff;
}
#index-block4 .block-content .wall .hover-shadow .about {
  width: 36px;
  height: 36px;
  background: url("../assets/img/index/了解详情.png");
  background-size: cover;
  margin-left: 30px;
}
#index-block4 .block-content .info-box {
  width: 450px;
}
.info-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.info-list .item-detail {
  width: 280px;
  text-align: left;
}
.info-list .item-img {
  width: 150px;
  height: 100px;
  cursor: pointer;
}
.info-box .info-more {
  font-size: 14px;
  font-weight: 400;
  color: #4f81f5;
  width: 100px;
  height: 28px;
  border: 1px solid #4f81f5;
  border-radius: 14px;
  text-align: center;
  line-height: 28px;
  position: relative;
  margin: 0 0 0 auto;
  cursor: pointer;
  display: block;
}
.info-box .info-more::after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 10px;
  margin: 0 -8px 0 8px;
  background: url("../assets/img/index/全部.png");
}
.info-list .item-detail .item-title {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 16px;
  cursor: pointer;
}
.info-list .item-detail .item-time {
  font-size: 14px;
  font-weight: 400;
  color: #888888;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: 20px;
  line-height: 16px;
}
#index-block5 {
  width: 100%;
  height: 500px;
  position: relative;
  background: url("../assets/img/index/未来 已在眼前.png");
  background-size: cover;
}
#index-block5 .go {
  display: block;
  position: absolute;
  width: 160px;
  height: 50px;
  background: #ffffff;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  font-weight: 400;
  color: #1457f5;
  bottom: 113px;
  left: 50%;
  cursor: pointer;
  transition: all 0.2s ease-out;
  user-select: none;
}
#index-block5 .go:hover {
  transform: translateY(-2%);
  opacity: 0.85;
}
#index-block5 .number {
  display: block;
  position: absolute;
  width: 200px;
  height: 50px;
  background: #2c6df8;
  border: 2px solid #ffffff;
  border-radius: 25px;
  text-align: center;
  line-height: 46px;
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  bottom: 113px;
  left: calc(50% + 200px);
}
@media screen and (min-width: 1440px) {
  .linkin {
    height: 160px;
  }
  .linkin ul {
    width: 1366px;
  }
}
@media screen and (min-width: 1366px) and (max-width: 1439px) {
  .linkin {
    height: 130px;
  }
  #index-block1 {
    padding: 70px 0;
  }
  #index-block4 {
    padding: 70px 0;
    /* height: 484px; */
  }
  #index-swiper .adv {
    height: 555px;
  }
  .linkin ul {
    width: 1300px;
  }
}
</style>
