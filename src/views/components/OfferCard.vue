<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <img src="http://balkanfun.ro/wp-content/uploads/2018/05/CORFU.jpg" class="image">
    <div style="padding: 14px;">
      <span>{{title}}</span>
      <div class="bottom clearfix">
        <time class="time">{{description}}</time>
        <el-button type="text" class="button">button</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import Vue from "vue";
import Cookies from "js-cookie";

export default {
  name: "offer-card",
    props: {
    name: {
      type: String,
      required: false,
      default: "titlu"
    },
    description: {
      type: String,
      required: false,
      default: "descriere"
    },
    url: {
      type: String,
      required: false,
      default: "url"
    }
  },
  data() {
    return {
      iconClass: `icon-${this.name}`
    };
  }
};
</script>

<style type="text/css" lang="scss">
.divider {
  margin-top: 50px;
}
</style>
