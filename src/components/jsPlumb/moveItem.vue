<template>
<<<<<<< HEAD
  <div class="aa"  :id="itemData.node_id">moveItem</div>
=======
  <div class="moveItem">moveItem</div>
>>>>>>> 012edfbdc07aed2f10c18f5961d541410204b301
</template>

<script>
export default {
  name: "moveItem",
  data() {
    return {};
  },
  props: {
<<<<<<< HEAD
    itemData: {
      default: ()=>{
        return {
          node_id:'',
          class:''
        }
      },
      type: Object,
=======
    id: {
      default: "",
      type: String,
>>>>>>> 012edfbdc07aed2f10c18f5961d541410204b301
    },
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<<<<<<< HEAD
<style lang='less' scoped>
.aa {
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid red;
}
</style>
=======
<style lang='scss' scoped>
.moveItem {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
>>>>>>> 012edfbdc07aed2f10c18f5961d541410204b301
