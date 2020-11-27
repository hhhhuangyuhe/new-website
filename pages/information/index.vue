<template>
  <div id="information">
    <img src="../../assets/img/willDel/informationbanner.png" class="banner" />
    <div class="info-container">
      <div class="info-block-1">
        <div class="market-activities">
          <p class="block-title">最新活动</p>
          <div class="latest-MA">
            <img :src="latest_ma._newImgurl" class="img" />
            <div class="details">
              <nuxt-link
                class="title"
                :to="'/information/inner?id=' + latest_ma._id + '&cateId=10000'"
              >{{latest_ma._title}}</nuxt-link>
              <p class="summary">{{latest_ma._summary}}</p>
              <p class="time">{{formatTo(latest_ma._addtime)}}</p>
              <p class="address">{{latest_ma._address}}</p>
              <nuxt-link class="signUp" to="/fillinginfo">立即报名</nuxt-link>
            </div>
          </div>
          <div class="old-MA">
            <p class="block-title">
              往期活动
              <nuxt-link class="more-MA" :to="'/information/list?pageIndex=1&pageSize=10&cateId=10000'">全部</nuxt-link>
            </p>
            <div class="old-MA-list">
              <div class="old-MA-item" v-for="item in old_ma" :key="item._id">
                <img :src="item._newImgurl" class="img" />
                <div class="details">
                  <nuxt-link
                    class="title"
                    :to="'/information/inner?id=' + item._id + '&cateId=' + item._categoryid"
                  >{{item._title}}</nuxt-link>
                  <p class="summary">{{item._summary}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fy-moving">
          <p class="block-title">
            泛员动态
            <nuxt-link class="more-MA" :to="'/information/list?pageIndex=1&pageSize=10&cateId=' + fy_dynamic_categoryid">全部</nuxt-link>
          </p>
          <div class="dynamic-list">
            <div class="dynamic-item" v-for="item in fy_dynamic" :key="item._id">
              <img :src="item._newImgurl" class="dynamic-img" />
              <div class="dynamic-content">
                <a
                  class="title"
                  :href="'/information/inner?id=' + item._id + '&cateId=' + item._categoryid"
                >{{item._title}}</a>
                <p class="summary">{{item._summary}}</p>
                <p class="time">{{formatTo(item._addtime)}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-block-2">
        <ul class="info-type">
          <li
            v-for="item in newList"
            :class="{'active':activeNew == item.type}"
            @click="activeNew = item.type"
          >
            <img :src="activeNew == item.type ? item.activeImg : item.img" />
            <p class="type" :class="{'activeType':activeNew == item.type}">{{item.type}}</p>
          </li>
        </ul>
        <ul class="newsContentList" v-if="activeNew == '最新资讯'">
          <li v-for="(item,index) in allData.mn" class="newsContentItem" v-if="index < 6">
            <div class="date">
              <span class="day">{{getDate_Day(item._addtime)}}</span>
              /{{getDate_Month(item._addtime)}}月
            </div>
            <div class="content">
              <nuxt-link
                class="title"
                :to="'/information/inner?id=' + item._id + '&cateId=' + item._categoryid"
              >{{item._title}}</nuxt-link>
              <p class="desc">{{item._summary}}</p>
            </div>
          </li>
          <p v-if="allData.mn!=null && allData.mn!='null'">
            <span class="bf-line"></span>
            <nuxt-link
              class="more-btn"
              :to="'/information/list?pageIndex=1&pageSize=10&cateId=' + allData.mn[0]._categoryid"
            >全部</nuxt-link>
            <span class="bf-line"></span>
          </p>
        </ul>
        <ul class="newsContentList" v-if="activeNew == '劳动关系'">
          <li v-for="(item,index) in allData.ldgx" class="newsContentItem" v-if="index < 6">
            <div class="date">
              <span class="day">{{getDate_Day(item._addtime)}}</span>
              /{{getDate_Month(item._addtime)}}月
            </div>
            <div class="content">
              <nuxt-link
                class="title"
                :to="'/information/inner?id=' + item._id + '&cateId=' + item._categoryid"
              >{{item._title}}</nuxt-link>
              <p class="desc">{{item._summary}}</p>
            </div>
          </li>
          <p v-if="allData.ldgx!=null && allData.ldgx!='null'">
            <span class="bf-line"></span>
            <nuxt-link
              class="more-btn"
              :to="'/information/list?pageIndex=1&pageSize=10&cateId=' + allData.ldgx[0]._categoryid"
            >全部</nuxt-link>
            <span class="bf-line"></span>
          </p>
        </ul>
        <ul class="newsContentList" v-if="activeNew == '社保公积金'">
          <li v-for="(item,index) in allData.sbgjj" class="newsContentItem" v-if="index < 6">
            <div class="date">
              <span class="day">{{getDate_Day(item._addtime)}}</span>
              /{{getDate_Month(item._addtime)}}月
            </div>
            <div class="content">
              <nuxt-link
                class="title"
                :to="'/information/inner?id=' + item._id + '&cateId=' + item._categoryid"
              >{{item._title}}</nuxt-link>
              <p class="desc">{{item._summary}}</p>
            </div>
          </li>
          <p v-if="allData.sbgjj!=null && allData.sbgjj!='null'">
            <span class="bf-line"></span>
            <nuxt-link
              class="more-btn"
              :to="'/information/list?pageIndex=1&pageSize=10&cateId=' + allData.sbgjj[0]._categoryid"
            >全部</nuxt-link>
            <span class="bf-line"></span>
          </p>
        </ul>
        <ul class="newsContentList" v-if="activeNew == '薪酬管理'">
          <li v-for="(item,index) in allData.xcgl" class="newsContentItem" v-if="index < 6">
            <div class="date">
              <span class="day">{{getDate_Day(item._addtime)}}</span>
              /{{getDate_Month(item._addtime)}}月
            </div>
            <div class="content">
              <nuxt-link
                class="title"
                :to="'/information/inner?id=' + item._id + '&cateId=' + item._categoryid"
              >{{item._title}}</nuxt-link>
              <p class="desc">{{item._summary}}</p>
            </div>
          </li>
          <p v-if="allData.xcgl!=null && allData.xcgl!='null'">
            <span class="bf-line"></span>
            <nuxt-link
              class="more-btn"
              :to="'/information/list?pageIndex=1&pageSize=10&cateId=' + allData.xcgl[0]._categoryid"
            >全部</nuxt-link>
            <span class="bf-line"></span>
          </p>
        </ul>
        <ul class="newsContentList" v-if="activeNew == '员工福利'">
          <li v-for="(item,index) in allData.ygfl" class="newsContentItem" v-if="index < 6">
            <div class="date">
              <span class="day">{{getDate_Day(item._addtime)}}</span>
              /{{getDate_Month(item._addtime)}}月
            </div>
            <div class="content">
              <nuxt-link
                class="title"
                :to="'/information/inner?id=' + item._id + '&cateId=' + item._categoryid"
              >{{item._title}}</nuxt-link>
              <p class="desc">{{item._summary}}</p>
            </div>
          </li>
          <p v-if="allData.ygfl!=null && allData.ygfl!='null'">
            <span class="bf-line"></span>
            <nuxt-link
              class="more-btn"
              :to="'/information/list?pageIndex=1&pageSize=10&cateId=' + allData.ygfl[0]._categoryid"
            >全部</nuxt-link>
            <span class="bf-line"></span>
          </p>
        </ul>
        <ul class="newsContentList" v-if="activeNew == '认可激励'">
          <li v-for="(item,index) in allData.rkjl" class="newsContentItem" v-if="index < 6">
            <div class="date">
              <span class="day">{{getDate_Day(item._addtime)}}</span>
              /{{getDate_Month(item._addtime)}}月
            </div>
            <div class="content">
              <nuxt-link
                class="title"
                :to="'/information/inner?id' + item._id + '&cateId=' + item._categoryid"
              >{{item._title}}</nuxt-link>
              <p class="desc">{{item._summary}}</p>
            </div>
          </li>
          <p v-if="allData.rkjl!=null && allData.rkjl!='null'">
            <span class="bf-line"></span>
            <nuxt-link
              class="more-btn"
              :to="'/information/list?pageIndex=1&pageSize=10&cateId=' + allData.rkjl[0]._categoryid"
            >全部</nuxt-link>
            <span class="bf-line"></span>
          </p>
        </ul>
        <ul class="newsContentList" v-if="activeNew == 'HR信息化'">
          <li v-for="(item,index) in allData.hrxxh" class="newsContentItem" v-if="index < 6">
            <div class="date">
              <span class="day">{{getDate_Day(item._addtime)}}</span>
              /{{getDate_Month(item._addtime)}}月
            </div>
            <div class="content">
              <nuxt-link
                class="title"
                :to="'/information/inner?id=' + item._id + '&cateId=' + item._categoryid"
              >{{item._title}}</nuxt-link>
              <p class="desc">{{item._summary}}</p>
            </div>
          </li>
          <p v-if="allData.hrxxh!=null && allData.hrxxh!='null'">
            <span class="bf-line"></span>
            <nuxt-link
              class="more-btn"
              :to="'/information/list?pageIndex=1&pageSize=10&cateId=' + allData.hrxxh[0]._categoryid"
            >全部</nuxt-link>
            <span class="bf-line"></span>
          </p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "fyw",
  head() {
        return {
        title: '泛员网活动-泛员网动态-泛员小报-泛员网',
        meta: [
            {
            hid: 'keywords',
            name: 'keywords',
            content: '泛员网官方活动，泛员网最新动态，人力资源管理，劳动政策法规，社保公积金，企业数字化转型，泛员小报'
            },
            {
            hid: 'description',
            name: 'description',
            content: '泛员网活动与资讯栏目，实时发布最新的泛员网官方活动消息，分享泛员网品牌活动，分享最新的人力资源行业最新资讯，人力资源管理知识干货、泛员小报等，涵盖劳动关系，个税社保、薪酬管理，员工福利、认可激励、HR数字化等'
            },
        ]
        }
    },
  async asyncData({ app, query }) {
    let { data } = await app.$axios.get(`/api/NewActive/IndexData`);
    return {
      allData: data,
    };
  },
  data() {
    return {
      latest_ma: [],
      old_ma: [],
      fy_dynamic: [],
      fy_dynamic_categoryid: 15,
      activeNew: "最新资讯",
      newList: [
        {
          type: "最新资讯",
          img: require("../../assets/img/willDel/最新资讯2.png"),
          activeImg: require("../../assets/img/willDel/最新资讯1.png"),
        },
        {
          type: "劳动关系",
          img: require("../../assets/img/willDel/劳动关系2.png"),
          activeImg: require("../../assets/img/willDel/劳动关系1.png"),
        },
        {
          type: "社保公积金",
          img: require("../../assets/img/willDel/社保公积金2.png"),
          activeImg: require("../../assets/img/willDel/社保公积金1.png"),
        },
        {
          type: "薪酬管理",
          img: require("../../assets/img/willDel/薪酬管理2.png"),
          activeImg: require("../../assets/img/willDel/薪酬管理1.png"),
        },
        {
          type: "员工福利",
          img: require("../../assets/img/willDel/员工福利2.png"),
          activeImg: require("../../assets/img/willDel/员工福利1.png"),
        },
        {
          type: "认可激励",
          img: require("../../assets/img/willDel/认可激励2.png"),
          activeImg: require("../../assets/img/willDel/认可激励1.png"),
        },
        {
          type: "HR信息化",
          img: require("../../assets/img/willDel/信息化2.png"),
          activeImg: require("../../assets/img/willDel/信息化1.png"),
        },
      ],
    };
  },
  mounted() {
    let schd = this.allData.schd;
    schd.forEach((item) => {
      item._newImgurl = item._imgurl.replace(/https/g, "http");
    });
    if (schd == undefined || schd.length <= 0 || schd == null) {
      this.latest_ma = this.old_ma = [];
    } else {
      this.latest_ma = schd[0];
      this.old_ma = schd.slice(1, 3);
    }
    let fydt = this.allData.fydt;
    fydt.forEach((item) => {
      item._newImgurl = item._imgurl.replace(/https/g, "http");
    });
    if (fydt == undefined || fydt.length <= 0 || fydt == null) {
      this.fy_dynamic = [];
    } else {
      this.fy_dynamic = fydt.slice(0, 4);
      this.fy_dynamic_categoryid = fydt[0]._categoryid;
    }
    this.allData.mn.sort(this.compare("_addtime"));
  },
  methods: {
    formatTo(date) {
      var d = new Date(date);
      return (
        d.getFullYear() + "-" + parseInt(d.getMonth() + 1) + "-" + d.getDate()
      );
    },
    getDate_Month(date) {
      var dd = new Date(date);
      var m = parseInt(dd.getMonth() + 1);
      if (m < 10) {
        m = "0" + m;
      }
      return m;
    },
    getDate_Day(date) {
      var dd = new Date(date);
      var d = parseInt(dd.getDate());
      if (d < 10) {
        d = "0" + d;
      }
      return d;
    },
    compare(property) {
      return function (a, b) {
        var value1 = new Date(a[property]);
        var value2 = new Date(b[property]);
        return value2 - value1;
      };
    },
  },
};
</script>

<style scoped>
#information .banner {
  width: 100%;
  vertical-align: top;
}
.info-container {
  width: 1200px;
  margin: 0 auto;
  padding: 100px 0 150px;
}
.info-block-1 {
  display: flex;
}
.block-title {
  font-size: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 25px;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
}
.latest-MA {
  display: flex;
  margin-bottom: 40px;
}
.latest-MA .img {
  vertical-align: top;
  width: 330px;
  height: 220px;
}
.latest-MA .details {
  width: 260px;
  margin-left: 30px;
  margin-right: 60px;
}
.latest-MA .details .title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 20px;
  line-height: 26px;
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
}
.latest-MA .details .title:hover {
  color: rgba(251, 140, 10, 1);
}
.latest-MA .details .summary {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  margin-bottom: 19px;
}
.latest-MA .details .time {
  font-size: 14px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 12px;
  margin-bottom: 11px;
}
.latest-MA .details .address {
  font-size: 14px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 16px;
  margin-bottom: 26px;
}
.latest-MA .details .signUp {
  display: block;
  width: 80px;
  height: 32px;
  background: rgba(251, 140, 10, 1);
  border-radius: 4px;
  text-align: center;
  line-height: 32px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  user-select: none;
}
.more-MA {
  width: 68px;
  height: 28px;
  background: rgba(242, 242, 242, 1);
  border: 1px solid rgba(183, 183, 183, 1);
  border-radius: 14px;
  text-align: center;
  line-height: 28px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  margin-left: 20px;
  display: inline-block;
}
.more-MA::after {
  content: "";
  display: inline-block;
  background: url(../../assets/img/willDel/全部.png);
  width: 6px;
  height: 10px;
  margin-left: 10px;
}
.old-MA-list {
  width: 620px;
  margin-top: 18px;
}
.old-MA-item {
  margin-bottom: 20px;
  display: flex;
}
.old-MA-item .img {
  width: 120px;
  height: 80px;
  border-radius: 4px;
  vertical-align: top;
  margin-right: 20px;
}
.old-MA-item .details {
  width: 480px;
}
.old-MA-item .details .title {
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 14px;
  margin: 8px 0 18px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: block;
}
.old-MA-item .details .title:hover {
  color: rgba(251, 140, 10, 1);
}
.old-MA-item .details .summary {
  font-size: 14px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 20px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.dynamic-list {
  width: 520px;
}
.dynamic-list .dynamic-item {
  margin-bottom: 30px;
  display: flex;
}
.dynamic-list .dynamic-img {
  width: 150px;
  height: 100px;
  margin-right: 20px;
}
.dynamic-list .dynamic-content {
  width: 350px;
  vertical-align: top;
}
.dynamic-list .dynamic-content .title {
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 14px;
  /* margin-bottom: 8px; */
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 36px;
}
.dynamic-list .dynamic-content .title:hover {
  color: rgba(251, 140, 10, 1);
}
.dynamic-list .dynamic-content .summary {
  font-size: 14px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 20px;
  margin-bottom: 6px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 30px;
}
.dynamic-list .dynamic-content .time {
  font-size: 14px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
}
.info-block-2 {
  margin-top: 120px;
}
.info-type {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 44px;
  box-sizing: border-box;
  margin-bottom: 75px;
}
.info-type li {
  text-align: center;
  list-style-type: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-type li .type {
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  margin-top: 31px;
}
.info-type li .type.activeType {
  color: rgba(251, 140, 10, 1);
}
.newsContentList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.newsContentList .newsContentItem {
  width: 570px;
  margin-right: 60px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.newsContentList .newsContentItem:nth-child(even) {
  margin-right: 0;
}
.newsContentList .newsContentItem .date {
  display: inline-block;
  width: 100px;
  height: 96px;
  background: rgba(238, 238, 238, 1);
  border-radius: 4px;
  font-size: 14px;
  color: #000;
  text-align: center;
  line-height: 96px;
}
.newsContentList .newsContentItem .date .day {
  font-size: 30px;
}
.newsContentList .newsContentItem .content {
  width: 450px;
}
.newsContentList .newsContentItem .content .title {
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 48px;
}
.newsContentList .newsContentItem .content .title:hover {
  color: rgba(251, 140, 10, 1);
}
.newsContentList .newsContentItem .content .desc {
  font-size: 14px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 20px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.bf-line {
  display: inline-block;
  width: 546px;
  height: 1px;
  background: rgba(226, 226, 226, 1);
  vertical-align: middle;
}
.more-btn {
  width: 72px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  margin-top: 20px;
  display: inline-block;
  background: rgba(242, 242, 242, 1);
  border: 1px solid rgba(183, 183, 183, 1);
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
  cursor: pointer;
}
.more-btn::after {
  content: "";
  display: inline-block;
  background: url(../../assets/img/willDel/全部.png);
  width: 6px;
  height: 10px;
  margin-left: 10px;
}
</style>