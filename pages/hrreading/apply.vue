<template>
  <div id="apply">
    <div class="bg">
      <img src="../../assets/img/HRUnscramble/组 23.png" class="bg1" />
      <img src="../../assets/img/HRUnscramble/组 22.png" class="bg2" />
      <div class="mianBox">
        <div class="boxBlock leftInfo">
          <img src="../../assets/img/HRUnscramble/title2.png" class="title" />
          <img
            src="../../assets/img/HRUnscramble/本期要闻.png"
            class="title2"
          />
          <p class="info">【专题】人才吸引和保留的新趋势——员工体验</p>
          <p class="info">【聚焦】2020年人力资源外包的发展现状及发展趋势</p>
          <p class="info">【访谈】以弹性化措施应对特殊时期人力资源管理</p>
          <p class="info">
            【探讨】国有企业混合所有制改革，人力资源部门应该如何发挥价值？
          </p>
        </div>
        <div class="boxBlock rightForm">
          <i-input
            placeholder="您的称呼"
            clearable
            style="margin-bottom: 20px"
            v-model="name"
          >
            <Avatar :src="icon_name" slot="prefix" size="small"></Avatar>
          </i-input>
          <i-input
            placeholder="您的职位"
            clearable
            style="margin-bottom: 20px"
            v-model="position"
          >
            <Avatar :src="icon_position" slot="prefix" size="small"></Avatar>
          </i-input>
          <i-input
            placeholder="您的手机号码"
            clearable
            style="margin-bottom: 20px"
            v-model="phone"
          >
            <Avatar :src="icon_phone" slot="prefix" size="small"></Avatar>
          </i-input>
          <i-input
            placeholder="您的邮箱"
            clearable
            style="margin-bottom: 20px"
            v-model="email"
          >
            <Avatar :src="icon_email" slot="prefix" size="small"></Avatar>
          </i-input>
          <i-input
            placeholder="企业名称"
            clearable
            style="margin-bottom: 20px"
            v-model="company"
          >
            <Avatar :src="icon_company" slot="prefix" size="small"></Avatar>
          </i-input>
          <i-select
            placeholder="选择企业规模"
            v-model="scare"
            clearable
            style="margin-bottom: 20px"
          >
            <Avatar :src="icon_scale" slot="prefix" size="small"></Avatar>
            <i-option
              v-for="item in scareList"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</i-option
            >
          </i-select>
          <i-input placeholder="填写邮寄地址" clearable v-model="address">
            <Avatar :src="icon_address" slot="prefix" size="small"></Avatar>
          </i-input>
          <div v-on:click="Apply" class="applyBtn">立即申请</div>
        </div>
      </div>
    </div>
    <div class="shadow" v-on:click.self="showit = false" v-if="showit">
      <div class="applySuccess">
        <img src="../../assets/img/HRUnscramble/完成.png" class="succIcon" />
        <p>感谢您的关注！</p>
        <p>欢迎添加泛员网官方微信号：</p>
        <p class="yellow">xiaofanup2019</p>
        <p>跟进申请状态哦~</p>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  layout: "fywheader",
  head() {
    return {
      title: "HR解读-泛员网",
    };
  },
  components: {},
  data() {
    return {
      showit: false,
      name: "",
      position: "",
      phone: "",
      email: "",
      company: "",
      scare: "",
      address: "",
      icon_name: require("../../assets/img/HRUnscramble/姓名.png"),
      icon_position: require("../../assets/img/HRUnscramble/职位.png"),
      icon_phone: require("../../assets/img/HRUnscramble/手机.png"),
      icon_email: require("../../assets/img/HRUnscramble/邮箱.png"),
      icon_company: require("../../assets/img/HRUnscramble/公司.png"),
      icon_scale: require("../../assets/img/HRUnscramble/规模指标.png"),
      icon_address: require("../../assets/img/HRUnscramble/地址 .png"),
      scareList: [
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
    };
  },
  methods: {
    Apply: function () {
      var _this = this;
      if (
        this.name == "" ||
        this.name == undefined ||
        this.position == "" ||
        this.position == undefined ||
        this.phone == "" ||
        this.phone == undefined ||
        this.email == "" ||
        this.email == undefined ||
        this.company == "" ||
        this.company == undefined ||
        this.scare == "" ||
        this.scare == undefined ||
        this.address == "" ||
        this.address == undefined
      ) {
        _this.$Modal.warning({
          title: "提示",
          content: "请完整填写信息",
        });
        return;
      }
      const params = {
        model: JSON.stringify({
          ID: 0,
          CompanyName: this.company,
          CompanyRange: this.scare,
          LinkName: this.name,
          LinkPhone: this.phone,
          Email: this.email,
          Position: this.position,
          AddressRemark: this.address,
          FunnyContent: "",
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
      _this.showit = true;
    },
  },
  watch: {},
  mounted() {},
};
</script>
<style>
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #bfbfbf;
  font-size: 16px;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #bfbfbf;
  font-size: 16px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #bfbfbf;
  font-size: 16px;
}
.bg {
  position: relative;
  min-height: 900px;
  background: rgba(228, 239, 255, 0.5);
}
.bg .bg1 {
  position: absolute;
  top: 178px;
  left: 54px;
}
.bg .bg2 {
  position: absolute;
  top: 43px;
  right: 0;
}
.mianBox {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.mianBox .boxBlock {
  display: inline-block;
  vertical-align: top;
}
.mianBox .leftInfo {
  width: 500px;
  margin: 80px 100px 0 30px;
  position: relative;
}
.mianBox .rightForm {
  margin: 89px 30px 0 0;
  width: 540px;
  height: 600px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 18px 2px rgba(221, 231, 241, 1);
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
  padding: 46px 50px;
}
.mianBox .leftInfo .title {
  margin-bottom: 26px;
}
.mianBox .leftInfo .title2 {
  margin-bottom: 29px;
}
.mianBox .leftInfo .info {
  font-size: 16px;
  /* font-family: Source Han Sans SC; */
  font-weight: 400;
  color: rgba(70, 80, 94, 1);
  line-height: 16px;
  margin-bottom: 26px;
}
.mianBox .rightForm .row {
  width: 440px;
  height: 46px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(225, 225, 225, 1);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0px 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.mianBox .rightForm .row .row-icon {
  width: 24px;
  height: 24px;
  margin-right: 20px;
}
.mianBox .rightForm .value-input {
  width: 330px;
  height: 100%;
  font-size: 16px;
}
.applyBtn {
  width: 440px;
  height: 46px;
  line-height: 46px;
  background: linear-gradient(90deg, rgba(240, 96, 0, 1), rgba(240, 158, 0, 1));
  color: #ffffff;
  border-radius: 24px;
  text-align: center;
  font-size: 18px;
  /* font-family: Source Han Sans SC; */
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 20px;
  cursor: pointer;
}
.shadow {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  top: 0;
  left: 0;
}
.shadow .applySuccess {
  width: 520px;
  height: 360px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 64px 0;
  text-align: center;
}
.applySuccess .succIcon {
  margin-bottom: 40px;
  width: 80px;
}
.applySuccess p {
  font-size: 18px;
  /* font-family: Source Han Sans SC; */
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 18px;
  margin-bottom: 12px;
}
.applySuccess p.yellow {
  color: #ff8000;
}

.rightForm .ivu-input {
  height: 40px;
  font-size: 14px;
}
.rightForm textarea.ivu-input {
  height: 80px;
  resize: none;
}
.rightForm .ivu-input-prefix,
.ivu-input-suffix {
  width: 20px;
  height: 20px;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.rightForm .ivu-input-with-prefix {
  padding-left: 60px;
}
.rightForm .ivu-avatar-small {
  border-radius: initial;
  width: 20px;
  height: 20px;
}
.rightForm .ivu-select-single .ivu-select-selection {
  height: 40px;
  padding: 0 20px;
}
.rightForm .ivu-select-single .ivu-select-selection .ivu-select-placeholder,
.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.rightForm .ivu-select-single .ivu-select-prefix {
  padding: 0 12px 0 0;
}
.rightForm .ivu-select-item {
  font-size: 14px !important;
}
.rightForm .ivu-input-icon {
  width: 40px;
  height: 40px;
  line-height: 40px;
}
.ivu-icon-ios-information-circle:before,
.ivu-icon-ios-checkmark-circle:before,
.ivu-icon-ios-alert:before {
  font-size: 24px;
}
.ivu-modal-confirm-head-title {
  font-weight: normal;
}
</style>