<template>
  <div id="aboutUs">
    <img src="../assets/img/aboutus/banner .png" class="banner" />
    <div class="main-container">
      <ul id="nav">
        <li :class="{ active: showingBlock == 1 }" @click="showingBlock = 1">
          关于泛员网
        </li>
        <li :class="{ active: showingBlock == 2 }" @click="showingBlock = 2">
          泛员网安全保障
        </li>
        <li :class="{ active: showingBlock == 3 }" @click="showingBlock = 3">
          联系我们
        </li>
      </ul>
      <div id="block1" v-show="showingBlock == 1">
        <div class="data">
          <div>
            <p><span class="bigFont">500</span>+</p>
            <p>服务大中型企业</p>
          </div>
          <div>
            <p><span class="bigFont">30</span>万+</p>
            <p>服务员工人数</p>
          </div>
          <div>
            <p><span class="bigFont">300</span>+</p>
            <p>落地服务覆盖城市</p>
          </div>
          <div>
            <p>
              <span class="bigFont">{{ getCompanyYear() }}</span
              >年
            </p>
            <p>人力资源外包服务经验</p>
          </div>
        </div>
        <div class="special">
          <div class="textBox">
            <div class="words">
              深圳泛员网网络科技有限公司，是国内领先的人力资源管理数字化服务平台，致力于服务大中型企业和快速成长型企业。成立16年以来，平台逐步完成业务布局，凭借成熟的人力资源数字化运营整体解决方案，为企业提供涵盖员工关系服务、全国社保外包、薪酬核算、薪资代发、考勤与休假、员工体检、补充员工保障、节日福利、积分福利等服务。
            </div>
            <div class="rightContainer">
              <p>
                基于深耕人力资源服务领域多年的深刻洞察和深厚沉淀，深圳泛员网网络科技有限公司以“深度服务员工、激发组织活力”的服务理念，凭借“在线交互、流程可视、对接员工、智能报表、分类协同、实时提醒”六大平台优势，实现流程标准化、服务可视化、操作在线化、数据分析智能化，通过数字化赋能企业人力资源运营转型升级，从根本上提升人力资源运营效能。
              </p>
              <p>
                目前，深圳泛员网网络科技有限公司已在全国范围成立了52+分公司，落地服务覆盖300+城市，与500多家大中型企业建立深度合作，服务员工达30多万，客户涵盖信息技术、金融、通信、工业制造、生物制药、咨询、快消品等行业，为企业提供全面、优质、高效的服务和数字化解决方案，并先后获得“最具潜力人力资源服务机构”、“大中华区人力资源服务机构品牌100强”、“最佳人力资源服务客户满意度奖”等行业荣誉。
              </p>
              <p>
                面向未来，深圳泛员网网络科技有限公司正借助AI、云计算、大数据、生物识别等前沿技术，以人力资源运营为核心，打造“HR
                SaaS+人力资源服务外包+员工福利+HR
                SSC+企业文化”五大产品矩阵，开发更加丰富的人力资源服务应用和解决方案，构建高感知、强体验的人力资源运营交互平台，塑造HR工作智能化、员工体验个性化、企业管理现代化的人力资源运营新生态。
              </p>
              <p>
                拥抱数字化，深圳泛员网网络科技有限公司与客户一起，共启发展新未来！
              </p>
            </div>
          </div>
        </div>
        <div class="qualification">
          <p class="mdTitle" style="margin-bottom: 90px">泛员网资质</p>
          <div class="midBox leftQ">
            <i class="lineHead"></i>
            <p class="qq ql q1">ISO9001国际质量管理体系认证</p>
            <p class="qq qTwo ql q3">
              <span>CMMI 3级认证<br />(软件能力成熟度模型集成)</span>
            </p>
            <p class="qq ql q5">国家高新技术企业</p>
            <p class="qq ql q7">广东省“守合同重信用”企业</p>
            <p class="qq qTwo ql q9">
              <span>广东省人力资源研究会<br />副会长单位</span
              ><i class="final"></i>
            </p>
            <img
              src="../assets/img/aboutus/ISO9001国际质量管理体系认证.png"
              class="p1"
            />
            <img
              src="../assets/img/aboutus/CMMI3等级证书20180831-20210831.png"
              class="p3"
            />
            <img src="../assets/img/aboutus/国高证书.png" class="p5" />
            <img
              src="../assets/img/aboutus/2018年度守合同重信用证书.png"
              class="p7"
            />
            <img
              src="../assets/img/aboutus/QQ图片20191127135106.png"
              class="p9"
            />
          </div>
          <div class="midBox rightQ">
            <p class="qq qr q2">ISO27001信息安全管理体系认证</p>
            <p class="qq qr q4">公安部信息安全等级保护三级</p>
            <p class="qq qr q6">深圳市高新技术企业</p>
            <p class="qq qTwo qr q8">
              <span>深圳市人力资源服务协会<br />副会长单位</span>
            </p>
            <img src="../assets/img/aboutus/ISO27001.png" class="p2" />
            <img
              src="../assets/img/aboutus/公安部信息安全等级保护三级.png"
              class="p4"
            />
            <img
              src="../assets/img/aboutus/深圳市高新技术企业.png"
              class="p6"
            />
            <img
              src="../assets/img/aboutus/4EAF43099D9885FF08D440F255AAD20.png"
              class="p8"
            />
          </div>
        </div>
        <div class="honor">
          <p class="mdTitle" style="margin-bottom: 130px">泛员网荣誉</p>
          <div class="leftB">
            <span class="vert v2019"
              ><i class="ball"></i><i class="chain"></i
              ><span class="yearCard">2019</span></span
            >
            <span class="vert v2017"
              ><i class="ball"></i><i class="chain"></i
              ><span class="yearCard">2017</span></span
            >
            <div class="bbox box2019">
              <img src="../assets/img/aboutus/2019百强榜.png" />
              <p class="bw">入榜大中华区人力资源服务机构品牌100强</p>
              <p class="sw nf">HROOT</p>
              <img src="../assets/img/aboutus/泛员网奖牌.png" />
              <p class="bw">优秀人力资源服务机构</p>
              <p class="sw">广东省人力资源研究会</p>
            </div>
            <div class="bbox box2017">
              <img src="../assets/img/aboutus/2017潜力平台.png" />
              <p class="bw">亚太人力资源服务奖评选获“潜力平台奖”</p>
              <p class="sw nf">亚太人力资源研究院</p>
              <img src="../assets/img/aboutus/2017新锐特别奖.png" />
              <p class="bw">年度新锐特别推荐奖</p>
              <p class="sw nf">人力资源智享会(HREC)</p>
              <img src="../assets/img/aboutus/2017百强榜 .png" />
              <p class="bw">全球人力资源服务机构100强</p>
              <p class="sw nf">HROOT</p>
              <img src="../assets/img/aboutus/2017领军企业.png" />
              <p class="bw">人力资源服务行业“领军企业奖”</p>
              <p class="sw">深圳市人力资源服务协会</p>
            </div>
          </div>
          <div class="rightB">
            <span class="vert v2018"
              ><span class="yearCard">2018</span><i class="chain"></i
              ><i class="ball"></i
            ></span>
            <span class="vert v2016"
              ><span class="yearCard">2016</span><i class="chain"></i
              ><i class="ball"></i
            ></span>
            <span class="vert v2015"
              ><span class="yearCard">2015</span><i class="chain"></i
              ><i class="ball"></i
            ></span>
            <div class="bbox box2018">
              <img src="../assets/img/aboutus/最具潜力.png" />
              <p class="bw">
                连续两年荣获大中华区&nbsp&nbsp"最具潜力人力资源服务机构"
              </p>
              <p class="sw nf">2018年，2017年，HROOT</p>
              <img src="../assets/img/aboutus/2016百强榜.png" />
              <p class="bw">连续三年入榜大中华区人力资源服务机构品牌100强</p>
              <p class="sw nf">2018年，2017年，2016年，HROOT</p>
              <img src="../assets/img/aboutus/2018新产品奖.png" />
              <p class="bw">亚太人力资源服务奖评选获“新产品奖”</p>
              <p class="sw">亚太人力资源研究院</p>
            </div>
            <div class="bbox box2016">
              <img src="../assets/img/aboutus/12强.png" />
              <p class="bw">薪酬管理和外包服务机构12强</p>
              <p class="sw">人力资源智享会(HREC) 拷贝</p>
            </div>
            <div class="bbox box2015">
              <img src="../assets/img/aboutus/2015客户满意度奖.png" />
              <p class="bw">最佳人力资源服务客户满意度奖</p>
              <p class="sw">第一资源</p>
            </div>
          </div>
        </div>
      </div>
      <div id="block2" v-show="showingBlock == 2">
        <div class="box">
          <div class="b1">
            <img src="../assets/img/aboutus/矢量智能对象1.png" />
            <p class="tt">信息安全合规</p>
            <div class="dcContent">
              <p>· ISO27001安全认证</p>
              <p>· 公安部信息安全等级保护三级</p>
              <p>· 全国互联网安全平台联网备案</p>
              <p>· 堡垒机运维审计</p>
              <p>· 数据安全审计</p>
            </div>
          </div>
          <div class="b2">
            <img src="../assets/img/aboutus/矢量智能对象2.png" />
            <p class="tt">防渗透与攻击</p>
            <div class="dcContent">
              <p>· 防DDoS/CC</p>
              <p>· WAF防火墙</p>
              <p>· 态势感知监控</p>
              <p>· 第三方白帽安全众测</p>
            </div>
          </div>
          <div class="b3">
            <img src="../assets/img/aboutus/矢量智能对象3.png" />
            <p class="tt">数据传输与存储加密</p>
            <div class="dcContent">
              <p>· 全网SSL加密传输</p>
              <p>· AES256位加密</p>
              <p>· 碎片化存储</p>
              <p>· 阿里云支撑与防护</p>
            </div>
          </div>
        </div>
      </div>
      <div id="block3" v-show="showingBlock == 3">
        <div class="top">
          <img
            src="../assets/img/aboutus/map3.jpg"
            class="map"
            style="height: auto"
          />
          <div class="card">
            <p class="t1">Contact&nbsp&nbsp&nbsp&nbspUs</p>
            <p class="bdbor"></p>
            <p class="quu">公司总部</p>
            <p class="address">深圳市福田区泰然六路50号红松大厦A座9BD</p>
            <div class="contact contactn">
              <p>全国服务热线：400-0909-388</p>
              <p>合作热线：0755-8250-4488-811</p>
              <p>投诉专线：0755-8250-4488-897</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "fyw",
  data() {
    return {
      showingBlock: 1,
    };
  },
  methods: {
    getCompanyYear() {
      var date = new Date();
      return date.getFullYear() - 2004;
    },
  },
};
</script>

<style scoped>
@import url(../assets/aboutUs.css);
#aboutUs .banner {
  width: 100%;
  vertical-align: top;
}
.main-container {
  margin: 0 auto;
}
#aboutUs #nav {
  width: 900px;
  height: 80px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(226, 226, 226, 1);
  border-radius: 6px;
  margin: -40px auto 0;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 95px;
  align-items: center;
}
#aboutUs #nav li {
  list-style-type: none;
  font-size: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
  height: 80px;
  line-height: 80px;
}
#aboutUs #nav li.active {
  border-bottom: 4px solid #fb8c0a;
  /* height: 76px; */
}
</style>