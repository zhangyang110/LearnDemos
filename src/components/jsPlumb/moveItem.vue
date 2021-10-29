<template>
  <div class="moveItem">moveItem</div>
</template>

<script>
export default {
  name: "moveItem",
  data() {
    return {};
  },
  props: {
    id: {
      default: "",
      type: String,
    },
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.moveItem {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
