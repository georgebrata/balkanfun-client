<template>
  <section class="page-module">
    <div class="module-content">
      <el-row>
        <el-col :span="20" :offset="2">
          <el-carousel indicator-position="outside" height="500">
            <el-carousel-item v-for="item in carouselItems" :key="item" :style="getBackgroundImage(item)">
              <a :href="item.url"><h1>{{ item.title }}</h1></a>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="20" :offset="2" class="mt3 mb3">
          <el-row :gutter="20">
            <el-col :sm="24" :md="18" class="mt3">
              <h1>Oferte curente | Rezerva acum cu doar 30% avans!</h1>
            </el-col>
            <el-col :sm="24" :md="6" class="mt3">
              <el-button class="w-100 mt2" type="primary">INSCRIE-TE ACUM GRATUIT</el-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="20" :offset="2" class="mt4 mb4">
          <offers-list :offers="offers" :filter="null"></offers-list>
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
import OffersList from "../partials/OffersList";

//mocked data
import carouselItems from "../../data/carousel";
import offers from "../../data/offers";

export default {
  name: "HomePage",
  props: {},
  components: { BalkanfunFooter, OffersList },
  computed: {

  },
  methods: {
    getBackgroundImage(item) {
      return (
        'background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("' +
        item.imgSrc +
        '");'
      );
    },
  },
  data() {
    return {
      carouselItems: carouselItems,
      offers: offers
    };
  },
};
</script>

<style lang="scss">
.el-carousel__container {
  height: 500px;
}
.el-carousel__item {
  background-size: cover;
}
.el-carousel__item a,
.el-carousel__item h1 {
  color: white;
  line-height: 500px;
  vertical-align: middle;
  width: 100%;
  text-align: center;
  margin: 0;
}
</style>
