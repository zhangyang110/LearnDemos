<template>
  <div class="container">
    <editor
      ref="aceEditor"
      v-model="content"
      @init="editorInit"
      width="100%"
      height="600"
      lang="javascript"
      :theme="theme"
      :options="{
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        tabSize: 6,
        fontSize: 12,
        showPrintMargin: false, //去除编辑器里的竖线
      }"
    ></editor>

    <el-button type="primary" size="small" @click="pre">上一个主题</el-button>
    <el-button type="primary" size="small" @click="next">下一个主题</el-button>
    <el-button
      type="primary"
      size="small"
      v-clipboard:copy="content"
      v-clipboard:error="onError"
      v-clipboard:success="onCopy"
      >获 取</el-button
    >
    <br />
    <br />
    <br />
    <el-button type="primary" size="small" @click="joinpath"
      >joinpath</el-button
    >
    <el-button type="primary" size="small" @click="changeColorByJs"
      >changeColorByJs</el-button
    >
    <el-button type="primary" size="small" @click="inertsort"
      >插入排序</el-button
    >
  </div>
</template>
<script>
import apiClient from "@/common/apiclient/perfectApiclient/perfectApiclient";
export default {
  data() {
    return {
      content: "",
      theme: "",
      num: 0,
      arr: [
        //将brace/theme文件夹下的所有主题名字拷贝出来
        "ambiance",
        "chaos",
        "chrome",
        "clouds",
        "clouds_midnight",
        "cobalt",
        "crimson_editor",
        "dawn",
        "dracula",
        "dreamweaver",
        "eclipse",
        "github",
        "gob",
        "gruvbox",
        "idle_fingers",
        "iplastic",
        "katzenmilch",
        "kr_theme",
        "kuroir",
        "merbivore",
        "merbivore_soft",
        "monokai",
        "mono_industrial",
        "pastel_on_dark",
        "solarized_dark",
        "solarized_light",
        "sqlserver",
        "terminal",
        "textmate",
        "tomorrow",
        "tomorrow_night",
        "tomorrow_night_blue",
        "tomorrow_night_bright",
        "tomorrow_night_eighties",
        "twilight",
        "vibrant_ink",
        "xcode",
      ],
    };
  },
  components: {
    editor: require("vue2-ace-editor"),
  },
  methods: {
    editorInit() {
      //初始化
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/javascript"); //language
      // require("brace/theme/tomorrow_night");
      for (let i = 0; i < this.arr.length; i++) {
        //方便看哪个主题好看，循坏加载了所有主题，通过点击按钮切换
        require("brace/theme/" + this.arr[i]);
      }
      require("brace/snippets/javascript"); //snippet
    },
    onCopy(e) {
      console.log("e===", e);
      this.$message.success("复制成功！");
    },
    onError() {
      this.$message.success("复制失败！");
    },
    pre() {
      //切换到上一个主题
      if (this.num == 0) {
        return;
      }
      this.num--;
      this.theme = this.arr[this.num];
      this.$message("主题" + this.num + "__" + this.arr[this.num]);
    },
    next() {
      //切换到下一个主题
      if (this.num == this.arr.length - 1) {
        return;
      }
      this.num++;
      this.theme = this.arr[this.num];
      this.$message("主题" + this.num + "__" + this.arr[this.num]);
    },

    // 一部分面试题
    joinpath() {
      apiClient
        .request({
          url: "/passiveRequest/joinPath.js",
          type: "get",
          params: {},
        })
        .then((res) => {
          this.$refs.aceEditor.editor.setValue(res);
        });
    },
    changeColorByJs() {
      apiClient
        .request({
          url: "/passiveRequest/changeColorByJs.html",
          type: "get",
          params: {},
        })
        .then((res) => {
          this.$refs.aceEditor.editor.setValue(res);
        });
    },
    inertsort() {
      apiClient
        .request({
          url: "/passiveRequest/sortByMySelf1.js",
          type: "get",
          params: {},
        })
        .then((res) => {
          this.$refs.aceEditor.editor.setValue(res);
        });
    },
  },
  mounted() {
    this.editorInit();
    this.theme = this.arr[0];
    this.$refs.aceEditor.editor.setValue(
      `设置的初始值;\n复制插件使用\n"vue2-ace-editor":"0.0.13"`
    );
    // qingqiu shuju
  },
};
</script>
<style lang='less' scoped>
</style>