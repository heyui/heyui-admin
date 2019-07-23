<style lang='less'>
.authorization-vue {
  .authorization-frame {
    display: flex;
    height: 70vh;
    border: @border;
    margin-bottom: 20px;
    > div {
      padding: 10px;
      border-right: @border;
      flex: 1;
      overflow: auto;
      &:last-of-type {
        border-right: none;
      }
      .h-tree-show-desc {
        font-size: 14px;
      }
    }
  }
}
</style>
<template>
  <div class="authorization-vue frame-page h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">权限管理</span>
    </div>
    <div class="h-panel-body">
      <div class="authorization-frame">
        <div class="role-container">

        </div>
        <div class="menu-container">
          <Tree :option="menuOption" multiple choose-mode="some" ref="menu"></Tree>
        </div>
        <div class="users-container">
          <Tree :option="userOption" ref="user"></Tree>
        </div>
      </div>
      <div class="text-center">
        <Button color="primary">保存</Button>
        <Button>重置</Button>
      </div>
    </div>
  </div>
</template>
<script>

import { menus } from '../../js/config/menu-config';

export default {
  data() {
    return {
      menuOption: {
        datas: menus
      },
      userOption: {
        keyName: 'id',
        titleName: 'name',
        dataMode: 'list',
        parentName: 'parent',
        getTotalDatas(callback) {
          R.Management.users().then(resp => {
            if (resp.ok) {
              callback(resp.body);
            }
          });
        }
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$refs.menu.expandAll();
    }
  },
  computed: {

  }
};
</script>
