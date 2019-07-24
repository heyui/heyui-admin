<style lang='less'>
.authorization-vue {
  .authorization-frame {
    display: flex;
    height: 68vh;
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
        &.selected,&:hover {
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
      <span class="dark2-color">保存示例是存储在Local Storage中，可通过清空 Local Storage 属性 SYS_CONFIG_MENU 重置菜单</span>
    </div>
    <div class="h-panel-body">
      <div class="authorization-frame">
        <div class="role-container">
          <div v-for="r of roles" :key="r.id" class="role-item" :class="{selected: role == r}" @click="changeRole(r)">
            <p class="title">{{r.name}}</p>
            <p class="desc">{{r.description}}</p>
          </div>
        </div>
        <div class="menu-container">
          <div style="margin-bottom: 10px;">
            <Button color="primary" size="s" @click="$refs.menu.chooseAll();$refs.menu.expandAll()">全选</Button>
            <Button size="s" @click="menus = []" >清空</Button>
          </div>
          <Tree :option="menuOption" multiple choose-mode="some" v-model="menus" ref="menu"></Tree>
        </div>
        <div class="users-container">
          <div style="margin-bottom: 10px;">
            <Button color="primary" size="s" @click="$refs.user.chooseAll();$refs.user.expandAll()">全选</Button>
            <Button size="s" @click="users = []" >清空</Button>
          </div>
          <Tree :option="userOption" multiple ref="user" v-model="users"></Tree>
        </div>
      </div>
      <div class="text-center">
        <Button color="primary" @click="save">保存</Button>
        <Button @click="getData">重置</Button>
      </div>
    </div>
  </div>
</template>
<script>

import { fullMenus } from 'js/config/menu-config';

export default {
  data() {
    return {
      role: null,
      roles: [],
      menuOption: {
        datas: fullMenus
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
      menus: [],
      users: []
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
    changeRole(r) {
      this.role = r;
      this.getData(r);
    },
    getRoles() {
      R.Management.roles().then(resp => {
        if (resp.ok) {
          this.roles = resp.body;
          if (this.roles.length) {
            this.role = this.roles[0];
            this.getData();
          }
        }
      });
    },
    getData() {
      this.menus = G.get('SYS_MENUS');
    },
    save() {
      // 如果使用权限配置，配合后端获取请求的数据
      // R.Account.saveRoleConfig({roleId: this.role.id, menus: this.menus, roles: this.roles}).then(resp => {
      //   if (resp.ok) {
      //      this.$Message.success('保存成功');
      //      G.trigger('SYS_MENU_REFRESH');
      //   }
      // });
      Utils.saveLocal('SYS_CONFIG_MENU', this.menus);
      this.$Message.success('保存成功');
      G.trigger('SYS_MENU_REFRESH');
    }
  },
  computed: {

  }
};
</script>
