<style lang='less'>
</style>
<template>
<div>
  <Layout class="app-frame" v-if="!loading" :siderCollapsed="siderCollapsed" :siderFixed="layoutConfig.siderFixed">
    <Sider theme="white"><appMenu></appMenu></Sider>
    <Layout :headerFixed="layoutConfig.headerFixed">
      <HHeader theme="white"><appHead @openSetting="openSetting=true" :layoutConfig="layoutConfig"></appHead></HHeader>
      <SysTabs v-if="layoutConfig.showSystab" homePage="Home"></SysTabs>
      <Content>
        <!-- <keep-alive> -->
        <router-view></router-view>
        <!-- </keep-alive> -->
        <appFooter></appFooter>
      </Content>
    </Layout>
  </Layout>
  <Modal v-model="openSetting">
    <appSetting :layoutConfig="layoutConfig"></appSetting>
  </Modal>
</div>
</template>
<script>


import appSetting from "./app-setting";
import appHead from './app-header';
import appMenu from './app-menu';
import appFooter from './app-footer';
import SysTabs from '../common/SysTabs/SysTabs';
import store from 'js/vuex/store';
import { mapState } from "vuex";

export default {
  data() {
    return {
      loading: true,
      openSetting: false,
      layoutConfig: {
        showSystab: false,
        headerFixed: false,
        siderFixed: false,
      }
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
    },
    updateLayoutConfig({key, value}) {
      this.layoutConfig[key] = value;
    }
  },
  computed: {
    ...mapState(['siderCollapsed'])
  },
  components: {
    appHead,
    appMenu,
    SysTabs,
    appFooter,
    appSetting
  }
};
</script>