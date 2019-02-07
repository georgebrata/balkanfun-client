<template>
  <a :href="offer.url">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img :src="offer.imgSrc" class="image">
      <div style="padding: 14px;">
        <h3 class="mb3">{{offer.title}}</h3>
        <div class="bottom clearfix">
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
              <div v-for="(value, key, index) in offer.benefits" class="mb1">
                <i class="el-icon-check"></i><span class="ml1">{{value}}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <h2 class="text-right mb2">${{offer.price}}</h2>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="mb1 mt2">
            <el-col :span="12">
              <el-button type="secondary" class="w-100">Detalii</el-button>
            </el-col>
            <el-col :span="12">
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
  },
  data() {
    return {
      iconClass: `icon-${this.name}`,
    };
  },
};
</script>

<style type="text/css" lang="scss">
.divider {
  margin-top: 50px;
}
</style>
