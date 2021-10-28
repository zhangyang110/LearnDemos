<template>
  <div>
    <el-button @click="doLogin">登陆</el-button>
  </div>
</template>
<script>
import asyncRoute from "@/route";
import { dynamicRoutes } from "@/common/utils/handleDynamicRoutes";
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    async doLogin() {
      this.getUserInfo();
      let gettedRoutes = await this.asyncGetAuthRoute();
      await localStorage.setItem("addRoutes", JSON.stringify(gettedRoutes));
      let addRoutes = dynamicRoutes(gettedRoutes);
      this.$router.addRoutes(addRoutes);
      let firstPath = addRoutes.find((t) => t.path === "/")["children"][0][
        "path"
      ]; ///查找第一个权限内 路由的path
      this.$router.push(`${firstPath}`);
    },
    getUserInfo() {},
    asyncGetAuthRoute() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(asyncRoute);
        }, 1000);
      });
    },
  },
};
</script>
