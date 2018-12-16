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
      value: '# title11 \r## subtitle \r* 哈哈 \r* 哈哈 \r* 测试 \r\t* 测试 \r\t* 测试',
      readonly: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      
    }
  },
  computed: {
    
  }
}
</script>