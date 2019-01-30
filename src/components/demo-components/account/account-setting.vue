<style lang='less'>
.account-setting-vue {
}
</style>
<template>
  <div class="account-setting-vue frame-page">
    <Row :space="30">
      <Col :xs='24' :sm='24' :md='6' :lg='6' :xl='6'>
        <AccountInfoShow :account="account"></AccountInfoShow>
      </Col>
      <Col :xs='24' :sm='24' :md='18' :lg='18' :xl='18'>
        <div class="h-panel">
          <div class="h-panel-tabs-bar">
            <Tabs v-model="tab" :datas="tabs"></Tabs>
          </div>
          <AccountInfo v-if="tab == 'info'" :account="account"></AccountInfo>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import AccountInfo from './modules/account-info';
import AccountInfoShow from './modules/account-info-show';

export default {
  components: {
    AccountInfo,
    AccountInfoShow
  },
  data() {
    return {
      tabs: {
        info: '基本设置',
        team: '团队成员'
      },
      tab: 'info',
      account: {
        avatar: require("../../../images/avatar.png"),
        name: 'vvpvvp',
        desc: '执着于理想，纯粹于当下',
        email: 'HeyUI@some.com',
        org: '某某公司',
        dept: '某某部门',
        title: '前端开发工程师',
        location: '上海市',
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      
    }
  },
  computed: {
    
  }
}
</script>