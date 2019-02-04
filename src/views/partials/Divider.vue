<template>
  <div class="divider">
  </div>
</template>

<script>
import Vue from "vue";
import Cookies from "js-cookie";

export default {
  name: "divider",
  data: {
    styleObject: {
//      marginTop: this.props.height,
    },
  },
  components: {},

  props: {
    height: {
      type: Number,
      default: 50,
    },
  },

  methods: {},
};
</script>

<style type="text/css" lang="scss">
.divider {
  margin-top: 50px;
}
</style>
