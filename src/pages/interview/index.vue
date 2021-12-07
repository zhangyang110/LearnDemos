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
        console.log(a);
      },
    },
  },
  data() {
    return {
      ruleForm: {
        age: "",
      },
    };
  },
};
</script>

<style scoped>
</style>