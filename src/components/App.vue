<template>
  <div id="app" :class="{'hide-menu': !showMenu}">
    <template v-if="!loading">
      <appHead></appHead>
      <appMenu></appMenu>
      <div class="app-body">
        <router-view></router-view>
      </div>
    </template>
  </div>
</template>
<script>

import store from 'js/vuex/store';
import appHead from './app/app-header';
import appMenu from './app/app-menu';
import { mapState } from 'vuex'

export default {
  data() {
    return {
      loading: true
    }
  },
  store,
  mounted() {
    this.$Loading("加载中");
    R.User.info().then((resp)=>{
      if(resp.status == 200){
        store.dispatch('updateAccount', resp.body);
        this.initDict();
      }
    })
  },
  computed: {
    ...mapState({
      showMenu: 'showMenu'
    })
  },
  methods: {
    initDict() {
      R.Dict.get().then((resp)=>{
        if(resp.status == 200){
          let dicts = resp.body;
          for(let dict of dicts){
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
