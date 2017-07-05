<style lang="less">
</style>
<template>
  <div class="app-menu">
    <Menu :datas="menus" @onclick="trigger" ref='menu' class-name="h-menu-white"></Menu>
  </div>
</template>
<script>

import menuConfig from '../../js/config/menu-config';

export default {
  data() {
    return {
      menus: menuConfig
    }
  },
  watch: {
    $route() {
      this.menuSelect();
    }
  },
  mounted() {
    this.menuSelect();
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
  }
}
</script>
