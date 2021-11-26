<template>
  <div id="_jsPlumpContainer">
    <template v-for="(itemData, index) in nodeList">
      <moveItem :itemData="itemData" :key="index"></moveItem>
    </template>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {
    
  },
})
import moveItem from "./moveItem.vue";
import instance from "./config";
export default {
  name: "jsPlumpComponent",
  data() {
    return {
      jsPlumb: null,
    };
  },
  props: {
    connactList: {
      default: () => {
        return [
          {
            sourceNodeId: "node_1",
            targetNodeId: "node_2",
          },
          {
            sourceNodeId: "node_2",
            targetNodeId: "node_3",
          },
          // {
          //   sourceNodeId: "node_3",
          //   targetNodeId: "node_1",
          // },
        ];
      },
      type: Array,
    },
    nodeList: {
      default: () => {
        return [
          {
            node_id: "node_1",
            class: "",
          },
          {
            node_id: "node_2",
            class: "",
          },
          {
            node_id: "node_3",
            class: "",
          },
        ];
      },
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
  mounted() {
    this.init();
  },
  created() {
    this.jsPlumb = this.$jsPlumb.getInstance(instance);
  },

  methods: {
    init() {
      let { jsPlumb, connactList } = this;
      jsPlumb.ready(function () {
        connactList.forEach((element) => {
          jsPlumb.connect({
            source: element.sourceNodeId,
            target: element.targetNodeId,
            endpoint: "Dot",
          });
           jsPlumb.draggable('item_left')
           jsPlumb.draggable('item_right')
        });
      });
    },
  },
};
</script>
<style lang='less' scoped>
#_jsPlumpContainer {
  width: 100%;
  height: 100%;
  background: #ddd;
  position: relative;
}
</style>