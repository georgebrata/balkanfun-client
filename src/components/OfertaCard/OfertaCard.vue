<template><div>
  <h2>Cardu</h2>
  <h2>Cardu</h2>
  <h2>Cardu</h2>
  <h2>Cardu</h2>
  <h2>Cardu</h2>
  <h2>Cardu</h2></div>
</template>

<script>
import Icons from "@assets/icons";

export default {
  name: "oferta-card",
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

