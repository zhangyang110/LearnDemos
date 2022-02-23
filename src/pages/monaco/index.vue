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