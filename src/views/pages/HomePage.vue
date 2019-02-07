<template>
  <section class="page-module">
    <div class="module-content">
      <divider></divider>
      <el-row>
        <el-col :span="22" :offset="1">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <!--<h3>{{ item }}</h3>-->
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </div>
    <balkanfun-footer></balkanfun-footer>
  </section>
</template>

<script>
import RoutesMapConfig from "@router/routes";
import Divider from "../partials/Divider";
import BalkanfunFooter from "../partials/BalkanfunFooter";

export default {
  name: "HomePage",
  props: {},
  components: { Divider, BalkanfunFooter },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
