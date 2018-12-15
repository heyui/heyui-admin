<style lang='less'>
</style>
<template>
  <div class="h-panel frame-page">
    <div class="h-panel-bar">
      <span class="h-panel-title">富文本编辑器</span>
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