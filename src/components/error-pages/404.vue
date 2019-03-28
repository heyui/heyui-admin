<style lang='less'>
  .page-404-vue {
    .background-image {
      background-image: url(../../images/error-pages/404.png);
    }
  }
</style>
<template>
  <div class="page-404-vue error-page">
    <div class="background-image"></div>
    <p>您访问的页面不存在~~</p>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {

    }
  },
  computed: {

  }
};
</script>
