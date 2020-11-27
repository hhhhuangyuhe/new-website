<template>
  <div id="information-inner">
    <img src="../../assets/img/willDel/banner列表页.png" class="banner" />
    <div class="info-inner-container">
      <div class="info-details">
        <p class="path">
          <nuxt-link to="/" class="link">首页</nuxt-link>>
          <nuxt-link to="/information" class="link">HR智汇</nuxt-link>
          > {{innerData.CurItem._title}}
        </p>
        <div class="info-content">
          <p class="title">{{innerData.InnerDetail._title}}</p>
          <p
            class="time"
          >时间:{{formatTo(innerData.InnerDetail._addtime)}}&nbsp&nbsp阅读量：{{innerData.InnerDetail._clickcount}}&nbsp&nbsp来源:{{innerData.InnerDetail._source}}</p>
          <p class="gr">导语：{{innerData.InnerDetail._summary}}</p>
          <p class="paper" v-if="innerData.InnerDetail._contents!=undefined">
            <span class="paper-content" v-html="innerData.InnerDetail._contents.replace(/https/g,'http')">{{innerData.InnerDetail._contents.replace(/https/g,'http')}}</span>
          </p>
          <div class="meting-lf lf" v-if="innerData.InnerDetail._specialguest!=undefined">
            <div class="tit" style="margin: 0 0 60px;">
              <s class="information"></s>
              <span>信息</span>
            </div>
            <div class="information-box">
              <ul>
                <li>
                  <s class="zbf"></s>
                  <span>主办方：{{innerData.InnerDetail._sponsor}}</span>
                </li>
                <li>
                  <s class="hdsj"></s>
                  <span>活动时间：{{formatToDate(innerData.InnerDetail._datetime)}}</span>
                </li>
                <li>
                  <s class="hdlx"></s>
                  <span>活动类型：{{formatActivityType(innerData.InnerDetail._various)}}</span>
                </li>
                <li>
                  <s class="didian"></s>
                  <span>活动地点：{{innerData.InnerDetail._address}}</span>
                </li>
                <li>
                  <s class="chdx"></s>
                  <span>参会对象：{{innerData.InnerDetail._object}}</span>
                </li>
                <li>
                  <s class="chrs"></s>
                  <span>参会人数：{{innerData.InnerDetail._participantsnum == null ? 0 : innerData.InnerDetail._participantsnum}} 人</span>
                </li>
                <li>
                  <s class="chdx"></s>
                  <span>
                    报名参加：
                    <a
                      :href="innerData.InnerDetail._shareurl"
                      style="color: #2D8CF0"
                      target="_blank"
                    >{{innerData.InnerDetail._shareurl}}</a>
                  </span>
                </li>
              </ul>
            </div>
            <div class="tit">
              <s class="background"></s>
              <span>背景</span>
            </div>
            <div class="background-box">
              <span v-html="innerData.InnerDetail._background"></span>
              <br />
            </div>
            <div class="tit">
              <s class="theme"></s>
              <span>主题</span>
            </div>
            <div class="background-box">
              <span v-html="innerData.InnerDetail._theme"></span>
              <br />
            </div>
            <div class="tit">
              <s class="survey"></s>
              <span>嘉宾</span>
            </div>
            <div class="surcey-box">
              <span style="font-size:16px;line-height:2.5;">
                <p class="MsoNormal">
                  <span v-html="innerData.InnerDetail._specialguest"></span>
                </p>
              </span>
              <span style="font-size:16px;line-height:2.5;"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="relative-info">
        <p class="title">热门文章</p>
        <ul class="hotPaperList">
          <li v-for="(item,index) in innerData.HotList" :key="item._id" class="hotPaperItem" v-if="index< 3">
              <nuxt-link :to="'/information/inner?id=' + item._id + '&cateId=' + item._categoryid">
                  <img :src="item._ImgUrl.replace(/https/g,'http')" v-if="innerData.InnerDetail._specialguest!=undefined"/>
                  <img :src="item._imgurl.replace(/https/g,'http')" v-if="innerData.InnerDetail._specialguest==undefined"/>
                  <div class="shadowBox">
                      <p>{{item._title}}</p>
                  </div>
              </nuxt-link>
          </li>
        </ul>
        <OldApply></OldApply>
        <div class="qrCode">
          <img src="../../assets/img/right/wxqrcode.png" class="codeImg" />
          <div>
              <p>扫一扫~ </p>
              <p>关注泛员网微信公众号</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OldApply from "../../components/information_inner_apply";
export default {
  layout: "fyw",
  head() {
        return {
        title: this.innerData.InnerDetail._title,
        meta: [
            {
            hid: 'keywords',
            name: 'keywords',
            content: this.innerData.InnerDetail._seokeywords
            },
            {
            hid: 'description',
            name: 'description',
            content: this.innerData.InnerDetail._summary
            },
        ]
        }
    },
  components: {
    OldApply,
  },
  watchQuery: ["id", "cateId"],
  async asyncData({ app, query }) {
    let { data } = await app.$axios.get(
      `/api/NewActive/InnerData?id=` + query.id + `&parentId=` + query.cateId
    );
    return {
      innerData: data,
    };
  },
  data() {
    return {};
  },
  mounted() {
    if(this.innerData.InnerDetail._contents != undefined){
      this.innerData.InnerDetail._newcontents = this.innerData.InnerDetail._contents.replace(/https/g,'http')
    }
    console.log(this.innerData.InnerDetail)
    console.log(this.innerData.HotList)
  },
  methods: {
    formatTo(date) {
      var d = new Date(date);
      return d.getFullYear() + '-' + parseInt(d.getMonth() + 1) + '-' + d.getDate() ;
    },
    formatToDate(date) {
      var d = null;
      try {
        d = new Date(Date.parse(date));
      } catch (err) {
        return "";
      }
      var dateString =
        d.getFullYear() +
        "-" +
        parseInt(d.getMonth() + 1) +
        "-" +
        d.getDate() +
        " " +
        d.getHours() +
        ":";
      if (d.getMinutes() < 10) {
        dateString += "0" + d.getMinutes();
      } else {
        dateString += d.getMinutes();
      }
      return dateString;
    },
    formatActivityType(code) {
      switch (code) {
        case 1:
          return "研讨会";
        case 2:
          return "沙龙";
        case 3:
          return "高峰论坛";
        case 4:
          return "线上直播";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
#information-inner .banner {
  width: 100%;
  vertical-align: top;
}
.info-inner-container {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0 40px;
}
.info-inner-container .info-details {
  width: 900px;
}
.info-inner-container .relative-info {
  width: 300px;
}
.info-details .path {
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 39px;
}
.info-details .path a {
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.info-details .path a:hover{
  color: #fb8c0a;
}
.info-content{
  width: 820px;
}
.info-content .paper{
  font-size: 14px;
  font-weight: 400;
  color: rgba(0,0,0,1);
  padding-bottom: 100px;
  word-break: break-word;
}
.info-content .title {
    font-size: 24px;
    font-weight: 400;
    color: rgba(0,0,0,1);
    line-height: 24px;
    margin-bottom: 29px;
    margin-top: 39px;
    text-align: center;
}
.info-content .time {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,1);
    line-height: 15px;
    margin-bottom: 59px;
    text-align: center;
}
.info-content .gr {
    background: rgba(242,242,242,1);
    border-radius: 4px;
    padding: 30px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,1);
    margin-bottom: 29px;
}
.meting-lf {
    width: 800px;
    background-color: #fff;
    padding: 40px 0;
}
.tit {
    margin: 60px 0;
}
.tit s {
    display: inline-block;
    height: 33px;
    width: 43px;
    margin-right: 20px;
    background-image: url(../../assets/img/willDel/meeting-ico.png);
    vertical-align: middle;
}
s {
    text-decoration: none;
}
.information {
    background-position: -135px 0;
}
.background {
    background-position: -90px 0;
}
.theme {
    background-position: -181px 0;
}
.tit span {
    vertical-align: middle;
    font-size: 20px;
    color: #fa9a46;
    font-weight: bold;
}
.information-box, .background-box, .theme-box, .surcey-box, .guest-box {
    width: 700px;
    margin: 0 auto;
    overflow: hidden;
    font-size: 16px;
}
ul, li {
    list-style: none;
}
.information-box ul li {
    margin: 10px 0;
}
.information-box ul li span{
  font-size: 16px;
}
.information-box s {
    display: inline-block;
    vertical-align: middle;
    width: 35px;
    height: 35px;
    margin-right: 5px;
    background-image: url(../../assets/img/willDel/meeting.png);
}
.hdsj {
    background-position: -40px 0;
}
.hdlx {
    background-position: -81px 0;
}
.didian {
    background-position: -123px 0;
}
.chdx {
    background-position: -162px 0;
}
.chrs {
    background-position: -202px 0;
}
.chdx {
    background-position: -162px 0;
}
.surcey-box p {
    line-height: 30px;
    margin-bottom: 40px;
}
.relative-info .title {
    font-size: 20px;
    font-weight: 400;
    color: rgba(0,0,0,1);
    line-height: 20px;
}
.relative-info  ul.hotPaperList {
    margin-top: 21px;
    margin-bottom: 30px;
}
.relative-info ul.hotPaperList li.hotPaperItem {
    list-style-type: none;
    margin-bottom: 10px;
    width: 300px;
    height: 200px;
    border-radius: 4px;
    display: block;
    position: relative;
    cursor: pointer;
}
.relative-info ul.hotPaperList li.hotPaperItem img {
    width: 100%;
    height: 100%;
    background-size: cover;
}
.relative-info ul.hotPaperList li.hotPaperItem .shadowBox {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 100px;
    background: linear-gradient(0deg,rgba(12,14,21,1) 0%,rgba(18,20,26,0) 100%);
    border-radius: 4px;
}
.relative-info ul.hotPaperList li.hotPaperItem .shadowBox p {
    text-align: center;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255,255,255,1);
    position: absolute;
    bottom: 18px;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
}
.qrCode {
    width: 300px;
    height: 128px;
    background: rgba(255,255,255,1);
    box-shadow: 0px 0px 10px 0px rgba(225,233,242,1);
    border-radius: 4px;
    box-sizing: border-box;
    padding: 14px 20px;
}
.qrCode img {
    vertical-align: top;
}
.qrCode > div {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,1);
    margin: 34px 0 12px 0;
    margin-left: 12px;
}
</style>