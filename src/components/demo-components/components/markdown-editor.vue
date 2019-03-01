<style lang='less'>
</style>
<template>
  <div class="h-panel frame-page">
    <div class="h-panel-bar">
      <span class="h-panel-title">Markdown编辑器</span>
    </div>
    <div class="h-panel-bar">
      <h-switch v-model="readonly">只读模式</h-switch>
    </div>
    <div class="h-panel-body">
      <MarkdownEditor v-model="value" :readonly="readonly"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '# 标题 \r## 二级标题 \r### 列表 \r* 一级列表 \r\t* 二级列表 \r\r### 代码 \r``` javascript \rlet a = 1; \r```',
      readonly: false
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
