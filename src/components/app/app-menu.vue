<style lang="less">
</style>
<template>
  <div class="app-menu">
    <div class="app-menu-header">
      <a href="http://www.heyui.top" target="_blank">
        <span class="app-menu-header-image"></span>
        <span class="app-menu-header-word">HEYUI</span>
      </a>
    </div>
    <Menu :datas="menus" @onclick="trigger" ref='menu' class="sys-menu"></Menu>
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
