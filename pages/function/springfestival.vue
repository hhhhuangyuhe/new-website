<template>
  <div id="springfestival">
    <img src="@/assets/img/function/春节/矩形 744@2x.png" class="topImg" />
    <div class="setsGalaryContainer">
      <div class="setsGalary">
        <div class="setsSummary">
          <div class="setsDescribe">
            <span>7档标准套餐:</span>
            <div>
              <p class="sdw">
                每档套餐提供20-40款礼品，高档位可拆分兑换低档位中的礼品；
              </p>
              <p class="sdw">员工N选1自主兑换，礼品寄送到家。</p>
            </div>
          </div>
          <div class="setsAdvantage">
            <div class="setsAdvantageBlock">
              <img
                src="@/assets/img/function/春节/形状 19.png"
                class="advantageIcon"
              />
              <div class="advantageDetail">
                <p class="advantageTitle">性价比高</p>
                <p class="advantageDesc">
                  正品保障，兑换的实物价格低于主流电商价
                </p>
              </div>
            </div>
            <div class="setsAdvantageBlock block2">
              <img
                src="@/assets/img/function/春节/形状 20.png"
                class="advantageIcon"
              />
              <div class="advantageDetail">
                <p class="advantageTitle">选择多样</p>
                <p class="advantageDesc">
                  整合各大电商资源，礼品涵盖食品生鲜、家电数码、居家生活、个护美妆等品类
                </p>
              </div>
            </div>
            <div class="setsAdvantageBlock block3">
              <img
                src="@/assets/img/function/春节/形状 21.png"
                class="advantageIcon"
              />
              <div class="advantageDetail">
                <p class="advantageTitle">售后无忧</p>
                <p class="advantageDesc">
                  泛员网客服中心及时处理员工各种售后问题
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="setsList">
          <div class="setItem">
            <img src="@/assets/img/function/春节/组 31.png" class="setIcon" />
            <div class="setDetails">
              <p class="setName">春节福利套餐100元</p>
              <p class="items">三只松鼠 坚果礼盒1073g</p>
              <p class="items">名物 罗尔仕进口压榨亚麻籽油1L</p>
              <p class="items">来伊份 伊份吉祥零食礼包920g</p>
              <p class="items">洁丽雅雅致毛巾三件套礼盒</p>
              <p class="items">中粮 福临门南府金香5kg</p>
              <p class="items">……</p>
              <div class="setBtns">
                <div class="setBtn checkDetails" @click="goGoodsDetails">
                  查看详情
                </div>
                <div class="setBtn consult" @click="MoNiClick">立即咨询</div>
              </div>
            </div>
            <div class="tag">N选1</div>
          </div>
          <div class="setItem">
            <img src="@/assets/img/function/春节/15.png" class="setIcon" />
            <div class="setDetails">
              <p class="setName">春节福利套餐150元</p>
              <p class="items">斯里兰卡惜兰红茶礼盒200g</p>
              <p class="items">路易卡罗 亲肤棉婉约四件套</p>
              <p class="items">荣事达 4.0L空气加湿器</p>
              <p class="items">漫威 运动旅行包</p>
              <p class="items">又见美物 温暖三件套礼盒</p>
              <p class="items">……</p>
              <div class="setBtns">
                <div class="setBtn checkDetails" @click="goGoodsDetails">
                  查看详情
                </div>
                <div class="setBtn consult" @click="MoNiClick">立即咨询</div>
              </div>
            </div>
            <div class="tag">N选1</div>
          </div>
          <div class="setItem">
            <img src="@/assets/img/function/春节/16.png" class="setIcon" />
            <div class="setDetails">
              <p class="setName">春节福利套餐200元</p>
              <p class="items">金丝莉 鄂尔多斯羊毛床垫</p>
              <p class="items">易威斯堡 记忆碳羽毛球套装</p>
              <p class="items">如意红酒橄榄油礼盒</p>
              <p class="items">伊莱克斯 1.2L电热水壶</p>
              <p class="items">荣事达 分体电火锅</p>
              <p class="items">……</p>
              <div class="setBtns">
                <div class="setBtn checkDetails" @click="goGoodsDetails">
                  查看详情
                </div>
                <div class="setBtn consult" @click="MoNiClick">立即咨询</div>
              </div>
            </div>
            <div class="tag">N选1</div>
          </div>
          <div class="setItem">
            <img src="@/assets/img/function/春节/17.png" class="setIcon" />
            <div class="setDetails">
              <p class="setName">春节福利套餐300元</p>
              <p class="items">法国路易十四 特级(XO)白兰地</p>
              <p class="items">beyond 纯棉亲肤四件套海洋之恋</p>
              <p class="items">Haier海尔 空气净化器</p>
              <p class="items">美的 电饭煲FD4019A</p>
              <p class="items">欧美达 公爵黑晶不粘炒锅</p>
              <p class="items">……</p>
              <div class="setBtns">
                <div class="setBtn checkDetails" @click="goGoodsDetails">
                  查看详情
                </div>
                <div class="setBtn consult" @click="MoNiClick">立即咨询</div>
              </div>
            </div>
            <div class="tag">N选1</div>
          </div>
          <div class="setItem">
            <img src="@/assets/img/function/春节/18.png" class="setIcon" />
            <div class="setDetails">
              <p class="setName">春节福利套餐400元</p>
              <p class="items">魔光球 音乐时光灯台灯A15B</p>
              <p class="items">伊莱克斯 滴漏式咖啡机</p>
              <p class="items">双立人 中片刀砧板两件套</p>
              <p class="items">法国纳达尔庄园红葡萄酒礼盒</p>
              <p class="items">新秀丽 VERCELLI双肩包</p>
              <p class="items">……</p>
              <div class="setBtns">
                <div class="setBtn checkDetails" @click="goGoodsDetails">
                  查看详情
                </div>
                <div class="setBtn consult" @click="MoNiClick">立即咨询</div>
              </div>
            </div>
            <div class="tag">N选1</div>
          </div>
          <div class="setItem">
            <img src="@/assets/img/function/春节/19.png" class="setIcon" />
            <div class="setDetails">
              <p class="setName">春节福利套餐500元</p>
              <p class="items">LOVO 良缘美景全棉斜纹四套件</p>
              <p class="items">美菱 智能扫地机器人SD-07</p>
              <p class="items">美的 家用多功能烤箱25L</p>
              <p class="items">康宁 晶彩透明汤锅3.5L</p>
              <p class="items">素言茶坊 龙井小罐礼盒</p>
              <p class="items">……</p>
              <div class="setBtns">
                <div class="setBtn checkDetails" @click="goGoodsDetails">
                  查看详情
                </div>
                <div class="setBtn consult" @click="MoNiClick">立即咨询</div>
              </div>
            </div>
            <div class="tag">N选1</div>
          </div>
          <div class="setItem">
            <img src="@/assets/img/function/春节/20.png" class="setIcon" />
            <div class="setDetails">
              <p class="setName">春节福利套800元</p>
              <p class="items">DRON戴洛伦家具 纯棉贡缎四件套</p>
              <p class="items">摩飞 700ml破壁料理机</p>
              <p class="items">BOSS 时尚潮流防水男石英腕表</p>
              <p class="items">爱华仕 20寸拉杆箱</p>
              <p class="items">Deslon德世朗 黑森刀具八件套</p>
              <p class="items">……</p>
              <div class="setBtns">
                <div class="setBtn checkDetails" @click="goGoodsDetails">
                  查看详情
                </div>
                <div class="setBtn consult" @click="MoNiClick">立即咨询</div>
              </div>
            </div>
            <div class="tag">N选1</div>
          </div>
        </div>
      </div>
      <img src="@/assets/img/function/春节/矩形 747.png" class="link01" />
    </div>
    <div class="recommend">
      <p class="title">2021春节福利臻选推荐</p>
      <div class="recommendListContainer">
        <div class="recommendList">
          <div class="recommendItem">
            <div class="itemPic">
              <img src="@/assets/img/function/春节/图层 704.png" class="pic" />
            </div>
            <p class="itemName">来伊份 伊份兴旺零食礼包</p>
            <div
              class="itemDetails"
              title="鸭翅70g/草本味核桃180g/开心果100g/碳烧腰果120g/话梅味瓜子150g/牛肉味兰花豆150g/多味花生150g/日式风味小圆饼干（奶盐味）100g/孜然烧烤味锅巴100g/鱿鱼卷100g"
            >
              鸭翅70g/草本味核桃180g/开心果100g/碳烧腰果120g/话梅味瓜子150g/牛肉味兰花豆150g/多味花生150g/日式风味小圆饼干（奶盐味）100g/孜然烧烤味锅巴100g/鱿鱼卷100g
            </div>
            <div class="itemBtn" @click="MoNiClick">立即咨询</div>
          </div>
          <div class="recommendItem">
            <div class="itemPic">
              <img
                src="@/assets/img/function/春节/图层 622 (1).png"
                class="pic"
              />
            </div>
            <p class="itemName">中粮 御福礼粮油礼包</p>
            <div
              class="itemDetails"
              title="百嘉莱PEGALLO进口葵花籽油1000ml/福临门软糯香米500g*2/香雪筋爽饺子粉1kg/可益康高粱米350g/可益康玉米糁350g/悦活澳洲原味燕麦720g/山萃纯正蜂蜜250g/时怡精选新疆大枣（袋装250g）/香雪优选挂面500g"
            >
              百嘉莱PEGALLO进口葵花籽油1000ml/福临门软糯香米500g*2/香雪筋爽饺子粉1kg/可益康高粱米350g/可益康玉米糁350g/悦活澳洲原味燕麦720g/山萃纯正蜂蜜250g/时怡精选新疆大枣（袋装250g）/香雪优选挂面500g
            </div>
            <div class="itemBtn" @click="MoNiClick">立即咨询</div>
          </div>
          <div class="recommendItem">
            <div class="itemPic">
              <img src="@/assets/img/function/春节/图层 623.png" class="pic" />
            </div>
            <p class="itemName">三只松鼠 坚果礼盒</p>
            <div
              class="itemDetails"
              title="纸皮核桃120g/炭烧腰果90g/手剥巴旦120g/开心果100g/碧根果120g/夏威夷果160g/多味花生205g/瓜子仁205g/什锦水果罐头200g/蒜香豌豆 205g/每日红葡萄干120g/悟空小麻花108g"
            >
              纸皮核桃120g/炭烧腰果90g/手剥巴旦120g/开心果100g/碧根果120g/夏威夷果160g/多味花生205g/瓜子仁205g/什锦水果罐头200g/蒜香豌豆
              205g/每日红葡萄干120g/悟空小麻花108g
            </div>
            <div class="itemBtn" @click="MoNiClick">立即咨询</div>
          </div>
          <div class="recommendItem">
            <div class="itemPic">
              <img src="@/assets/img/function/春节/图层 624.png" class="pic" />
            </div>
            <p class="itemName">艾美特 电烤箱CK0801</p>
            <div
              class="itemDetails"
              title="品牌：艾美特 型号：CK0801 三档火力档位调节；合理安排烹制温度"
            >
              品牌：艾美特<br />
              型号：CK0801<br />
              三档火力档位调节；合理安排烹制温度
            </div>
            <div class="itemBtn" @click="MoNiClick">立即咨询</div>
          </div>
          <div class="recommendItem">
            <div class="itemPic">
              <img src="@/assets/img/function/春节/图层 625.png" class="pic" />
            </div>
            <p class="itemName">荣事达 涮烤一体机RS-SK180B1</p>
            <div
              class="itemDetails"
              title="品牌：荣事达 型号：RS-SK180B1 容量: 1.5L"
            >
              品牌：荣事达<br />
              型号：RS-SK180B1<br />
              容量: 1.5L
            </div>
            <div class="itemBtn" @click="MoNiClick">立即咨询</div>
          </div>
          <div class="recommendItem">
            <div class="itemPic">
              <img src="@/assets/img/function/春节/图层 626.png" class="pic" />
            </div>
            <p class="itemName">苏泊尔 电饭煲SF40FD6188</p>
            <div
              class="itemDetails"
              title="品牌：苏泊尔 型号：SF40FD6188 容量：1.7L"
            >
              品牌：苏泊尔<br />
              型号：SF40FD6188<br />
              容量: 1.7L
            </div>
            <div class="itemBtn" @click="MoNiClick">立即咨询</div>
          </div>
          <div class="recommendItem">
            <div class="itemPic">
              <img src="@/assets/img/function/春节/图层 744.png" class="pic" />
            </div>
            <p class="itemName">SKG 颈椎按摩仪4098Plus</p>
            <div
              class="itemDetails"
              title="品牌：SKG 型号：4098 Plus  按摩模式：4种 按摩力度：15档"
            >
              品牌：SKG<br />
              型号：4098 Plus 按摩模式：4种<br />
              按摩力度：15档
            </div>
            <div class="itemBtn" @click="MoNiClick">立即咨询</div>
          </div>
          <div class="recommendItem">
            <div class="itemPic">
              <img src="@/assets/img/function/春节/图层 627.png" class="pic" />
            </div>
            <p class="itemName">美固 车载冷暖箱</p>
            <div
              class="itemDetails"
              title="品牌：美固     型号：T08     容量：8L 功能：制冷最大可低于环境温度15℃，加热最高可至65℃"
            >
              品牌：美固 型号：T08 容量：8L<br />
              功能：制冷最大可低于环境温度15℃，加热最高可至65℃
            </div>
            <div class="itemBtn" @click="MoNiClick">立即咨询</div>
          </div>
          <div class="recommendItem">
            <div class="itemPic">
              <img src="@/assets/img/function/春节/图层 628.png" class="pic" />
            </div>
            <p class="itemName">美的 家用多功能烤箱25L</p>
            <div class="itemDetails" title="品牌：美的 型号：PT25A0 容量：25L">
              品牌：美的<br />
              型号：PT25A0<br />
              容量：25L
            </div>
            <div class="itemBtn" @click="MoNiClick">立即咨询</div>
          </div>
          <div class="recommendItem">
            <div class="itemPic">
              <img src="@/assets/img/function/春节/图层 631.png" class="pic" />
            </div>
            <p class="itemName">LOCK&LOCK乐扣乐扣 3L空气炸锅</p>
            <div
              class="itemDetails"
              title="品牌：乐扣乐扣 材质：PP+不锈钢+ABS 容量：炸锅3.0L，炸篮2.2L"
            >
              品牌：乐扣乐扣<br />
              材质：PP+不锈钢+ABS<br />
              容量：炸锅3.0L，炸篮2.2L
            </div>
            <div class="itemBtn" @click="MoNiClick">立即咨询</div>
          </div>
          <div class="recommendItem">
            <div class="itemPic">
              <img src="@/assets/img/function/春节/图层 630.png" class="pic" />
            </div>
            <p class="itemName">伊莱克斯 1.25L高压咖啡机</p>
            <div
              class="itemDetails"
              title="品牌：伊莱克斯 型号：EGCM700 容量：1.25L"
            >
              品牌：伊莱克斯<br />
              型号：EGCM700<br />
              容量：1.25L
            </div>
            <div class="itemBtn" @click="MoNiClick">立即咨询</div>
          </div>
          <div class="recommendItem">
            <div class="itemPic">
              <img src="@/assets/img/function/春节/图层 629.png" class="pic" />
            </div>
            <p class="itemName">Haier海尔 扫地机器人TA31</p>
            <div
              class="itemDetails"
              title="品牌：Haier海尔 型号：TA31 工作模式: 清扫+吸尘+干拖"
            >
              品牌：Haier海尔 <br />
              型号：TA31<br />
              工作模式: 清扫+吸尘+干拖
            </div>
            <div class="itemBtn" @click="MoNiClick">立即咨询</div>
          </div>
        </div>
        <img src="@/assets/img/function/春节/矩形 750.png" class="link02" />
        <div class="getPlan" @click="goFillingInfo">获取福利方案</div>
      </div>
    </div>
    <div class="customerBrand">
      <p class="title">品牌丰富，360°覆盖员工消费场景</p>
      <div class="brandDetails">
        <div class="service">
          <img src="@/assets/img/function/春节/组 30.png" class="serviceImg" />
          <div class="words">
            <p>完善的供应商筛选机制和合作多年的供应商资源</p>
          </div>
          <div class="words">
            <p>
              福利商品涵盖食品生鲜、零食干货、餐具厨具、家电数码、健康洗护、母婴用品、家纺日用等丰富品类
            </p>
          </div>
          <div class="getPlanBtn" @click="goFillingInfo">获取福利方案</div>
        </div>
        <div class="brands">
          <p class="text">部分商品品牌</p>
          <img src="@/assets/img/function/春节/组 18.png" class="brandImg" />
        </div>
      </div>
    </div>
    <img src="@/assets/img/function/春节/矩形 724.png" class="link03" />
    <div class="mobileBlock">
      <p class="title">员工手机端兑换福利礼品，简单方便</p>
      <p class="subtitle">
        员工收到节日福利发放通知后，手机端登录泛员之家APP，进入兑换页面查看贺卡，选<br />择兑换心仪的福利礼品，操作简单，体验更好
      </p>
      <div class="mobileImg">
        <div class="getPlanBtn" @click="goFillingInfo">获取福利方案</div>
      </div>
    </div>
    <img src="@/assets/img/function/春节/矩形 723.png" class="link04" />
    <div class="lastBlock">
      <p class="title">3大实施流程，轻松落地福利方案</p>
      <img src="@/assets/img/function/春节/组 37.png" class="serviceLine" />
      <img src="@/assets/img/function/春节/矩形 715.png" class="bottomImg" />
      <div class="slb slb1">
        <p class="slbText">需求沟通，商务洽谈</p>
        <p class="slbText">基于企业实际情况制定方案</p>
      </div>
      <div class="slb slb2">
        <p class="slbText">双方签署合作协议</p>
        <p class="slbText">确定实施方案及预算</p>
        <p class="slbText">企业账号开通及使用培训</p>
      </div>
      <div class="slb slb3">
        <p class="slbText">企业在泛员网平台实施节日福利</p>
        <p class="slbText">平台多渠道提醒兑换福利</p>
        <p class="slbText">员工手机端自主兑换</p>
        <p class="slbText">礼品寄送到家</p>
        <p class="slbText">泛员网客服中心响应处理售后问题</p>
      </div>
      <div class="planBtn" @click="goFillingInfo">
        <i class="icon"></i>获取福利方案<i class="icon"></i>
      </div>
      <div class="bottomBox">
        <div class="productList">
          <div class="product">
            <img
              src="@/assets/img/function/春节/矢量智能对象.png"
              class="pdIcon"
            />
            <p class="pdName">HCM SaaS</p>
          </div>
          <nuxt-link class="product" to="/product/nsso">
            <img
              src="@/assets/img/function/春节/矢量智能对象_1.png"
              class="pdIcon"
            />
            <p class="pdName">全国社保外包</p>
          </nuxt-link>
          <nuxt-link class="product" to="/product/payroll">
            <img
              src="@/assets/img/function/春节/矢量智能对象_2.png"
              class="pdIcon"
            />
            <p class="pdName">薪酬服务外包</p>
          </nuxt-link>
          <nuxt-link class="product" to="/product/pointsBenefit">
            <img
              src="@/assets/img/function/春节/矢量智能对象_3.png"
              class="pdIcon"
            />
            <p class="pdName">积分福利</p>
          </nuxt-link>
          <nuxt-link class="product" to="/product/holidayBenefits">
            <img
              src="@/assets/img/function/春节/矢量智能对象_4.png"
              class="pdIcon"
            />
            <p class="pdName">节日福利</p>
          </nuxt-link>
          <nuxt-link class="product" to="/product/employeeProtection">
            <img
              src="@/assets/img/function/春节/矢量智能对象_5.png"
              class="pdIcon"
            />
            <p class="pdName">补充医疗保险</p>
          </nuxt-link>
          <nuxt-link class="product" to="/product/staffMedicalExamination">
            <img
              src="@/assets/img/function/春节/矢量智能对象_6.png"
              class="pdIcon"
            />
            <p class="pdName">年度体检</p>
          </nuxt-link>
        </div>
        <div class="right">
          <p class="title">选择泛员网 拥抱数字化</p>
          <p class="subtitle">持续提升人力资源运营效能</p>
          <p class="desc">一个平台，处理大中型企业更多HR管理与服务需求…</p>
          <div class="btns">
            <div class="getPlanBtn btn1" @click="MoNiClick">立即咨询</div>
            <div class="getPlanBtn btn2" @click="goFillingInfo">预约体验</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  layout: "fyw",
  components: {},
  data() {
    return {};
  },
  methods: {
    goFillingInfo() {
      this.$router.push("/fillinginfo");
    },
    goGoodsDetails() {
      this.$router.push("/function/springfestivalgoods");
    },
    MoNiClick() {
      document.getElementById("kf5-support-btn").click();
    },
  },
  mounted() {},
};
</script>

<style scpoed>
.bottomBox .right .title {
  font-size: 30px;
  line-height: 29px;
  font-family: YuYang;
  text-align: left;
  color: #fcdca9;
  margin-bottom: 26px;
}
.bottomBox .right .subtitle {
  font-size: 44px;
  font-family: YuYang;
  text-align: left;
  color: #ffffff;
  line-height: 42px;
  margin-bottom: 38px;
}
.bottomBox .right .desc {
  font-size: 22px;
  font-family: YuYang;
  text-align: left;
  color: #ffffff;
  margin-bottom: 50px;
}
.bottomBox .right .btns {
  display: flex;
}
.bottomBox .right .btns .getPlanBtn.btn1 {
  background-image: url("../../assets/img/function/春节/形状 23.png");
  color: #dd4659;
}
.bottomBox .right .btns .getPlanBtn.btn1::before,
.bottomBox .right .btns .getPlanBtn.btn1::after {
  background-image: url("../../assets/img/function/春节/矩形 11.png");
}
.bottomBox .right .btns .getPlanBtn.btn2 {
  background-image: url("../../assets/img/function/春节/形状 23_1.png");
  color: #fcdca9;
}
.bottomBox .right .btns .getPlanBtn.btn2::before,
.bottomBox .right .btns .getPlanBtn.btn2::after {
  background-image: url("../../assets/img/function/春节/矩形 11_1.png");
  height: 13px;
}
.productList {
  width: 610px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
}
.productList .product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 66px;
  margin-bottom: 50px;
}
.productList .product .pdIcon {
  width: 70px;
  height: 70px;
  margin-bottom: 14px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
}
.productList .product .pdIcon:hover {
  top: -4px;
}
.productList .product .pdName {
  font-size: 16px;
  font-family: PingFang;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  line-height: 16px;
}
.bottomBox {
  width: 1168px;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
}
.slb.slb1 {
  top: 495px;
  left: 430px;
}
.slb.slb2 {
  top: 465px;
  left: 820px;
}
.slb.slb3 {
  top: 413px;
  left: 1200px;
}
.slb {
  position: absolute;
}
.slb .slbText {
  font-size: 16px;
  font-family: PingFang;
  font-weight: 400;
  text-align: left;
  color: #434758;
  line-height: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.slb .slbText::before {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  background-image: url("../../assets/img/function/春节/矩形 11 拷贝 5_1.png");
  background-size: cover;
  margin-right: 11px;
}
.lastBlock .planBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 253px;
  height: 64px;
  line-height: 64px;
  background-image: url("../../assets/img/function/春节/形状 23 拷贝.png");
  background-size: cover;
  font-size: 24px;
  color: #dd4659;
  text-align: center;
  position: absolute;
  top: 645px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  cursor: pointer;
  user-select: none;
}
.lastBlock .planBtn .icon {
  width: 12px;
  height: 13px;
  display: block;
  background-image: url("../../assets/img/function/春节/矩形 11 拷贝 3.png");
  background-size: cover;
  margin: 0 14px;
}
.lastBlock {
  background: #fff;
  padding: 68px 0 0 0;
  position: relative;
}
.lastBlock .title {
  font-size: 48px;
  font-family: YuYang;
  text-align: center;
  color: #dd4659;
  line-height: 46px;
  margin: 0 0 50px;
}
.lastBlock .serviceLine {
  width: 100%;
  margin-bottom: 91px;
  vertical-align: bottom;
}
.lastBlock .bottomImg {
  width: 100%;
  vertical-align: bottom;
  height: 680px;
  width: 100%;
}
.mobileBlock {
  background-image: url("../../assets/img/function/春节/祥云纹03.png");
  background-repeat: repeat;
  width: 100%;
  padding: 32px 0 0;
}
.mobileBlock .title {
  font-size: 48px;
  font-family: YuYang;
  text-align: center;
  color: #dd4659;
  line-height: 46px;
  margin: 0 0 29px;
}
.mobileBlock .subtitle {
  font-size: 16px;
  font-family: PingFang;
  font-weight: 400;
  text-align: center;
  color: #434758;
  line-height: 30px;
}
.mobileBlock .mobileImg {
  width: 1092px;
  height: 561px;
  margin: 0 auto;
  display: block;
  background-image: url("../../assets/img/function/春节/组 14.png");
  background-size: cover;
  position: relative;
}
.mobileBlock .getPlanBtn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -50px;
  margin: 0;
}
.mobileBlock .getPlanBtn:hover {
  opacity: 1;
  top: initial;
}
#springfestival {
  width: 100%;
  background-image: url("../../assets/img/function/春节/祥云纹01.png");
  background-repeat: repeat;
  font-family: PingFang;
}
.topImg {
  width: 100%;
}
.setsGalaryContainer {
  position: relative;
}
.setsGalary {
  width: 1210px;
  margin: 0 auto;
  position: relative;
  top: -166px;
  z-index: 2;
}
.setsSummary {
  width: 1210px;
  height: 695px;
  background-image: url("../../assets/img/function/春节/组 36.png");
  background-size: cover;
  position: relative;
}
.setsDescribe {
  width: 666px;
  width: max-content;
  position: absolute;
  top: 462px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-start;
}
.setsDescribe > span {
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  text-align: left;
  color: #000000;
  margin-right: 19px;
}
.setsDescribe .sdw {
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  text-align: left;
  color: #000000;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.setsDescribe .sdw::before {
  content: "";
  width: 12px;
  height: 12px;
  background-image: url("../../assets/img/function/春节/矩形 11 拷贝 5.png");
  background-size: cover;
  margin-right: 10px;
}
.setsAdvantage {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 52px;
  left: 63px;
}
.setsAdvantage .setsAdvantageBlock {
  display: flex;
  align-items: center;
}
.setsAdvantageBlock.block2 {
  margin: 0 51px 0 64px;
}
.advantageIcon {
  width: 77px;
  height: 77px;
  margin-right: 28px;
}
.advantageDetail {
  width: 192px;
}
.setsAdvantageBlock.block2 .advantageDetail {
  width: 290px;
}
.setsAdvantageBlock.block3 .advantageDetail {
  width: 176px;
}
.advantageTitle {
  font-size: 20px;
  line-height: 19px;
  font-weight: 700;
  margin-bottom: 23px;
  color: #000000;
}
.advantageDesc {
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #434758;
}
.setsList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 45px 0 0;
}
.setsList .setItem {
  width: 589px;
  height: 323px;
  background: #fdf6ed;
  border: 1px solid #fc9fa3;
  border-radius: 30px;
  padding: 34px 29px 35px 25px;
  display: flex;
  position: relative;
  margin-bottom: 28px;
}
.setsList .setItem .setIcon {
  width: 244px;
  height: 237px;
  margin-right: 36px;
  margin-top: 14px;
  -webkit-user-drag: none;
}
.setName {
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  text-align: left;
  color: #dd4659;
  margin-bottom: 24px;
  font-family: YuYang;
}
.setDetails .items {
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  text-align: left;
  color: #434758;
  margin-bottom: 10px;
}
.setDetails .setBtns {
  display: flex;
  margin-top: 17px;
}
.setBtn {
  width: 121px;
  height: 44px;
  line-height: 44px;
  cursor: pointer;
  user-select: none;
  text-align: center;
  font-size: 18px;
  position: relative;
  font-family: YuYang;
  transition: all 0.2s ease-in-out;
}
.setBtn:hover {
  opacity: 0.85;
  top: -2px;
}
.setBtn.checkDetails {
  background: url("../../assets/img/function/春节/形状 24.png");
  background-size: cover;
  color: #dd4659;
  margin-right: 14px;
}
.setBtn.checkDetails::before {
  content: "";
  width: 6px;
  height: 6px;
  background: url("../../assets/img/function/春节/矩形 12.png");
  background-size: cover;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 13px;
}
.setBtn.checkDetails::after {
  content: "";
  width: 6px;
  height: 6px;
  background: url("../../assets/img/function/春节/矩形 12.png");
  background-size: cover;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 13px;
}
.setBtn.consult {
  background: url("../../assets/img/function/春节/形状 24 拷贝.png");
  background-size: cover;
  color: #ffffff;
}
.setBtn.consult::before {
  content: "";
  width: 6px;
  height: 6px;
  background: url("../../assets/img/function/春节/矩形 12 拷贝 4.png");
  background-size: cover;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 13px;
}
.setBtn.consult::after {
  content: "";
  width: 6px;
  height: 6px;
  background: url("../../assets/img/function/春节/矩形 12 拷贝 4.png");
  background-size: cover;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 13px;
}
.setItem .tag {
  width: 66px;
  height: 70px;
  background: #5fc3bf;
  border-radius: 0px 0px 33px 33px;
  position: absolute;
  top: 0;
  left: 28px;
  text-align: center;
  line-height: 70px;
  font-size: 16px;
  font-style: italic;
  color: #ffffff;
}
.recommend {
  background-image: url("../../assets/img/function/春节/祥云纹02.png");
  background-repeat: repeat;
  position: relative;
  z-index: 2;
}
.link01 {
  width: 100%;
  position: absolute;
  bottom: -130px;
  left: 0;
  z-index: 0;
}
.recommend .title {
  font-size: 48px;
  font-family: YuYang;
  text-align: center;
  color: #ffffff;
  line-height: 46px;
  margin-bottom: 75px;
}
.recommendListContainer {
  position: relative;
}
.recommendList {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 2;
  position: relative;
}
.recommendList .recommendItem {
  width: 368px;
  height: 424px;
  background: #fdedd7;
  border-radius: 20px;
  margin-bottom: 42px;
  padding: 0 19px 29px;
}
.recommendItem .itemPic {
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.recommendItem .itemName {
  font-size: 18px;
  font-family: YuYang;
  font-weight: bold;
  text-align: left;
  color: #000000;
  line-height: 18px;
  margin-bottom: 17px;
}
.recommendItem .itemDetails {
  font-size: 14px;
  font-family: PingFang;
  font-weight: 400;
  text-align: left;
  color: #434758;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.recommendItem .itemBtn {
  width: 169px;
  height: 44px;
  line-height: 44px;
  background-image: url("../../assets/img/function/春节/形状 24 拷贝 2.png");
  background-size: cover;
  cursor: pointer;
  position: relative;
  user-select: none;
  text-align: center;
  font-size: 18px;
  position: relative;
  font-family: YuYang;
  color: #fefefe;
  transition: all 0.2s ease-in-out;
  margin: 19px auto 0;
}
.recommendItem .itemBtn:hover {
  opacity: 0.85;
  top: -2px;
}
.recommendItem .itemBtn::before {
  content: "";
  width: 6px;
  height: 6px;
  background-image: url("../../assets/img/function/春节/矩形 12 拷贝 2.png");
  background-size: cover;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 36px;
}
.recommendItem .itemBtn::after {
  content: "";
  width: 6px;
  height: 6px;
  background-image: url("../../assets/img/function/春节/矩形 12 拷贝 2.png");
  background-size: cover;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 36px;
}
.link02 {
  width: 100%;
  position: absolute;
  bottom: -320px;
  left: 0;
  z-index: 0;
}
.recommendListContainer .getPlan {
  width: 300px;
  height: 109px;
  background-image: url("../../assets/img/function/春节/形状 23 拷贝 (1).png");
  background-size: cover;
  position: absolute;
  bottom: -160px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  font-size: 24px;
  font-family: YuYang;
  text-align: left;
  color: #fdedd7;
  text-align: center;
  line-height: 74px;
  cursor: pointer;
  user-select: none;
}
.getPlan::before {
  content: "";
  width: 12px;
  height: 13px;
  background-image: url("../../assets/img/function/春节/矩形 11 拷贝 3_1.png");
  background-size: cover;
  position: absolute;
  top: 38px;
  transform: translateY(-50%);
  left: 52px;
}
.getPlan::after {
  content: "";
  width: 12px;
  height: 13px;
  background-image: url("../../assets/img/function/春节/矩形 11 拷贝 3_1.png");
  background-size: cover;
  position: absolute;
  top: 38px;
  transform: translateY(-50%);
  right: 52px;
}
.customerBrand {
  padding: 65px 0 47px;
  margin-top: 320px;
}
.customerBrand .title {
  font-size: 48px;
  line-height: 46px;
  font-family: YuYang;
  text-align: center;
  color: #dd4659;
  margin-bottom: 62px;
}
.brandDetails {
  width: 1068px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.serviceImg {
  width: 377px;
  height: 247px;
  display: block;
  margin-bottom: 23px;
  margin-left: 10px;
}
.service .words {
  line-height: 30px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 14px;
}
.service .words > p {
  width: 380px;
  font-size: 18px;
  font-family: PingFang;
  font-weight: 400;
  text-align: left;
  color: #434758;
}
.service .words::before {
  content: "";
  width: 12px;
  height: 13px;
  background-image: url("../../assets/img/function/春节/矩形 11 拷贝 3.png");
  background-size: cover;
  margin-right: 9px;
  margin-top: 7px;
}
.getPlanBtn {
  width: 300px;
  height: 109px;
  background-image: url("../../assets/img/function/春节/形状 23_2.png");
  background-size: cover;
  font-size: 24px;
  font-family: YuYang;
  text-align: left;
  color: #fcdca9;
  text-align: center;
  line-height: 74px;
  cursor: pointer;
  user-select: none;
  position: relative;
  margin: 18px 0 0 -20px;
  transition: all 0.2s ease-in-out;
}
.getPlanBtn:hover {
  opacity: 0.85;
  top: -2px;
}
.getPlanBtn::before {
  content: "";
  width: 12px;
  height: 12px;
  background-image: url("../../assets/img/function/春节/矩形 11 拷贝 5.png");
  background-size: cover;
  position: absolute;
  top: 38px;
  transform: translateY(-50%);
  left: 52px;
}
.getPlanBtn::after {
  content: "";
  width: 12px;
  height: 12px;
  background-image: url("../../assets/img/function/春节/矩形 11 拷贝 5.png");
  background-size: cover;
  position: absolute;
  top: 38px;
  transform: translateY(-50%);
  right: 52px;
}
.brandDetails .brands .text {
  font-size: 18px;
  line-height: 17px;
  font-family: PingFang;
  font-weight: 400;
  text-align: left;
  color: #434758;
  margin: 16px 0 39px;
}
.brandDetails .brands .brandImg {
  width: 563px;
  height: 387px;
  vertical-align: top;
}
.link03,
.link04 {
  width: 100%;
  vertical-align: bottom;
}
.link04 {
  background-color: #fff;
}
@media screen and (max-width: 1600px) {
  .setsGalary {
    top: -144px;
  }
  .link02 {
    bottom: -280px;
  }
  .slb.slb1 {
    top: 470px;
    left: 356px;
  }
  .slb.slb2 {
    top: 438px;
    left: 700px;
  }
  .slb.slb3 {
    top: 372px;
    left: 1014px;
  }
  .lastBlock .planBtn {
    top: 586px;
  }
}
@media screen and (max-width: 1440px) {
  .setsGalary {
    top: -120px;
  }
  .link02 {
    bottom: -280px;
  }
  .slb.slb1 {
    top: 450px;
    left: 330px;
  }
  .slb.slb2 {
    top: 413px;
    left: 630px;
  }
  .slb.slb3 {
    top: 350px;
    left: 910px;
  }
  .lastBlock .planBtn {
    top: 550px;
  }
}
@media screen and (max-width: 1366px) {
  .setsGalary {
    top: -120px;
  }
  .link02 {
    bottom: -280px;
  }
  .slb.slb1 {
    top: 434px;
    left: 310px;
  }
  .slb.slb2 {
    top: 396px;
    left: 598px;
  }
  .slb.slb3 {
    top: 330px;
    left: 869px;
  }
  .lastBlock .planBtn {
    top: 540px;
  }
}
</style>