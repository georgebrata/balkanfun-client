


<template>
   <el-menu-item
    :route="model.path"
    :class="model.fullpath === $route.path ? 'is-active': 'zz'"
    :index="model.fullpath" v-if="!model.isHideInMenu" @click="onMenuItemClick(model.path)">
    <template slot="title">
      <i v-if="model.icon" :class="`el-icon-${model.icon}`"></i>
      {{ model.meta.title[$currentLang] }}
    </template>
  </el-menu-item>
</template>

<script>
export default {
  name: 'side-nav-node',

  props: {
    model: {
      type: Object,
      required: true,
      default: () => {}
    }
  },

  methods: {
    onMenuItemClick (item) {
      document.querySelectorAll('.menu')[0].click();
      this.$router.push(item)
    }
  }
}
</script>

<style type="text/css" lang="scss">
.el-submenu__icon-arrow {
  display: none;
}
</style>
