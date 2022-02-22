<template>
  <div class="container">
    <editor
      v-model="content"
      @init="editorInit"
      lang="javascript"
      theme="chrome"
      width="700"
      height="600"
      :options="{
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        tabSize: 6,
        fontSize: 14,
        showPrintMargin: false, //去除编辑器里的竖线
      }"
    ></editor>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
    };
  },

  components: {
    editor: require("vue2-ace-editor"),
  },

  computed: {},

  mounted() {
    // this.editorInit();
  },
  created() {
    this.editorInit();
  },

  methods: {
    editorInit: function () {
      console.log(123);
      require("brace/ext/language_tools"); //language extension prerequsite...
      // require("brace/mode/html");
      require("brace/mode/javascript"); //language
      // require("brace/mode/less");
      require("brace/theme/chrome");
      require("brace/snippets/javascript"); //snippet
    },
  },
};
</script>
<style lang='scss' scoped>
</style>