 <template>
  <div>
    <div>
      <template v-for="item in menuList">
        <el-submenu
          v-if="item.children && item.children.length > 0"
          :key="item.name"
          :index="`/${item.path}`"
        >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.path }}</span>
          </template>
          <menu-sun :menuList="item.children" />
        </el-submenu>
        <el-menu-item v-else :key="item.name" :index="`/${item.path}`">{{
          item.path
        }}</el-menu-item>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuSun", //必须要 递归组件的关键，并且要与引入组件的变量名称一致
  props: {
    menuList: {
      default: () => [],
      type: Array,
    }, // 菜单的数据
  },
  mounted(){
  }
};
</script>