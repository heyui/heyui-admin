<style lang="less">
.source-link-vue{
  position: fixed;
  right: 30px;
  font-size: 16px;
  bottom: 10px;
  text-decoration: underline;
}
</style>

<template>
  <div class="source-link-vue">
    <a :href="src" target="blank" v-if="$route.name != 'Home'">查看源代码</a>
  </div>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  methods: {
    
  },
  computed: {
    src() {
      return `https://github.com/heyui/heyui-admin/blob/master/src/components/demo-modules/${this.$route.name}.vue`;
    }
  },
  mounted() {
  }
}
</script>
