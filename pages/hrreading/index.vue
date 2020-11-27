<template>
  <div id="hrreading-index">
    <div class="top">
      <img src="../../assets/img/HRUnscramble/title.png" />
    </div>
    <div class="content b1">
      <img src="../../assets/img/HRUnscramble/图层 5.png" class="special" />
      <div class="details">
        <p class="title">《HR解读》· 第23期</p>
        <div class="words">
          <div class="g1">
            <p>刊名：HR解读</p>
            <p>期数：第23期</p>
            <p>杂志版式：16开</p>
            <p>单本页数：60页</p>
          </div>
          <div class="g2">
            <p>主办机构：泛睿人力资本研究院</p>
            <p>阅读人群：资深HR、企业高管等</p>
          </div>
        </div>
      </div>
      <img
        src="../../assets/img/HRUnscramble/图.png"
        class="bottomImg"
        v-on:click="GoApply"
        style="cursor: pointer"
      />
    </div>
    <div class="blueBg">
      <div class="content b2">
        <img src="../../assets/img/HRUnscramble/组 17.png" class="titleImg" />
        <div class="mContent">
          <div class="lContent">
            <div class="group">
              <p>
                <span class="num">01</span><span class="wTitle">编者的话</span
                ><span class="title"
                  ><span class="slash">/</span
                  >2020年，人力资源数字化如何解放HR？</span
                >
              </p>
            </div>
            <div class="group">
              <p>
                <span class="num">04</span><span class="wTitle">专题</span
                ><span class="title"
                  ><span class="slash">/</span
                  >人才吸引和保留的新趋势——员工体验</span
                >
              </p>
            </div>
            <div class="group">
              <p>
                <span class="num">11</span><span class="wTitle">聚焦</span
                ><span class="title"
                  ><span class="slash">/</span
                  >国有企业混合所有制改革，人力资源部门应该如何发挥价值？</span
                >
              </p>
              <p class="innerGroup">
                <span class="subNum">P14</span
                ><span class="subTitle"
                  ><span class="slash">/</span>大数据时代下人才测评的发展</span
                >
              </p>
              <p class="innerGroup">
                <span class="subNum">P18</span
                ><span class="subTitle"
                  ><span class="slash">/</span
                  >2020年人力资源外包的发展现状及发展趋势</span
                >
              </p>
            </div>
            <div class="group">
              <p>
                <span class="num">22</span><span class="wTitle">访谈</span
                ><span class="title"
                  ><span class="slash">/</span
                  >疫情之下，除了应对挑战还需着眼未来</span
                >
              </p>
              <p class="innerGroup">
                <span class="subNum">P25</span
                ><span class="subTitle"
                  ><span class="slash">/</span
                  >以弹性化措施应对特殊时期人力资源管理</span
                >
              </p>
            </div>
            <div class="group">
              <p>
                <span class="num">28</span><span class="wTitle">政策解读</span
                ><span class="title"
                  ><span class="slash">/</span
                  >港澳台居民如何在内地购买社保</span
                >
              </p>
              <p class="innerGroup">
                <span class="subNum">P32</span
                ><span class="subTitle"
                  ><span class="slash">/</span
                  >推进事业单位工作人员培训制度化</span
                >
              </p>
            </div>
          </div>
          <div class="rContent">
            <div class="group">
              <p>
                <span class="num">34</span><span class="wTitle">评论</span
                ><span class="title"
                  ><span class="slash">/</span
                  >十大关键词回顾2019人力资源领域发展</span
                >
              </p>
              <p class="innerGroup">
                <span class="subNum">P42</span
                ><span class="subTitle"
                  ><span class="slash">/</span>数字化时代，你的人才值钱吗?</span
                >
              </p>
              <p class="innerGroup">
                <span class="subNum">P45</span
                ><span class="subTitle"
                  ><span class="slash">/</span
                  >疫情之下，2020招聘趋势有哪些变化?</span
                >
              </p>
            </div>
            <div class="group">
              <p>
                <span class="num">47</span><span class="wTitle">智识</span
                ><span class="title"
                  ><span class="slash">/</span>HR应如何做好试用期管理?</span
                >
              </p>
              <p class="innerGroup">
                <span class="subNum">P50</span
                ><span class="subTitle"
                  ><span class="slash">/</span
                  >绩效管理体系设计的10个关键原则</span
                >
              </p>
              <p class="innerGroup">
                <span class="subNum">P55</span
                ><span class="subTitle"
                  ><span class="slash">/</span>绩效考核中的“强制分布法”</span
                >
              </p>
            </div>
            <div class="group">
              <p>
                <span class="num">58</span><span class="wTitle">HR攻略</span
                ><span class="title"
                  ><span class="slash">/</span>HR“黑话”宝典</span
                >
              </p>
              <p class="innerGroup">
                <span class="subNum">P60</span
                ><span class="subTitle"
                  ><span class="slash">/</span>HR的“辛酸历程”你了解多少？</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content b3">
      <img src="../../assets/img/HRUnscramble/title(1).png" class="titleImg" />
      <img
        src="../../assets/img/HRUnscramble/组 15.png"
        class=""
        style="width: 100%; margin-bottom: 40px; float: none"
      />
      <img
        src="../../assets/img/HRUnscramble/组 16.png"
        class=""
        style="width: 100%; margin-bottom: 40px; float: none"
      />
    </div>
    <div class="content b4">
      <img src="../../assets/img/HRUnscramble/title(2).png" class="titleImg" />
      <div class="details">
        <div class="block block1">
          <p class="title">
            <img
              src="../../assets/img/HRUnscramble/报名.png"
              class="titleIcon"
            />关于报名申请
          </p>
          <p class="detailsContent">
            客户填写申请表单，经泛员网审核后，即为满足条件的客户免费邮寄第23期《HR解读》，名额有限，报满即止，若未通过审核，敬请谅解。
          </p>
        </div>
        <div class="block block2">
          <p class="title">
            <img
              src="../../assets/img/HRUnscramble/邮寄.png"
              class="titleIcon"
            />关于杂志邮寄
          </p>
          <p class="detailsContent">
            《HR解读》每周邮寄一次，如有延迟，按客户报名先后顺序发货，如遇特殊情况，可联系在线客服解决。
          </p>
        </div>
      </div>
      <p class="tips">注：以上内容最终解释权归泛员网所有</p>
    </div>
    <img
      src="../../assets/img/HRUnscramble/图(1).png"
      class="lastImg"
      v-on:click="GoApply"
      style="cursor: pointer"
    />
    <div id="rightFixed">
      <img src="~../../assets/img/HRUnscramble/图层 8.png" class="book" />
      <span v-on:click="GoApply">申请获取</span>
      <img
        src="~../../assets/img/HRUnscramble/图层 9.png"
        class="toTop"
        v-on:click="GoTop"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: "fywheader",
  head() {
    return {
      title: "HR解读-泛员网",
    };
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    GoTop() {
      window.scrollTo(0, 0);
    },
    GoApply() {
      this.$router.push("/hrreading/apply");
    },
  },
  watch: {},
  mounted() {},
};
</script>
<style scoped>
.content > img {
  float: none;
}
* {
  margin: 0;
  padding: 0;
}
@media screen and (max-width: 1920px) {
  #hrreading-index .top {
    height: 824px;
  }
  #hrreading-index .top img {
    position: absolute;
    width: 461px;
    top: 180px;
    left: 360px;
  }
}
@media screen and (max-width: 1440px) {
  #hrreading-index .top {
    height: 618px;
  }
  #hrreading-index .top img {
    position: absolute;
    width: 345.75px;
    top: 136px;
    left: 275px;
  }
}
@media screen and (max-width: 1366px) {
  #hrreading-index .top {
    height: 586.24px;
  }
  #hrreading-index .top img {
    position: absolute;
    width: 328px;
    top: 130px;
    left: 260px;
  }
}
#hrreading-index {
  margin-top: 80px;
}
#hrreading-index .top {
  background: url("../../assets/img/HRUnscramble/BG.png");
  position: relative;
  background-size: cover;
}
#hrreading-index .content {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
#hrreading-index .content.b1 .details {
  width: 880px;
  height: 260px;
  background: rgba(247, 243, 251, 1);
  border-radius: 0px 100px 0px 0px;
  top: 51px;
  left: 60px;
  position: relative;
  padding-left: 271px;
  margin-bottom: 81px;
}
#hrreading-index .content.b1 .details .title {
  line-height: 29px;
  font-size: 30px;
  /* font-family: Source Han Serif SC; */
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 50px;
  padding-top: 20px;
}
#hrreading-index .content.b1 .details .words {
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 28px;
  color: rgba(116, 107, 131, 1);
  width: auto;
  float: none;
  vertical-align: initial;
}
#hrreading-index .content.b1 .details .words .g1 {
  padding-right: 60px;
  border-right: 1px solid #c0b1d3;
}
#hrreading-index .content.b1 .details .words .g2 {
  padding-left: 60px;
}
#hrreading-index .content.b1 .special {
  position: absolute;
  top: 0;
  left: 0;
  width: 212px;
  z-index: 2;
}
#hrreading-index .content.b1 .bottomImg {
  width: 1200px;
  margin-bottom: 83px;
}
.blueBg {
  background: rgba(243, 247, 255, 1);
}
.titleImg {
  width: 220px;
  margin: 0 auto;
  display: block;
  padding: 50px 0;
  float: none !important;
}
#hrreading-index .content.b4 {
  background: rgba(243, 247, 255, 1);
  padding: 0 100px;
  box-sizing: border-box;
  height: 450px;
  position: relative;
}
#hrreading-index .content.b4 .details {
  display: flex;
  justify-content: space-between;
}
#hrreading-index .content.b4 .details .block {
  width: 400px;
  margin-top: 30px;
}
#hrreading-index .content.b4 .details .block .title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 24px;
  /* font-family: Source Han Sans SC; */
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 29px;
}
#hrreading-index .content.b4 .details .block .detailsContent {
  font-size: 18px;
  /* font-family: Source Han Sans SC; */
  font-weight: 400;
  color: rgba(70, 84, 103, 1);
  line-height: 22px;
}
#hrreading-index .content.b4 .tips {
  font-size: 16px;
  /* font-family: Source Han Sans SC; */
  font-weight: 400;
  color: rgba(188, 197, 211, 1);
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}
#hrreading-index .content.b4 .titleIcon {
  height: 28px;
  margin-right: 20px;
  vertical-align: bottom;
}
.lastImg {
  display: block;
  width: 1200px;
  margin: 40px auto;
}
.ivu-icon {
  font-family: Ionicons !important;
}
#hrreading-index .content.b2 .mContent {
  display: flex;
  justify-content: space-between;
}
#hrreading-index .content.b2 .mContent .lContent {
  width: 580px;
}
#hrreading-index .content.b2 .mContent .rContent {
  width: 480px;
}
#hrreading-index .content.b2 .mContent .group {
  margin-bottom: 40px;
}
#hrreading-index .content.b2 .mContent .num {
  font-size: 24px;
  /* font-family: Source Han Serif SC; */
  font-weight: 800;
  color: rgba(206, 169, 113, 1);
  margin-right: 20px;
}
#hrreading-index .content.b2 .mContent .wTitle {
  font-size: 20px;
  /* font-family: Source Han Sans SC; */
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-right: 30px;
}
#hrreading-index .content.b2 .mContent .title {
  font-size: 16px;
  /* font-family: Source Han Sans SC; */
  font-weight: 400;
  color: #878787;
}
#hrreading-index .content.b2 .mContent .innerGroup {
  margin-top: 22px;
}
#hrreading-index .content.b2 .mContent .innerGroup .subNum {
  font-size: 16px;
  /* font-family: Source Han Sans SC; */
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
  margin-right: 20px;
}
#hrreading-index .content.b2 .mContent .innerGroup .subTitle {
  font-size: 16px;
  /* font-family: Source Han Sans SC; */
  font-weight: 400;
  color: #878787;
}
#hrreading-index .content.b2 .mContent .slash {
  color: #cea971;
  margin-right: 4px;
}
#rightFixed {
  position: fixed;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  /*width: 80px;
        height: 240px;*/
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 18px 2px rgba(149, 155, 169, 0.5);
  border-radius: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /*padding: 45px 22px;*/
  font-size: 18px;
  /* font-family: Source Han Sans SC; */
  font-weight: 400;
  color: rgba(38, 38, 38, 1);
}
#rightFixed > span {
  cursor: pointer;
  text-align: center;
}
#rightFixed .toTop {
  cursor: pointer;
}
@media screen and (max-width: 1920px) {
  #rightFixed {
    width: 80px;
    height: 240px;
    padding: 45px 22px;
    right: 40px;
  }
}
@media screen and (max-width: 1440px) {
  #rightFixed {
    width: 70px;
    height: 240px;
    padding: 45px 17px;
    right: 30px;
  }
}
@media screen and (max-width: 1366px) {
  #rightFixed {
    width: 60px;
    height: 240px;
    padding: 45px 11px;
    right: 20px;
  }
}
</style>