<style lang="less">
.app-menu {
  .h-menu {
    font-size: 14px;
    .h-menu-li-selected {
      .h-menu-show:after {
        width: 4px;
      }
    }
    > li > .h-menu-show {
      font-size: 15px;
      .h-menu-show-icon {
        font-size: 20px;
      }
      .h-menu-show-desc {
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
  .h-menu.h-menu-white {
    color: rgb(49, 58, 70);
  }
}
</style>
<template>
  <div class="app-menu">
    <appLogo></appLogo>
    <Menu :datas="menus" :mode="menuMode" @clickItem="trigger" ref="menu" :className="`h-menu-${theme}`"></Menu>
    <div class="app-menu-mask" @click="hideMenu"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import appLogo from './app-logo';

export default {
  props: {
    theme: String
  },
  data() {
    return {};
  },
  watch: {
    $route() {
      this.menuSelect();
    },
    menus() {
      this.menuSelect();
    }
  },
  mounted() {
    this.init();
  },
  computed: {
    ...mapState(['siderCollapsed', 'menus']),
    menuMode() {
      return this.siderCollapsed ? 'collapse' : 'vertical';
    }
  },
  methods: {
    init() {
      this.menuSelect();
    },
    menuSelect() {
      if (this.$route.name) {
        this.$refs.menu.select(this.$route.name);
      }
    },
    trigger(data) {
      if (data.children.length > 0) return;
      this.$router.push({ name: data.key });
    },
    hideMenu() {
      this.$store.commit('updateSiderCollapse', true);
    }
  },
  components: {
    appLogo
  }
};
</script>
