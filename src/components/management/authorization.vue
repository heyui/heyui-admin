<style lang='less'>
.authorization-vue {

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
          <Tree :option="menuOption" ref="menu"></Tree>
        </div>
        <div class="users-container">
          <Tree :option="userOption" ref="user"></Tree>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

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
