<style lang="less">

.app-menu{
  .h-menu{
    font-size: 14px;
    color: rgba(49, 58, 70, 0.8);
    .h-menu-li-selected{
      background-color: rgb(240, 246, 255);
      .h-menu-show:after {
        width: 4px;
      }
    }
    > li >.h-menu-show {
      font-size: 15px;
      .h-menu-show-icon {
        font-size: 20px;
      }
      .h-menu-show-desc{
        transition: opacity 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }
  .h-menu.h-menu-size-collapse > .h-menu-li > .h-menu-show {
    padding-left: 24px;
    .h-menu-show-icon {
      font-size: 20px;
    }
  }
}

</style>
<template>
  <div class="app-menu">
    <appLogo></appLogo>
    <Menu :datas="menus" :inlineCollapsed="siderCollapsed" @onclick="trigger" ref='menu' class-name="h-menu-white"></Menu>
  </div>
</template>
<script>

import menuConfig from '../../js/config/menu-config';
import { mapState } from "vuex";
import appLogo from './app-logo';

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
  computed: {
    ...mapState(['siderCollapsed'])
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
  components: {
    appLogo
  }
}
</script>
