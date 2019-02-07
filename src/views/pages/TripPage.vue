<template>
  <section class="page-module">
    <hero-image title="Despre noi"></hero-image>
    <div class="module-content mt-4 mb-4">
      <el-row>
        <el-col :span="20" :offset="2">
            <h1>Oferta</h1>
        </el-col>
      </el-row>
    </div>
    <balkanfun-footer></balkanfun-footer>
  </section>

</template>

<script>
import RoutesMapConfig from "@router/routes";
import Divider from "../partials/Divider";
import HeroImage from "../partials/HeroImage";
import BalkanfunFooter from "../partials/BalkanfunFooter";

export default {
  name: "OfferPage",
  props: {},
  data: {},
  components: {
    Divider,
    HeroImage,
    BalkanfunFooter,
  }
};
</script>

<style lang="scss">
p {
  font-size: 20px;
}
</style>
