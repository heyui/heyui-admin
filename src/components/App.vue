<template>
  <div id="app">
    <template v-if="!loading">
      <template v-if="$route.name == 'login'">
        <router-view></router-view>
      </template>
      <div v-else>
        <appHead></appHead>
        <div class="app-container">
          <appMenu></appMenu>
          <div class="app-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>

import store from 'js/vuex/store';
import appHead from './app/app-header';
import appMenu from './app/app-menu';

export default {
  data() {
    return {
      loading: true
    }
  },
  store,
  mounted() {
    this.$Loading("加载中");
    R.User.info().then((resp) => {
      if (resp.ok) {
        store.dispatch('updateAccount', resp.body);
        this.initDict();
      }
    })
  },
  methods: {
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
  components: {
    appHead,
    appMenu
  }
}
</script>
