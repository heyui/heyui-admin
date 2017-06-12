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
                    @onclick="trigger"><span>个人信息</span></DropdownMenu>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      infoMenu: [
        { key: 'logout', title: '退出登录', icon: 'h-icon-outbox' },
      ]
    }
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
