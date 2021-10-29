<template>
  <div id="_jsPlumpContainer">
    <moveItem />
  </div>
</template>
<script>
import moveItem from "./moveItem.vue";
export default {
  name: "jsPlumpComponent",
  data() {
    return {};
  },
  props: {
    dataList: {
      default: () => {
        return [
          {
            sourceNodeId: "processDefineDiv_node_2",
            targetNodeId: "processDefineDiv_node_3",
          },
          {
            sourceNodeId: "processDefineDiv_node_2",
            targetNodeId: "processDefineDiv_node_5",
          },
          {
            sourceNodeId: "processDefineDiv_node_3",
            targetNodeId: "processDefineDiv_node_5",
          },
          {
            sourceNodeId: "processDefineDiv_node_5",
            targetNodeId: "processDefineDiv_node_3",
          },
          {
            sourceNodeId: "processDefineDiv_node_3",
            targetNodeId: "processDefineDiv_node_6",
          },
          {
            sourceNodeId: "processDefineDiv_node_5",
            targetNodeId: "processDefineDiv_node_4",
          },
          {
            sourceNodeId: "processDefineDiv_node_4",
            targetNodeId: "processDefineDiv_node_5",
          },
          {
            sourceNodeId: "processDefineDiv_node_5",
            targetNodeId: "processDefineDiv_node_6",
          },
          {
            sourceNodeId: "processDefineDiv_node_4",
            targetNodeId: "processDefineDiv_node_6",
          },
        ];
      },
      type: Array,
    },
  },
  components: {
    moveItem,
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
</style>