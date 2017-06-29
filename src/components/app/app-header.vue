<template>
  <div class="app-header">
    <div class="app-header-menu-toggle text-hover" @click="togglemenu">
      <i class="h-icon-menu"></i>
    </div>
    <div class="float-right app-header-info">
      
      <span><a v-font="20" href="https://github.com/heyui/heyui-demo" target="_blank"><i class="h-icon-github"></i></a></span>
      <DropdownMenu class-name="app-header-dropdown"
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
        { key: 'logout', title: '退出登录', icon: 'h-icon-outbox' },
      ]
    }
  },
  computed: {
    ...mapState({
      User: 'User',
      showMenu: 'showMenu'
    })
  },
  methods: {
    ...mapActions([
      'updateMenu'
    ]),
    trigger(data) {
      if (data == 'logout') {
        Utils.removeLocal('Auth');
        window.location = '/login.html';
      }
    },
    togglemenu() {
      this.updateMenu(!this.showMenu);
    }
  }
}
</script>
