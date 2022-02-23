<template>
  <div>
    <div ref="instanceBox" class="showChild"></div>
    <Monaco @change="(code) => editorInput(code)" v-model="code" />
    <el-button type="primary" @click="getInfo">Get content</el-button>
  </div>
</template>

<script>
import Monaco from "@/components/monaco";
import apiClient from "@/common/apiclient/perfectApiclient/perfectApiclient";

export default {
  name: "index",
  components: {
    Monaco,
  },
  mounted() {
    this.getDefaultVal();
  },
  data() {
    return {
      code: "",
    };
  },
  methods: {
    getInfo() {
      this.$notify({
        title: "monaco内容",
        message: `${this.$refs.monaco.codes}`,
        position: "top-right",
      });
    },

    editorInput(code = "") {
      if(!code)return
      try {
        let codeStrig = code.replace(/\n+/g, "").replace(/\s+/g, " ");

        let templateString = codeStrig.match(/<template>(.*)<\/template>/)[1];

        let dataString = codeStrig
          .match(/export default(.*)<\/script>/)[1]
          .replace(/\s\/\/.*?\s/g, "")
          .replace(/\scomponents:{.*?},/g, "");
        let dataObj = eval(`(${dataString})`);

        let newComponent = this.$extendComps({
          template: templateString,
          ...dataObj,
        });

        let instance = new newComponent();

        // 父节点
        let parent = this.$refs.instanceBox;
        parent.childNodes.forEach((ele) => {
          parent.removeChild(ele);
        });
        parent.appendChild(instance.$mount().$el);
      } catch (error) {
        console.error(error);
        this.$message({ type: "error", message: "编辑的代码存在问题" });
      }
    },

    getDefaultVal() {
      apiClient
        .request({
          url: "/passiveRequest/monacoDemo.vue",
          type: "get",
          params: {},
        })
        .then((res) => {
          this.code = res;
        });
    },
  },
};
</script>
<style scoped>
.showChild{
  height: 100px;
}
</style>