<template>
  <div class="page-frame">
    <header-component></header-component>
    <div class="frame-content">
      <side-nav></side-nav>
      <h1>Despre noi</h1>
      <h1>Despre noi</h1>
      <h1>Despre noi</h1>
      <main @click="onHideMenuClick">
      </main>
    </div>
  </div>
</template>

<script>
import SideNav from "@views/partials/SideNav";
import HeaderComponent from "@views/partials/Header";
import Divider from "@views/partials/Divider";
import RoutesMapConfig from "@router/routes";

export default {
  name: 'AboutUsPage',
  props: {},

  data() {
    return {};
  },

  created() {
    this.$getUserInfo();

    this.initMenuList();
  },

  components: {
    SideNav,
    HeaderComponent,
    Divider
  },

  methods: {
    initMenuList() {
      const routesConf = this.$_.cloneDeep(RoutesMapConfig);
      const menuList = this.filterNodeByName(routesConf, "isHideInMenu");
      this.$setMenuList(menuList);
    },

    filterNodeByName(source, name) {
      let result = source.filter(function cFilter(item) {
        if (!item[name]) {
          item.children && (item.children = item.children.filter(cFilter));
          return true;
        } else {
          return false;
        }
      });
      return result;
    },

    onHideMenuClick() {
      document.getElementById("app").className = "";
    }
  }
};
</script>

<style lang="scss">
.page-frame {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .frame-content {
    flex: 1;
    display: flex;
  }
  main {
    flex: 1;
  }
}
</style>
