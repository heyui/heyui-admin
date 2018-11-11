<style lang='less'>
  .page-500-vue {
    position: relative;
    top: 50%;
    margin-top: -150px;
    height: 300px;
    text-align: center;
    .background-image {
      background: url(../../images/500.png);
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
  <div class="page-500-vue">
    <div class="background-image"></div>
    <p>您访问的页面出现错误</p>
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