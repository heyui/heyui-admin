<style lang='less'>
</style>
<template>
<div>
  <Layout class="app-frame" v-if="!loading" :siderCollapsed="siderCollapsed" :siderFixed="layoutConfig.siderFixed">
    <Sider :theme="layoutConfig.siderTheme"><appMenu :theme="layoutConfig.siderTheme"></appMenu></Sider>
    <Layout :headerFixed="layoutConfig.headerFixed">
      <HHeader theme="white"><appHead @openSetting="openSetting=true" :layoutConfig="layoutConfig"></appHead></HHeader>
      <SysTabs v-if="layoutConfig.showSystab" homePage="Home"></SysTabs>
      <Content>
        <!-- <keep-alive> -->
        <router-view></router-view>
        <!-- </keep-alive> -->
      </Content>
      <HFooter><appFooter></appFooter></HFooter>
    </Layout>
  </Layout>
  <Modal v-model="openSetting" type="drawer-right">
    <appLayoutSetting :layoutConfig="layoutConfig"></appLayoutSetting>
  </Modal>
</div>
</template>
<script>

import appLayoutSetting from './modules/app-layout-setting';
import appHead from './app-header';
import appMenu from './app-menu';
import appFooter from './app-footer';
import SysTabs from '../common/sys-tabs';
import store from 'js/vuex/store';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      loading: true,
      openSetting: false,
      layoutConfig: {
        siderTheme: 'white',
        showSystab: false,
        headerFixed: true,
        siderFixed: true
      }
    };
  },
  mounted() {
    // 如果无后台数据，将此处屏蔽
    this.init();

    // 如果无后台数据，将此处打开
    // this.loading = false;
  },
  methods: {
    init() {
      this.$Loading('加载中');
      R.User.info().then((resp) => {
        if (resp.ok) {
          resp.body.avatar = require('../../images/avatar.png');
          store.dispatch('updateAccount', resp.body);
          this.initDict();
        }
      });
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
    updateLayoutConfig({ key, value }) {
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
    appLayoutSetting
  }
};
</script>
