<template>
  <div class="mt2">
    <p v-for="i in benefits" :key="i" class="text item">
        <i class="el-icon-check"></i><span class="ml1">{{i}}</span>
    </p>
  </div>
</template>

<script>

export default {
  name: "BenefitsList",
  props: ['benefits', 'icon'],
  data: {},
  components: {},
};
</script>

<style lang="scss">

</style>
