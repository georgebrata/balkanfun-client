<template>
  <el-row :gutter="24">
      <el-col v-for="(value, key, index) in offers" :sm="24" :md="12" :lg="8" class="mb2" :key="index">
        <offer-card v-if="filter ? value.filter === filter : true" :offer="value"></offer-card>
      </el-col>
  </el-row>
</template>

<script>
import HeroImage from "../partials/HeroImage";
import BalkanfunFooter from "../partials/BalkanfunFooter";
import OfferCard from "../components/OfferCard";

import offers from "../../data/offers";

export default {
  name: "OffersList",
  props: ['offers', 'filter'],
  data: {},
  components: {
    HeroImage,
    OfferCard,
    BalkanfunFooter
  },
};
</script>

<style lang="scss">
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
