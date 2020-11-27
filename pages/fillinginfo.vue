<template>
  <div id="filling-info">
    <div class="info-content-page">
      <div class="info-adv">
        <p class="title">500+企业的共同选择</p>
        <p class="item">
          <img src="../assets/img/fillingInfo/行业.png" />
          <span>15年行业经验，300+城市落地服务</span>
        </p>
        <p class="item">
          <img src="../assets/img/fillingInfo/安全保障.png" />
          <span>ISO9001和ISO27001管理安全体系认证保障</span>
        </p>
        <p class="item">
          <img src="../assets/img/fillingInfo/成就.png" />
          <span>人力资源管理相关专利9项，取得软件著作权75项，商标31项</span>
        </p>
        <p class="item">
          <img src="../assets/img/fillingInfo/客户经理.png" />
          <span>专属客户经理顾问式服务</span>
        </p>
        <p class="item">
          <img src="../assets/img/fillingInfo/客服.png" />
          <span>全国在线客服中心24小时响应</span>
        </p>
      </div>
      <div class="info-main">
        <p class="title">立即预约体验</p>
        <i-input
          placeholder="称呼/男士/女士"
          clearable
          style="margin-bottom: 20px"
          v-model="name"
        >
          <Avatar :src="icon_name" slot="prefix" size="small"></Avatar>
        </i-input>
        <i-input
          placeholder="您的联系方式"
          clearable
          style="margin-bottom: 20px"
          v-model="phone"
        >
          <Avatar :src="icon_phone" slot="prefix" size="small"></Avatar>
        </i-input>
        <i-input
          placeholder="您的企业邮箱"
          clearable
          style="margin-bottom: 20px"
          v-model="email"
        >
          <Avatar :src="icon_email" slot="prefix" size="small"></Avatar>
        </i-input>
        <i-input
          placeholder="您的企业名称"
          clearable
          style="margin-bottom: 20px"
          v-model="company"
        >
          <Avatar :src="icon_company" slot="prefix" size="small"></Avatar>
        </i-input>
        <i-select
          placeholder="选择企业规模"
          v-model="scale"
          clearable
          style="margin-bottom: 20px"
        >
          <Avatar :src="icon_scale" slot="prefix" size="small"></Avatar>
          <i-option
            v-for="item in scaleList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</i-option
          >
        </i-select>
        <!-- <i-input
          placeholder="您感兴趣的内容"
          clearable
          style="margin-bottom: 20px"
          v-model="funnyContent"
        >
          <Avatar :src="icon_funnyContent" slot="prefix" size="small"></Avatar>
        </i-input> -->
        <i-select
          placeholder="选择您感兴趣的内容"
          v-model="funnyContent"
          clearable
          multiple
          style="margin-bottom: 20px"
        >
          <Avatar :src="icon_funnyContent" slot="prefix" size="small"></Avatar>
          <i-option
            v-for="item in funnyContentList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</i-option
          >
        </i-select>
        <i-input
          placeholder="请输入备注"
          clearable
          style="margin-bottom: 20px"
          type="textarea"
          v-model="remark"
        >
        </i-input>
        <div class="confirm-btn-bp" @click="submitForm">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  layout: "fyw",
  components: {},
  head() {
    return {
      title: "预约体验-泛员网",
    };
  },
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      company: "",
      scale: "",
      funnyContent: "",
      remark: "",
      scaleList: [
        {
          value: "10000人以上",
          label: "10000人以上",
        },
        {
          value: "5000人-10000人",
          label: "5000人-10000人",
        },
        {
          value: "1000人-5000人",
          label: "1000人-5000人",
        },
        {
          value: "500人-1000人",
          label: "500人-1000人",
        },
        {
          value: "100人-500人",
          label: "100人-500人",
        },
        {
          value: "100人以下",
          label: "100人以下",
        },
      ],
      funnyContentList: [
        {
          value: "员工关系服务",
          label: "员工关系服务",
        },
        {
          value: "员工体检",
          label: "员工体检",
        },
        {
          value: "全国社保外包",
          label: "全国社保外包",
        },
        {
          value: "补充员工保障",
          label: "补充员工保障",
        },
        {
          value: "薪酬核算",
          label: "薪酬核算",
        },
        {
          value: "节日福利",
          label: "节日福利",
        },
        {
          value: "薪资代发",
          label: "薪资代发",
        },
        {
          value: "积分福利",
          label: "积分福利",
        },
        {
          value: "考勤与休假",
          label: "考勤与休假",
        },
        {
          value: "HR解读",
          label: "HR解读",
        },
      ],
      icon_name: require("../assets/img/fillingInfo/姓名.png"),
      icon_phone: require("../assets/img/fillingInfo/手机.png"),
      icon_email: require("../assets/img/fillingInfo/邮箱.png"),
      icon_company: require("../assets/img/fillingInfo/企业.png"),
      icon_scale: require("../assets/img/fillingInfo/规模指标.png"),
      icon_funnyContent: require("../assets/img/fillingInfo/感兴趣.png"),
    };
  },
  methods: {
    submitForm() {
      if (
        this.name == "" ||
        this.phone == "" ||
        this.email == "" ||
        this.company == "" ||
        this.scale == "" ||
        this.funnyContent == ""
      ) {
        this.$Modal.info({
          title: "请填写完整信息",
        });
        return;
      }
      const params = {
        model: JSON.stringify({
          ID: 0,
          LinkName: this.name,
          LinkPhone: this.phone,
          Email: this.email,
          CompanyName: this.company,
          CompanyRange: this.scale,
          FunnyContent: this.funnyContent.join(","),
          AddressRemark: this.remark,
          Type: "服务",
          CreateDate: new Date(),
          IsDelete: 0,
        }),
      };
      this.$axios({
        method: "post",
        url: `/pc/Form/AddCustomerInfo`,
        data: qs.stringify(params),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }).then((res) => {
        console.log(res);
      });
      this.$Modal.success({
        title: "提交成功！",
      });
    },
  },
  mounted() {},
};
</script>

<style>
#filling-info {
  background: url(../assets/img/fillingInfo/messagebg.png);
  background-size: cover;
  position: relative;
}
.info-content-page {
  width: 1040px;
  margin: 0 auto 0;
  padding: 87px 0 0;
  display: flex;
  justify-content: space-between;
}
.info-adv .title {
  font-size: 36px;
  line-height: 34px;
  font-weight: 300;
  color: #000000;
  margin: 32px 0 60px;
}
.info-adv .item {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}
.info-adv .item > img {
  width: 36px;
  margin-right: 20px;
}
.info-adv .item > span {
  font-size: 16px;
  font-weight: 400;
  color: #555555;
}
.info-main {
  width: 480px;
  /* height: 662px; */
  background: #ffffff;
  box-shadow: 0px 0px 18px 2px rgba(178, 212, 246, 0.5);
  border-radius: 20px;
  padding: 60px 80px;
}
.info-main .title {
  font-size: 24px;
  line-height: 23px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 20px;
  text-align: center;
}
@media screen and (min-width: 1440px) {
  #filling-info {
    height: 846px;
  }
}
@media screen and (max-width: 1439px) {
  #filling-info {
    height: 634.5px;
  }
}
.info-main .ivu-input {
  height: 40px;
  font-size: 14px;
}
.info-main textarea.ivu-input {
  height: 80px;
  resize: none;
}
.info-main .ivu-input-prefix,
.ivu-input-suffix {
  width: 20px;
  height: 20px;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.info-main .ivu-input-with-prefix {
  padding-left: 60px;
}
.info-main .ivu-avatar-small {
  border-radius: initial;
  width: 20px;
  height: 20px;
}
.info-main .ivu-select-single .ivu-select-selection,
.info-main .ivu-select-multiple .ivu-select-selection {
  min-height: 40px;
  padding: 0 20px;
}
.info-main .ivu-select-single .ivu-select-selection .ivu-select-placeholder,
.ivu-select-single .ivu-select-selection .ivu-select-selected-value,
.info-main .ivu-select-multiple .ivu-select-selection .ivu-select-placeholder,
.ivu-select-multiple .ivu-select-selection .ivu-select-selected-value {
  min-height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.info-main .ivu-select-single .ivu-select-prefix,
.info-main .ivu-select-multiple .ivu-select-prefix {
  padding: 0 12px 0 0;
}
.info-main .ivu-select-item {
  font-size: 14px !important;
}
.info-main .ivu-input-icon {
  width: 40px;
  height: 40px;
  line-height: 40px;
}
.confirm-btn-bp {
  width: 320px;
  height: 40px;
  margin: 0 auto;
  background: rgba(251, 140, 10, 1);
  background: linear-gradient(to right, #ff8900, #ff5400);
  background: url(../assets/img/fillingInfo/圆角矩形28.png);
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;
}
.confirm-btn-bp:hover {
  opacity: 0.8;
}
.ivu-icon-ios-information-circle:before,
.ivu-icon-ios-checkmark-circle:before {
  font-size: 24px;
}
.ivu-modal-confirm-head-title {
  font-weight: normal;
}
</style>