<template>
  <el-submenu :index="model.fullpath">
    <template slot="title">
      <i v-if="model.icon" :class="`el-icon-${model.icon}`"></i>
      {{ model.meta.title[$currentLang] }}
    </template>
    <template v-for="(item, index) in model.children">
      <el-menu-item
        :class="item.fullpath === $route.path ? 'is-active': ''"
        :index="item.path"
        @click="onMenuItemClick(item.path)">
        {{ item.meta.title[$currentLang] }}
      </el-menu-item>
    </template>
  </el-submenu>
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
      this.$router.push(item)
    }
  }
}
</script>
