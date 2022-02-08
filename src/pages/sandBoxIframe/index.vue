<template>
  <div class="pageContainer">
    <iframe
      src="https://codesandbox.io/embed/quiet-fog-3e699?fontsize=14&hidenavigation=1&theme=dark"
      style="
        width: 100%;
        height: 500px;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
      "
      title="quiet-fog-3e699"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "sandBoxIframe",
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='less' scoped>
.pageContainer {
  width: 100%;
  height: 100%;
}
</style>