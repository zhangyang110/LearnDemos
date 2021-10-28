<template>
  <el-container style="height: 100%">
    <el-aside
      width="200px"
      style="background-color: #545c64; user-select: none"
    >
      <el-menu
        :router="true"
        :default-active="$route.path"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
      >
        <MenuTree :menuList="menuList" />
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        {{$route.name}}
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import MenuTree from "@/components/MenuTree";
import { routerToMenu } from "@/common/utils/utils";
import { mapState } from "vuex";
export default {
  name: "basicLayout",
  components: {
    MenuTree,
  },
  computed: {
    ...mapState({
      LocalRoutes: (state) => state.LocalRoutes,
    }),
    menuList() {
      if (this.LocalRoutes) {
        return routerToMenu(this.LocalRoutes);
      } else if (JSON.parse(localStorage.getItem("addRoutes"))) {
        return routerToMenu(JSON.parse(localStorage.getItem("addRoutes")));
      } else {
        return [];
      }
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
.header {
  width: 100%;
  height: 50px;
  vertical-align: middle;
  background: darkgray;

  img {
    vertical-align: middle;
    width: 80px;
    height: 100%;
  }

  .iconOtherstyle {
    font-size: 25px;
    color: #f5326a;
    vertical-align: middle;
  }
}

.main {
  height: 100%;
  width: 100%;
}
</style>