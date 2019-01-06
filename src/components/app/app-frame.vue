<style lang='less'>
</style>
<template>
  <div class="app-frame" :class="{'app-collapse-menu': collapseMenu}">
    <template v-if="!loading">
      <appHead></appHead>
      <appMenu></appMenu>
      <SysTabs v-if="showSystab" homePage="Home"></SysTabs>
      <div class="app-body">
        <!-- <keep-alive> -->
          <router-view></router-view>
        <!-- </keep-alive> -->
      </div>
    </template>
  </div>
</template>
<script>

import appHead from './app-header';
import appMenu from './app-menu';
import SysTabs from '../common/SysTabs/SysTabs';
import store from 'js/vuex/store';
import { mapState } from "vuex";

export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$Loading("加载中");
      R.User.info().then((resp) => {
        if (resp.ok) {
          store.dispatch('updateAccount', resp.body);
          this.initDict();
        }
      })
    },
    initDict() {
      R.Dict.get().then((resp) => {
        if (resp.ok) {
          let dicts = resp.body;
          for (let dict of dicts) {
            HeyUI.addDict(dict.name, dict.data);
          }
        }
        this.loading = false;
        this.$Loading.close();
      });
    }
  },
  computed: {
    ...mapState(['showSystab', 'collapseMenu'])
  },
  components: {
    appHead,
    appMenu,
    SysTabs
  }
};
</script>