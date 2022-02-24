<template>
  <div>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项2</el-radio>
  </div>
</template>

<script>
import aComp from "./a.vue";//
export default {
  data() {
    return {
      radio: "1",
    };
  },
  mounted() {},
  created() {},
  computed: {
    
  },
  components: { 
    "aComp":require('./a.vue');// 不会被解析
  },
  watch: {
    radio(newVal) {
      console.log(newVal);
    },
  },
}
</script>