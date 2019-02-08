<template>
  <section class="page-module">
    <hero-image title="Galerie"></hero-image>
    <div class="module-content">
      <el-row class="mb2">
        <el-col :span="20" :offset="2" class="mt2 mb2">
            <h1>Galerie video</h1>
            <br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br>
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
