<style lang='less'>
.sub-menu-vue {
  .h-menu {
    font-size: 14px;
  }
}
</style>
<template>
  <div class="sub-menu-vue">
    <Menu :datas="datas" className="h-menu-white" @click="trigger" ref='menu'></Menu>
  </div>
</template>
<script>
export default {
  props: {
    datas: Array
  },
  data() {
    return {
    };
  },
  mounted() {
    this.menuSelect();
  },
  watch: {
    $route() {
      this.menuSelect();
    }
  },
  methods: {
    menuSelect() {
      if (this.$route.name) {
        this.$refs.menu.select(this.$route.name);
      }
    },
    trigger(data) {
      this.$router.push({ name: data.key });
    }
  },
  computed: {

  }
};
</script>
