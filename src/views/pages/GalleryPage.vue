<template>
  <section class="page-module">
    <hero-image title="Galerie"></hero-image>
    <div class="module-content">
      <el-row class="mb2">
        <el-col :span="22" :offset="1">
          <h1>zz</h1>
        </el-col>
      </el-row>
    </div>
  </section>

</template>

<script>
import RoutesMapConfig from "@router/routes";
import Divider from "../partials/Divider"
import HeroImage from "../partials/HeroImage"


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
    HeroImage
  }
};
</script>

<style lang="scss">
</style>
