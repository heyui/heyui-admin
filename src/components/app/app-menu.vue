<template>
  <div class="app-menu">
    <div class="app-menu-header">
  
    </div>
    <Menu :datas="menus"
          @onclick="trigger" ref='menu'></Menu>
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
      if (this.$route.name) {
        this.$refs.menu.select(this.$route.name);
      }
    }
  },
  methods: {
    trigger(data) {
      this.$router.push({ name: data.key });
    }
  }
}
</script>
