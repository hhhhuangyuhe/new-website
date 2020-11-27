<template>
  <div id="inner-apply">
    <p class="title">获取更多人力资源专业资讯 与分析报告</p>
    <i-input placeholder="您的称呼" clearable style="margin-bottom: 20px;" v-model="name">
      <Avatar :src="icon_name" slot="prefix" size="small"></Avatar>
    </i-input>
    <i-input placeholder="您的联系电话" clearable style="margin-bottom: 20px;" v-model="phone">
      <Avatar :src="icon_phone" slot="prefix" size="small"></Avatar>
    </i-input>
    <i-input placeholder="企业名称" clearable style="margin-bottom: 20px;" v-model="company">
      <Avatar :src="icon_company" slot="prefix" size="small"></Avatar>
    </i-input>
    <i-select placeholder="选择企业规模" v-model="scare" clearable style="margin-bottom: 20px;">
      <Avatar :src="icon_scare" slot="prefix" size="small"></Avatar>
      <i-option v-for="item in scareList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
    </i-select>
    <i-input placeholder="您感兴趣的内容" clearable style="margin-bottom: 20px;" v-model="funnyContnet">
      <Avatar :src="icon_funnyContnet" slot="prefix" size="small"></Avatar>
    </i-input>
    <div class="confirm-btn" @click="submitForm">提交</div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      name: "",
      phone: "",
      company: "",
      scare: "",
      funnyContnet: "",
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
      icon_name: require("../assets/img/willDel/old_apply/姓名.png"),
      icon_phone: require("../assets/img/willDel/old_apply/手机.png"),
      icon_company: require("../assets/img/willDel/old_apply/公司.png"),
      icon_scare: require("../assets/img/willDel/old_apply/规模指标.png"),
      icon_funnyContnet: require("../assets/img/willDel/old_apply/公司.png"),
    };
  },
  methods: {
    submitForm() {
      if (this.name == "" || this.phone == "") {
        this.$Modal.info({
          title: "请填写姓名和联系电话",
        });
        return;
      }
      const params = {
        model: JSON.stringify({
          ID: 0,
          CompanyName: this.company,
          CompanyRange: this.scale,
          LinkName: this.name,
          LinkPhone: this.phone,
          FunnyContent: this.funnyContnet,
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
};
</script>

<style>
#inner-apply {
  width: 300px;
  height: 480px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 0px rgba(225, 233, 242, 1);
  border-radius: 4px;
  margin-bottom: 30px;
  padding: 30px;
}
#inner-apply .title {
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 29px;
  padding: 0;
  text-align: center;
  line-height: 24px;
}
#inner-apply .ivu-input {
  height: 40px;
  font-size: 14px;
}
#inner-apply .ivu-input-prefix,
.ivu-input-suffix {
  width: 24px;
  height: 24px;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
#inner-apply .ivu-input-with-prefix {
  padding-left: 60px;
}
#inner-apply .ivu-avatar-small {
  border-radius: initial;
}
#inner-apply .ivu-select-single .ivu-select-selection {
  height: 40px;
  padding: 0 20px;
}
#inner-apply .ivu-select-single .ivu-select-selection .ivu-select-placeholder,
.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
#inner-apply .ivu-select-single .ivu-select-prefix {
  padding: 0 12px 0 0;
}
#inner-apply .ivu-select-item {
  font-size: 14px !important;
}
#inner-apply .ivu-input-icon {
  width: 40px;
  height: 40px;
  line-height: 40px;
}
.confirm-btn {
  width: 240px;
  height: 40px;
  background: rgba(251, 140, 10, 1);
  border-radius: 4px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;
}
.confirm-btn:hover {
  background: rgb(226 122 1);
  transform: translateY(2%);
}
.ivu-icon-ios-information-circle:before,.ivu-icon-ios-checkmark-circle:before {
  font-size: 24px;
}
.ivu-modal-confirm-head-title{
  font-weight: normal;
}
</style>