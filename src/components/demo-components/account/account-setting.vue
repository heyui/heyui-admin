<style lang='less'>
.account-setting-vue {

}
</style>
<template>
  <div class="account-setting-vue frame-page">
    <Row :space="30">
      <Col :xs='24' :sm='24' :md='8' :lg='8' :xl='8'>
        <div class="h-panel">
          <div class="home-part-body">
            用户信息
          </div>
        </div>
      </Col>
      <Col :xs='24' :sm='24' :md='16' :lg='16' :xl='16'>
        <div class="h-panel">
          <div class="h-panel-tabs-bar">
            <Tabs v-model="tab" :datas="tabs"></Tabs>
          </div>
          <AccountInfo v-if="tab == 'info'"></AccountInfo>

        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import AccountInfo from './modules/account-info'
export default {
  components: {
    AccountInfo
  },
  data() {
    return {
      tabs: {
        info: '个人信息',
        team: '团队成员'
      },
      tab: 'info'
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