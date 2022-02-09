<template>
  <div>
    图片压缩方法：
    <br/>
    <br/>
    <br/>
    <Monaco
      ref="monaco"
      :propValue="monacoVal"
      :propEditorOptions="{ readOnly: true }"
      propLanguage="JavaScript"
    />
    <el-button type="primary" @click="getInfo">Get content</el-button>
  </div>
</template>

<script>
import Monaco from "@/components/monaco";

export default {
  name: "compressImg",
  components: {
    Monaco,
  },
  data() {
    return {
      monacoVal: "",
    };
  },
  mounted() {
    this.getCode();
  },
  methods: {
    getInfo() {
      this.$notify({
        title: "monaco内容",
        message: `${this.$refs.monaco.codes}`,
        position: "top-right",
      });
    },
    getCode() {
      import("@/common/utils/compressImg.js").then((res) => {
        let keys = Object.keys(res);
        let fns = keys
          .reduce((initial, next) => {
            return initial.concat(res[next]);
          }, [])
          .join("\n");
        this.monacoVal = fns;
      });
    },
  },
};
</script>

<style scoped>
</style>