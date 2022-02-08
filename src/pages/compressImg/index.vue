<template>
<div>compressImg 方法
  <Monaco ref="monaco" :propValue="'123'" :propEditorOptions="{readOnly:true}"/>
  <el-button type="primary" @click="getInfo">Get content</el-button>
</div>

</template>

<script>
import * as compressImg from "@/common/utils/compressImg.js"
import Monaco from "@/components/monaco"
console.log('compressImg===', compressImg)
export default {
  name: "compressImg",
  components: {
    Monaco,
  },
  methods:{
     getInfo() {
      this.$notify({
        title: 'monaco内容',
        message:`${this.$refs.monaco.codes}`,
        position: 'top-right'
      });
    }
  },
}
</script>

<style scoped>

</style>