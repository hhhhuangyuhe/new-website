<template>
  <div id="fyw-layout">
    <Header></Header>
    <div id="page-container">
      <nuxt />
    </div>
    <Footer></Footer>
    <!-- <Right class="right-bar"></Right> -->
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
// import Right from '../components/right';
export default {
  components: {
    Header,
    Footer,
    // Right
  },
};
</script>
<style>
#fyw-layout {
  min-width: 1200px;
  margin: 0 auto;
}
#page-container {
  margin-top: 90px;
  min-height: calc(100vh - 610px);
  position: relative;
  width: auto;
}
.right-bar {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 98;
}
@media screen and (min-width: 1440px) {
  #page-container {
    margin-top: 90px;
    min-height: calc(100vh - 610px);
  }
}
@media screen and (max-width: 1439px) {
  #page-container {
    margin-top: 70px;
    min-height: calc(100vh - 590px);
  }
}
</style>
