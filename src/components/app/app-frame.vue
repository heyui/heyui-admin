<style lang="less"></style>
<template>
  <div>
    <Layout class="app-frame" v-if="!loading" :siderCollapsed="siderCollapsed" :siderFixed="layoutConfig.siderFixed">
      <Sider :theme="layoutConfig.siderTheme">
        <appMenu :theme="layoutConfig.siderTheme"></appMenu>
      </Sider>
      <Layout :headerFixed="layoutConfig.headerFixed">
        <HHeader theme="white">
          <appHead @openSetting="openSetting = true" :layoutConfig="layoutConfig"></appHead>
        </HHeader>
        <SysTabs v-if="layoutConfig.showSystab" homePage="Home"></SysTabs>
        <Content>
          <div class="app-frame-content">
            <!-- <keep-alive> -->
            <router-view></router-view>
            <!-- </keep-alive> -->
          </div>
          <HFooter>
            <appFooter></appFooter>
          </HFooter>
        </Content>
      </Layout>
    </Layout>
    <Modal v-model="openSetting" type="drawer-right" title="系统布局配置">
      <appLayoutSetting :initLayoutConfig="layoutConfig"></appLayoutSetting>
    </Modal>
  </div>
</template>
<script>
import appLayoutSetting from './modules/app-layout-setting';
import appHead from './app-header';
import appMenu from './app-menu';
import appFooter from './app-footer';
import SysTabs from '../common/sys-tabs';
import { fullMenuKeys, isAuthPage } from '@js/config/menu-config';
import G from 'hey-global';
import Request from '@common/request';
import utils from '@common/utils';
import { loading, heyuiConfig } from 'heyui';

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
    this.listener = G.addlistener('SYS_MENU_REFRESH', () => {
      this.initMenu();
    });
  },
  beforeUnmount() {
    G.removelistener(this.listener);
  },
  methods: {
    init() {
      loading('加载中');
      Request.User.info().then(resp => {
        if (resp.ok) {
          resp.body.avatar = require('../../images/avatar.png');
          G.set('account', resp.body);
          this.$store.dispatch('updateAccount', resp.body);
          this.initDict();
          this.initMenu();
        }
      });
    },
    initDict() {
      Request.Dict.get().then(resp => {
        if (resp.ok) {
          let dicts = resp.body;
          for (let dict of dicts) {
            heyuiConfig.addDict(dict.name, dict.data);
          }
        }
        this.loading = false;
        loading.close();
      });
    },
    updateLayoutConfig({ key, value }) {
      this.layoutConfig[key] = value;
    },
    initMenu() {
      // 如果使用权限配置，配合后端获取请求的数据
      // Request.Account.menus().then(resp => {
      //   if (resp.ok) {
      //     this.menus = getMenus(resp.body);
      //     this.menuSelect();
      //   }
      // });
      let menus = utils.getLocal2Json('SYS_CONFIG_MENU') || fullMenuKeys;
      G.set('SYS_MENUS', menus);
      G.trigger('SYS_MENU_UPDATE');
      if (!isAuthPage(this.$route.name)) {
        this.$router.replace({ name: 'PermissionError' });
      }
    }
  },
  computed: {
    siderCollapsed() {
      return this.$store.state.siderCollapsed;
    }
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
