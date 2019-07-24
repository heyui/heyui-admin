<style lang='less'>
.users-vue {

}
</style>
<template>
  <div class="users-vue frame-page h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">用户</span>
    </div>
    <div class="h-panel-body">
      <div class="authorization-frame">
        <div class="users-container">
          <div style="margin-bottom: 10px;">
            <Button color="primary" size="s" @click="$refs.user.chooseAll();$refs.user.expandAll()">全选</Button>
            <Button size="s" @click="users = []" >清空</Button>
          </div>
          <!-- <Tree :option="userOption" multiple ref="user" v-model="users"></Tree> -->
        </div>
        <div>
          <Table></Table>
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
