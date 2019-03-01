<style lang='less'>
.notice-setting-vue {

}
</style>
<template>
  <div class="notice-setting-vue">
    <div class="subframe-title">通知设置</div>
    <div class="common-list-container">
      <div class="common-list-item">
        <div class="common-list-meta">
          <p class="font-bold">系统消息</p>
          <p>系统性的通知或者更新消息</p>
        </div>
        <div class="common-list-action"><h-switch v-model="openSystemMessage"></h-switch></div>
      </div>
      <div class="common-list-item">
        <div class="common-list-meta">
          <p class="font-bold">帐号消息</p>
          <p>帐号变更的通知消息</p>
        </div>
        <div class="common-list-action"><h-switch v-model="openAccountMessage"></h-switch></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openSystemMessage: true,
      openAccountMessage: true
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
