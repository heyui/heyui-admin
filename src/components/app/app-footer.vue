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
    <a href="https://www.heyui.top" target="_blank">heyui</a>
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
