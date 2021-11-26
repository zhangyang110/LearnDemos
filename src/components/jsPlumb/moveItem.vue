<template>
  <div class="aa"  :id="itemData.node_id">moveItem</div>
</template>

<script>
export default {
  name: "moveItem",
  data() {
    return {};
  },
  props: {
    itemData: {
      default: ()=>{
        return {
          node_id:'',
          class:''
        }
      },
      type: Object,
    },
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='less' scoped>
.aa {
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid red;
}
</style>