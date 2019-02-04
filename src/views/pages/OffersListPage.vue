<template>
  <section class="page-module">
    <hero-image title="Toate ofertele"></hero-image>
    <div class="module-content">
      <el-row class="p4">
        <el-col :span="12" :offset="6" class="center">
          <el-radio-group v-model="filter" style="margin-bottom: 30px;">
            <el-radio-button label="offer1">Oferta 1</el-radio-button>
            <el-radio-button label="offer2">Oferta 2</el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20">
          <el-row :gutter="20">
            <el-col :sm="24" :md="12" :lg="8" class="mb2">
              <offer-card title="vacanta 1" description="hai la munte" url="test url"></offer-card>
            </el-col>
            <el-col :sm="24" :md="12" :lg="8" class="mb2">
              <offer-card title="vacanta 1" description="hai la munte" url="test url"></offer-card>
            </el-col>
            <el-col :sm="24" :md="12" :lg="8" class="mb2">
              <offer-card title="vacanta 1" description="hai la munte" url="test url"></offer-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </section>

</template>

<script>
import RoutesMapConfig from "@router/routes";
import Divider from "../partials/Divider"
import HeroImage from "../partials/HeroImage"
import OfferCard from '../components/OfferCard'

export default {
  name: "OffersListPage",
  props: {},
  data() {
    return {
      filter: 'offer1'
    };
  },
  components: {
    Divider,
    HeroImage,
    OfferCard
  }
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
      clear: both
  }
</style>
