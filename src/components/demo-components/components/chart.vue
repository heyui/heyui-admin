<style lang='less'>
</style>
<template>
  <div class="frame-page">
    <div class="h-panel h-panel-body">
      <Chart :options="data1"></Chart>
    </div>
  </div>
</template>
<script>

import data1 from './datas/data1'
export default {
  data() {
    return {
      data1
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