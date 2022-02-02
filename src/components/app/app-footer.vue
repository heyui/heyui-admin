<style lang="less">
.app-footer {
  text-align: center;
  padding: 10px 0 30px;
  color: rgba(0, 0, 0, 0.45);
  a {
    color: rgba(0, 0, 0, 0.45);
  }
}
</style>

<template>
  <div class="app-footer">
    Copyright © {{ nowYear }} vvpvvp · <a href="https://github.com/heyui/heyui-admin" target="_blank"><i class="h-icon-github"></i></a> ·
    <a href="https://v2.heyui.top" target="_blank">heyui 2.0</a> ·
    <a href="https://v3.cn.vuejs.org/" target="_blank">vue 3.0</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nowYear: new Date().getFullYear()
    };
  }
};
</script>
