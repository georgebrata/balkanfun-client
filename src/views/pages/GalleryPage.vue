<template>
  <section class="page-module">
    <hero-image title="Galerie"></hero-image>
    <div class="module-content">
      <el-row class="mb2">
        <el-col :span="4" :offset="10">
            <el-tabs tab-position="top" >
              <el-tab-pane label="User">User</el-tab-pane>
              <el-tab-pane label="Config">Config</el-tab-pane>
            </el-tabs>
        </el-col>
      </el-row>
    </div>
    <balkanfun-footer></balkanfun-footer>
  </section>
</template>

<script>
import RoutesMapConfig from "@router/routes";
import Divider from "../partials/Divider"
import HeroImage from "../partials/HeroImage"
import BalkanfunFooter from "../partials/BalkanfunFooter";


export default {
  name: "GalleryPage",
  props: {},
  data() {
    return {
      activeName: "1",
    };
  },
  components: {
    Divider,
    HeroImage,
    BalkanfunFooter
  }
};
</script>

<style lang="scss">
</style>
