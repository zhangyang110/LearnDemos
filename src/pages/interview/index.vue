<template>
  <el-form
    :model="ruleForm"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <ceshiForm
      v-model="ruleForm.age"
      prop="age"
  />
  </el-form>
</template>
<script>
import ceshiForm from "./ceshi";
export default {
  name: "interview",
  components: {
    ceshiForm,
  },
  watch: {
    ruleForm: {
      deep: true,
      handler: (a) => {
        console.log(666);
        console.log(a);
      },
    },
  },
  data() {
    // var validTNumber = (rule, value, callback) => {
    //   console.log(rule, value, 7777777);
    //   if (value === "") {
    //     callback(new Error("请再次输入密码"));
    //   } else if (value !== this.ruleForm.pass) {
    //     callback(new Error("两次输入密码不一致!"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      // validTNumber,
      ruleForm: {
        age: "",
      },
    };
  },
  methods: {
    // validTNumber: function (rule, value, callback) {
    //   console.log(rule, value, 7777777);
    //   callback(new Error("请输入正确格式的手机号码"));
    // },
  },
};
</script>

<style scoped>
</style>