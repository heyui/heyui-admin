<style lang='less'>
.authorization-vue {
  .authorization-frame {
    display: flex;
    height: 70vh;
    border: @border;
    margin-bottom: 20px;
    > div {
      padding: 20px 15px;
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
    .role-container {
      padding: 0;
      .role-item {
        padding: 5px 10px;
        border-bottom: @border;
        &:hover {
          background: @gray4-color;
          cursor: pointer;
        }
        .title {
          font-size: 16px;
          font-weight: bold;
          color: @dark-color;
        }
        .desc {
          color: @dark2-color;
        }
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
          <div v-for="role of roles" :key="role.name" class="role-item">
            <p class="title">{{role.name}}</p>
            <p class="desc">{{role.description}}</p>
          </div>
        </div>
        <div class="menu-container">
          <Tree :option="menuOption" multiple choose-mode="some" v-model="config.menus" ref="menu"></Tree>
        </div>
        <div class="users-container">
          <Tree :option="userOption" multiple ref="user" v-model="config.users"></Tree>
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
      roles: [],
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
      },
      config: {
        menus: [],
        users: []
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$refs.menu.expandAll();
      this.getRoles();
    },
    getRoles() {
      R.Management.roles().then(resp => {
        if (resp.ok) {
          this.roles = resp.body;
        }
      });
    }
  },
  computed: {

  }
};
</script>
