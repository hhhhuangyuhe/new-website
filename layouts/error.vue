<template>
  <div id="error-page">
    <div>
      <h1 class="fof">404</h1>
      <h1 class="sorry">抱歉，你要查找的页面找不到。</h1>
      <p class="back">返回<nuxt-link to="/" class="lk">首页</nuxt-link></p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "fyw",
};
</script>
<style scoped>
#error-page {
  height: 360px;
  text-align: center;
  padding-top: 30px;
}
.fof {
  font-size: 66px;
}
.sorry {
  font-size: 36px;
}
.back {
  font-size: 16px;
  margin-top: 40px;
}
.lk {
  font-size: 16px;
  margin-left: 8px;
  text-decoration: underline;
}
</style>