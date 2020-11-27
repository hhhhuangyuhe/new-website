<template>
  <div id="information-list">
    <img src="../../assets/img/willDel/informationbanner.png" class="banner" />
    <div class="info-list-container">
      <div class="list-container">
        <p class="path">
          <nuxt-link to="/" class="link">首页</nuxt-link>>
          <nuxt-link to="/information" class="link">HR智汇</nuxt-link>
          > {{listData.CurItem._title}}
        </p>
        <div class="list-content">
          <div class="list-item" v-for="item in NewsList" :key="item._id">
            <nuxt-link
              :to="'/information/inner?id=' + item._id + '&cateId=' + item._categoryid"
              class="list-item-img"
            >
              <img :src="item._newImgurl" />
            </nuxt-link>
            <div class="main">
              <nuxt-link
                class="title"
                :title="item.Title"
                :to="'/information/inner?id=' + item._id + '&cateId=' + item._categoryid"
              >{{item._title}}</nuxt-link>
              <p class="summary" :title="item.Summary">{{item._summary}}</p>
              <p class="time">{{formatTo(item._addtime)}}</p>
              <p class="address">{{item._address}}</p>
            </div>
          </div>
          <Page :total="totalNum" :current="currentPage" show-total @on-change="changePage"/>
        </div>
      </div>
      <div class="relative-info">
        <p class="title">文章类型</p>
        <ul class="paperTypeList">
          <li
            v-for="item in PaperTypeList"
            :key="item._id"
            class="paperItem"
            :class="{'active':listData.CurItem._title == item.name}"
          >
            <nuxt-link :to="'/information/list?pageIndex=1&pageSize=10&cateId=' + item.cateId">{{item.name}}</nuxt-link>
          </li>
        </ul>
        <p class="title" v-show="HotItem != [] || HotItem != ''">热门文章</p>
        <ul class="hotPaperList">
          <li v-for="(item,index) in HotItem" :key="item._id" class="hotPaperItem" v-if="index < 3">
            <nuxt-link :to="'/information/inner?id=' + item._id + '&cateId=' + item._categoryid">
              <img :src="item._newImgurl" />
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
import OldApply from '../../components/information_inner_apply'
export default {
  layout: "fyw",
  components: {
      OldApply
  },
  watchQuery: ["pageIndex", "pageSize", "cateId"],
  async asyncData({ app, query }) {
    let { data } = await app.$axios.get(
      `/api/NewActive/ListData?pageIndex=` +
        query.pageIndex +
        `&pageSize=` +
        query.pageSize +
        `&cateId=` +
        query.cateId
    );
    let NewsList = data.NewsList;
    let HotItem = data.HotItem;
    NewsList.forEach((item) => {
      item._newImgurl = item._imgurl.replace(/https/g, "http");
    });
    HotItem.forEach((item) => {
      item._newImgurl = item._imgurl.replace(/https/g, "http");
    });
    // console.log(data);
    let PaperTypeList = [];
    for (let i in data.ItemList) {
      let it = new Object();
      it.cateId = data.ItemList[i]._id;
      it.name = data.ItemList[i]._title;
      if(data.ItemList[i]._title != '活动回顾'){
        PaperTypeList.push(it);
      }
    }
    return {
      listData: data,
      NewsList: NewsList,
      HotItem: HotItem,
      PaperTypeList: PaperTypeList,
      totalNum: data.ItemNewsCount[data.CurItem._callindex],
      currentPage: Number(query.pageIndex)
    };
  },
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
    changePage(page){
        this.$router.push({ path: `/information/list`,query: { pageIndex: page, pageSize: 10, cateId: this.$route.query.cateId }})
    },
    formatTo(date) {
      var d = new Date(date);
      return (
        d.getFullYear() + "-" + parseInt(d.getMonth() + 1) + "-" + d.getDate()
      );
    },
    getTheMonth(d) {
      var dd = new Date(d);
      var m = parseInt(dd.getMonth() + 1);
      if (m < 10) {
        m = "0" + m;
      }
      return m;
    },
    getTheDay(d) {
      var dd = new Date(d);
      var day = dd.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      return day;
    },
  },
};
</script>

<style scoped>
#information-list .banner {
  width: 100%;
  vertical-align: top;
}
.info-list-container {
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0 40px;
  display: flex;
}
.list-container {
  width: 900px;
}
.list-container .path {
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 39px;
}
.list-container .path a {
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.list-container .path a:hover {
  color: #fb8c0a;
}
.relative-container {
  width: 300px;
}
.list-content .list-item {
  margin-bottom: 39px;
  display: flex;
}
.list-item .list-item-img {
  width: 240px;
  height: 160px;
  margin-right: 30px;
  cursor: pointer;
  overflow: hidden;
}
.list-item .list-item-img > img {
  width: 240px;
  height: 160px;
  transition: all 0.2s;
}
.list-item .list-item-img > img:hover {
  transform: scale(1.1);
}
.list-content .list-item .main {
  width: 550px;
  height: 160px;
  position: relative;
}
.list-content .list-item .main .title {
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 19px;
  margin-top: 2px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.list-content .list-item .main .title:hover {
  color: #fb8c0a;
  cursor: pointer;
}
.list-content .list-item .main .content {
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 30px;
}
.list-content .list-item .main .time {
  font-size: 14px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 12px;
  position: absolute;
  bottom: 0px;
  left: 0;
}
.relative-info .title {
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 20px;
}
.relative-info ul.paperTypeList {
  margin-top: 25px;
  margin-bottom: 30px;
}
.relative-info ul.paperTypeList li {
  list-style-type: none;
  display: block;
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  padding-left: 20px;
  line-height: 40px;
  cursor: pointer;
  border-left: 2px solid #ffffff;
}
.relative-info ul.paperTypeList li > a {
  display: block;
  color: inherit;
  font-size: 14px;
  color: #515a6e;
  user-select: none;
}
.relative-info ul.paperTypeList li.active {
  background: rgba(242, 242, 242, 1);
  border-left: 2px solid #fb8c0a;
}
.relative-info ul.paperTypeList li:hover {
    background: rgba(242,242,242,1);
}
.relative-info ul.hotPaperList {
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
}
.relative-info ul.hotPaperList li.hotPaperItem .shadowBox {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100px;
  background: linear-gradient(
    0deg,
    rgba(12, 14, 21, 1) 0%,
    rgba(18, 20, 26, 0) 100%
  );
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
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
  position: absolute;
  bottom: 18px;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.ivu-page{
    text-align: center;
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