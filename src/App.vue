<template>
  <div id="app">
    123
    <router-view></router-view>
  </div>
</template>
<script>
import { dynamicRoutes } from "@/common/utils/handleDynamicRoutes";
import store from "@/store";
export default {
  name: "App",
  created() {
    let toPath = JSON.parse(localStorage.getItem("lastPath"));
    let _LocalRoutes = JSON.parse(localStorage.getItem("addRoutes"));
    if (toPath && _LocalRoutes) {
      let addRoutes = dynamicRoutes(_LocalRoutes);
      this.$router.addRoutes(addRoutes);
      store.commit("setRoutes", _LocalRoutes);
    } else {
      this.$router.push("/login");
    }

    // 监听页面刷新
    window.addEventListener("beforeunload", () => {
      localStorage.setItem(
        "lastPath",
        JSON.stringify(this.$router.currentRoute.path)
      );
    });
  },
};
</script>
<style lang="less">
@import ~"@/common/style/global.less";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @primary-color;
  height: 100%;
}
</style>
