<template>
  <div class="app-header">
    <div class="app-header-title"><a href="http://www.heyui.top">HEY UI</a></div>
    <div class="float-right app-header-info">
      <span><a v-font="20" href="https://github.com/heyui/heyui-admin" target="_blank"><i class="h-icon-github"></i></a></span>
      <i class="h-split"></i>
      <DropdownMenu class-name="app-header-dropdown" placement="bottom-end"
                    :datas="infoMenu"
                    @onclick="trigger"><span>{{User.name}}</span></DropdownMenu>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      infoMenu: [
        { key: 'info', title: '个人信息', icon: 'h-icon-user' },
        { key: 'logout', title: '退出登录', icon: 'h-icon-outbox' },
      ]
    }
  },
  computed: {
    ...mapState({
      User: 'User'
    })
  },
  methods: {
    trigger(data) {
      if (data == 'logout') {
        Utils.removeLocal('Auth');
        this.$router.replace('/login');
      }
    }
  }
}
</script>
