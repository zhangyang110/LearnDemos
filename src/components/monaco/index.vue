<template>
  <div class="myEditor">
    <div id="container" ref="container" style="min-height: 400px"></div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";

export default {
  name: "Monaco",
  model: {
    prop: 'propValue',
    event: 'change'
  },
  props: {
    propEditorOptions: {
      type: Object,
      default: function () {
        return {};
      },
    },
    propValue: {
      type: String,
      default: "",
    },
    propLanguage: {
      type: String,
      default: "java",
    },
  },
  data() {
    return {
      codes: "",
    };
  },
  mounted() {
    this.initEditor();
    window.addEventListener("resize", this.initEditor);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.initEditor);
  },
  watch: {
    propValue(newVal) {
      this.codes = newVal;
      this.monacoEditor.setValue(newVal)
    },
  },
  methods: {
    initEditor() {
      let self = this;
      self.$refs.container.innerHTML = "";  
      self.monacoEditor = monaco.editor.create(self.$refs.container, {
        value: self.codes,
        language: this.propLanguage, //JavaScript Css ...
        theme: "hc-black", //vs-dark- 深色  hc-black-高亮 vs-默认
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false, //只读
        cursorStyle: "line", //光标样式
        automaticLayout: false, //自动布局
        glyphMargin: true, //字形边缘
        useTabStops: false,
        fontSize: 18, //字体大小
        autoIndent: true, //自动布局
        ...self.propEditorOptions,
      });
      self.monacoEditor.onDidChangeModelContent(this.editorChanged);
    },
    formatEditor() {
      this.monacoEditor.getAction("editor.action.formatDocument").run();
    },
    editorChanged(){
        this.codes = this.monacoEditor.getValue();
        this.$emit("change", this.codes);// v-model
        this.$emit("codeChange", this.codes);
    }
  },
};
</script>

<style lang="less" scoped>
#container {
  height: 100%;
  /*width: 100%;*/
  text-align: left;
}
</style>