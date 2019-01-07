<style lang="less">

@menu-color: #FFF;
.app-menu{
  background: @menu-color;

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
    }
  }
  .h-menu.h-menu-size-collapse > .h-menu-li > .h-menu-show .h-menu-show-icon {
    font-size: 20px;
  }
}

</style>
<template>
  <div class="app-menu">
    <appLogo></appLogo>
    <Menu :datas="menus" :inlineCollapsed="collapseMenu" @onclick="trigger" ref='menu' class-name="h-menu-white"></Menu>
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
    ...mapState(['collapseMenu'])
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
