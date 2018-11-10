<style lang='less'>
</style>
<template>
  <div class="app-frame">
    <template v-if="!loading">
      <appLogo></appLogo>
      <appHead></appHead>
      <appMenu></appMenu>
      <div class="app-body">
          <router-view></router-view>
      </div>
      <SourceLink></SourceLink>
    </template>
  </div>
</template>
<script>

import appHead from './app-header';
import appMenu from './app-menu';
import appLogo from './app-logo';
import SourceLink from '../common/SourceLink';

import store from 'js/vuex/store';

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
  computed: {},
  components: {
    appHead,
    appMenu,
    appLogo,
    SourceLink
  }
};
</script>