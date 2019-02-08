<template>
  <section class="page-module">
    <div class="module-content mt-4 mb-4">
      <el-row>
        <el-col :span="20" :offset="2">
          <el-row>
            <el-col :span="24" class="text-center">
                <h1>{{offer.title}}</h1>
            </el-col>
          </el-row>
          <el-row class="mb3">
            <el-col :span="24" v-for="location in offer.locations" class="mt2">
                <br><h1>{{location.title}}</h1><br>
                <el-rate v-model="location.stars" disabled></el-rate>
                <el-table :data="location.prices" style="width: 900px;">
                  <el-table-column
                    prop="period"
                    label="Perioada"
                    width="200">
                  </el-table-column>
                  <el-table-column
                    prop="price1"
                    label="Camera 1/2"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="price2"
                    label="Camera 1/3"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="price3"
                    label="Camera 1/4"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    label=""
                    width="120">
                    <template slot-scope="scope" class="text-center">
                      <el-button @click="handleClick" type="primary">REZERVA</el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </el-col>
          </el-row>
          <el-row>
            <el-col :sm="24" :md="12" :lg="16" class="pr4">
                <h1>Fotografii si descriere</h1>
                <hr>
                <el-carousel :interval="4000" type="card" height="400px">
                  <el-carousel-item v-for="item in offer.media.images" :key="item" :style="getBackgroundImage(item)">
                    <a :href="item.url"><h1>{{ item.title }}</h1></a>
                  </el-carousel-item>
                </el-carousel>
                <p v-for="d in offer.descriptions" :key="d" class="mb4 mt4">
                  {{d}}
                </p>
                <h3 class="mb2">Stiati ca?</h3>
                <p v-for="i in offer.didYouKnow" :key="i" class="text item">
                  <i class="el-icon-caret-right mr1"></i><span>{{i}}</span>
                </p>
                <el-tabs v-model="activeBenefitsTabName" @tab-click="handleClick">
                  <el-tab-pane label="Beneficii incluse" name="included">
                    <benefits-list :benefits="offer.benefits.included" icon="el-icon-check"></benefits-list>
                  </el-tab-pane>
                  <el-tab-pane label="Pretul excursiei nu include" name="notIncluded">
                    <benefits-list :benefits="offer.benefits.notIncluded" icon="el-icon-close"></benefits-list>
                  </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :sm="24" :md="12" :lg="8">
                <h1 class="mb2">Oferte</h1><hr>
                <offer-card v-for="o in relatedOffers" :offer="o" extraClasses="mb2"></offer-card>
            </el-col>
          </el-row>
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
import BenefitsList from "../partials/BenefitsList";
import OfferCard from "../components/OfferCard";


//mocked data
import offer from "../../data/offer-details";


export default {
  name: "OfferPage",
  props: {},
  data() {
    return {
      offer: offer,
      activeBenefitsTabName: 'included',
      relatedOffers: offer.relatedOffers
    };
  },
  components: {
    Divider,
    HeroImage,
    BalkanfunFooter,
    BenefitsList,
    OfferCard
  },
    methods: {
    getBackgroundImage(item) {
      return (
        'background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("' +
        item +
        '");'
      );
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
};
</script>

<style lang="scss">
p {
  font-size: 18px;
  line-height: 20px;
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
