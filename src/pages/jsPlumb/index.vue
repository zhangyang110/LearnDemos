<template>
  <div class="pageContainer">
    <jsPlumpComponent></jsPlumpComponent>
  </div>
</template>
<script>
import jsPlumpComponent from "@/components/jsPlumb";
export default {
  data() {
    return {};
  },

  components: {
    jsPlumpComponent,
  },
  computed: {},
  methods: {},
};
</script>
<style lang='less' scoped>
.pageContainer {
  width: 100%;
  height: 100%;
}
</style>