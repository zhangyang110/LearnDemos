<template>
<div>home</div>
  <!-- <el-container style="height: 100%">
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
  </el-container> -->
</template>
<script>
export default {
  name: "homePage",
  data() {
    return {
      activeRoute: "drawSvg",
    };
  },
  created() {
    this.activeRoute = this.$route.name;
  },
  methods: {
    changeRoute(routeName) {
      this.$router.push(routeName);
    },
  
  },
};
</script>
<style scoped lang="less">
.el-menu-vertical-demo {
  border-right: 0;
}
</style>