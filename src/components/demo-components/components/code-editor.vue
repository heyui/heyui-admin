<style lang='less'>
</style>
<template>
  <div class="h-panel frame-page">
    <div class="h-panel-bar">
      <span class="h-panel-title">代码编辑器</span>
    </div>
    <div class="h-panel-bar">
      <SwitchList v-model="mode" :datas="datas" @input="change"></SwitchList>
    </div>
    <div class="h-panel-body">
      <CodeEditor v-model="value" :mode="mode"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 'let a = 1;',
      mode: 'javascript',
      datas: ['javascript', 'sql', 'markdown']
    };
  },
  mounted() {
  },
  methods: {
    change() {
      this.value = {
        javascript: 'let a = 1;',
        sql: 'select * from user',
        markdown: '# title'
      }[this.mode];
    }
  },
  computed: {

  }
};
</script>
