<style lang="less">
.app-header-info {
  line-height: 40px;
  margin-right: 20px;
}

.app-header-dropdown{
  padding: 0 10px 0 20px;
  &:hover, &.@{pop-ref-prefix}{
    background: @gray3-color;
  }
}
</style>
<template>
  <div class="app-header">
    <div class="float-right app-header-info">
      <DropdownMenu class-name="app-header-dropdown"
                    :datas="infoMenu"
                    @onclick="trigger"><span>{{User.name}}</span></DropdownMenu>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

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
      User: 'User'
    })
  },
  methods: {
    trigger(data) {
      if (data == 'logout') {
        Utils.removeLocal('Auth');
        window.location = '/login.html';
      }
    }
  }
}
</script>
