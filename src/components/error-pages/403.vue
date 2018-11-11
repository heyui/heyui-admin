<style lang='less'>
  .page-403-vue {
    position: relative;
    top: 50%;
    margin-top: -150px;
    height: 300px;
    text-align: center;
    .background-image {
      background: url(../../images/404.png);
      height: 200px;
      width: 500px;
      background-size: cover;
      background-position: center;
      margin: 0 auto 50px;
    }
    p {
      font-size: 25px;
      color: #3788ee;
    }
  }
</style>
<template>
  <div class="page-403-vue">
    <div class="background-image"></div>
    <p>您无权访问此页面</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      
    }
  },
  computed: {
    
  }
}
</script>