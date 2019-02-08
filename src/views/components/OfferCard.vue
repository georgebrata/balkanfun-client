<template>
  <a :href="offer.url">
    <el-card :body-style="{ padding: '0px' }" shadow="hover" :class="extraClasses">
      <img :src="offer.imgSrc" class="image">
      <div style="padding: 14px;">
        <h3 class="mb3">{{offer.title}}</h3>
        <div class="bottom clearfix">
          <div class="detailed-offer" v-if="hideDetails">
            <el-row :gutter="20">
              <el-col :span="12">
                <h4>Beneficii</h4>
              </el-col>
              <el-col :span="12">
                <h4 class="text-right">Pret</h4>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="mt2">
              <el-col :span="12">
                <div v-for="(value, key, index) in offer.benefits" :key="value" class="mb1">
                  <i class="el-icon-check"></i><span class="ml1">{{value}}</span>
                </div>
              </el-col>
              <el-col :span="12">
                <h4 class="text-right mb2 old-price">{{offer.currency}}{{offer.oldPrice}}</h4>
                <h2 class="text-right mb2">{{offer.currency}}{{offer.price}}</h2>
              </el-col>
            </el-row>
          </div>
          <!--CARD BUTTONS-->
          <el-row :gutter="20" class="mb1 mt2" v-if="hideDetails">
            <el-col :span="12">
              <el-button type="secondary" class="w-100">Detalii</el-button>
            </el-col>
            <el-col :span="12" class="pull-right">
              <el-button type="primary" class="w-100">Rezervare</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="mb1 mt2" v-if="!hideDetails">
            <el-col :span="12">
              <el-row>
                <el-col :span="12" class="price old-price">{{offer.currency}}{{offer.oldPrice}}</el-col>
                <el-col :span="12" class="price new-price">{{offer.currency}}{{offer.price}}</el-col>
              </el-row>
            </el-col>
            <el-col :span="12" class="pull-right">
              <el-button type="primary" class="w-100">Rezervare</el-button>
            </el-col>
          </el-row>
          <span class="time">{{offer.disclaimer}}</span>
        </div>
      </div>
    </el-card>
  </a>
</template>

<script>
import Vue from "vue";
import Cookies from "js-cookie";

//add card url

export default {
  name: "offer-card",
  props: {
    offer: {
      type: Object,
      required: true,
      default: {},
    },
    extraClasses: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      iconClass: `icon-${this.name}`,
    };
  },
  computed: {
    hideDetails() {
      return this.offer.benefits && this.offer.benefits.length > 0
    }
  }
};
</script>

<style type="text/css" lang="scss">
.divider {
  margin-top: 50px;
}

.price {
  font-size: 22px;
  padding: 10px 20px;
  &.new-price {
    font-size: 25px;
  }
}

.old-price {
  text-decoration: line-through;
}
</style>
