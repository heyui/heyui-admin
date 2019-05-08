<style lang='less'>
</style>
<template>
  <div class="h-panel frame-page">
    <div class="h-panel-bar">
      <span class="h-panel-title">富文本编辑器</span>
    </div>
    <div class="h-panel-bar">
      <Button @click="update">重新设置值</Button>
      <Button @click="clear">清空</Button>
    </div>
    <div class="h-panel-body">
      <RichTextEditor v-model="value"></RichTextEditor>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '<p><i>测试</i></p>'
    };
  },
  mounted() {
  },
  methods: {
    update() {
      this.value = '<p><i>更新</i></p>';
    },
    clear() {
      this.value = null;
    }
  },
  computed: {

  }
};
</script>
