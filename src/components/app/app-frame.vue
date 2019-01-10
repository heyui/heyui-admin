<style lang='less'>
</style>
<template>
  <Layout class="app-frame" v-if="!loading" :siderCollapsed="siderCollapsed" :siderFixed="siderFixed">
    <Sider theme="white"><appMenu></appMenu></Sider>
    <Layout :headerFixed="headerFixed">
      <HHeader theme="white"><appHead></appHead></HHeader>
      <Content>
        <SysTabs v-if="showSystab" homePage="Home"></SysTabs>
        <!-- <keep-alive> -->
        <router-view></router-view>
        <!-- </keep-alive> -->
      </Content>
    </Layout>
  </Layout>
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
    ...mapState(['showSystab', 'siderCollapsed', 'headerFixed', 'siderFixed'])
  },
  components: {
    appHead,
    appMenu,
    SysTabs
  }
};
</script>