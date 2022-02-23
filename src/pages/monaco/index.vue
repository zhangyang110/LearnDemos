<template>
  <div>
    <Monaco ref="monaco"/>
    <el-button type="primary" @click="getInfo">Get content</el-button>
  </div>
</template>

<script>
import Monaco from "@/components/monaco"

export default {
  name: "index",
  components: {
    Monaco,
  },
  methods: {
    getInfo() {
      this.$notify({
        title: 'monaco内容',
        message:`${this.$refs.monaco.codes}`,
        position: 'top-right'
      });
    }
  }
}
</script>
