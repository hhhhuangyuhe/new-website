<template>
  <div id="nsso">
    <img src="@/assets/img/product/社保外包/组 1537@2x.png" class="banner" />
    <div class="zone zoneOne">
      <p class="zoneTitle">大中型企业社保管理面临的难题</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "fyw",
  components: {},
  data() {
    return {
      bannerHeight: 0,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.banner {
  width: 100%;
}
.zone {
  width: 1200px;
  margin: 0 auto;
}
.zoneOne {
  padding: 100px 0;
}
.zoneTitle {
  font-size: 44px;
  font-family: 思源黑体;
  font-weight: 500;
  text-align: center;
  color: #38424f;
  letter-spacing: 4px;
  line-height: 65px;
  margin-bottom: 20px;
}
.zoneTitle::after {
  content: "";
  width: 78px;
  height: 10px;
  background: url("../../assets/img/product/社保外包/重复网格 1.png");
  background-size: cover;
  display: block;
  margin: 0 auto;
}
</style>