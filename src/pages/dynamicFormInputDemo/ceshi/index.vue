<template>
  <el-form-item
    label="密码"
    prop="age"
    :rules="{ validator: validTNumber, trigger: 'blur' }"
  >
    <el-input @input="onChange" :value="value"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ceshihah",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: String,
    },
    rules: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    onChange(val) {
      this.$emit("change", val);
    },
    validTNumber: function (rule, value, callback) {
      callback(new Error("请输入正确格式的手机号码"));
    },
  },
};
</script>
<style lang='scss' scoped>
</style>