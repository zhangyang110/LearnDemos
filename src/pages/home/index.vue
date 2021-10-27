<template>
  <el-container style="height: 100%">
    <el-aside
      width="200px"
      style="background-color: #545c64; user-select: none"
    >
      <el-menu
        :default-active="activeRoute"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="false"
      >
        <template v-for="(item, index) in routes">
          <el-menu-item
            :index="item.name"
            :key="index"
            @click="changeRoute(item.name)"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.meta.desc }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { otherRoute, staticRroute } from "./route";

//let routes = originRoutes[0].children.map((item) => {
//  return {
//    name: item.name,
//    meta: item.meta,
//  };
//});
export default {
  name: "homePage",
  data() {
    return {
      routes,
      activeRoute: "drawSvg",
    };
  },
  created() {
    this.activeRoute = this.$route.name;
    this.asyncGetAuthRoute();
  },
  methods: {
    changeRoute(routeName) {
      this.$router.push(routeName);
    },
    asyncGetAuthRoute() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.routes = [];
          resolve();
        }, 1500);
      });
    },
  },
};
</script>
<style scoped lang="less">
.el-menu-vertical-demo {
  border-right: 0;
}
</style>