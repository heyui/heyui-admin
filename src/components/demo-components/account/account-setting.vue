<style lang='less'>
.account-setting-vue {

}
</style>
<template>
  <div class="account-setting-vue frame-page frame-flex-page h-panel">
    <div class="frame-left">
      <SubMenu :datas="menus"></SubMenu>
    </div>
    <div class="frame-main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [{
        title: '安全设置',
        key: 'SecuritySetting'
      }, {
        title: '通知设置',
        key: 'NoticeSetting'
      }]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {

    }
  },
  computed: {

  }
};
</script>
