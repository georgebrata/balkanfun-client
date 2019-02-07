<template>
  <section class="page-module">
    <hero-image title="Despre noi"></hero-image>
    <div class="module-content">
      <el-row class="mb2">
        <el-col :span="22" :offset="1">
          <h1>zz</h1>
        </el-col>
      </el-row>
    </div>
    <balkanfun-footer></balkanfun-footer>
  </section>
</template>

<script>
import RoutesMapConfig from "@router/routes";
import BalkanfunFooter from "../partials/BalkanfunFooter";

export default {
  name: "AboutUsPage",
  components: { BalkanfunFooter },

  props: {},

  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>

<style lang="scss">
</style>
