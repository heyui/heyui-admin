<style lang='less'>
</style>
<template>
  <div class="frame-page">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">图表1</span>
      </div>
      <div class="h-panel-body">
        <Chart :options="data1"></Chart>
      </div>
    </div>
    <div style="height:30px"></div>
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">图表2</span>
      </div>
      <div class="h-panel-body">
        <Chart :options="data2"></Chart>
      </div>
    </div>
    <div style="height:30px"></div>
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">图表3</span>
      </div>
      <div class="h-panel-body">
        <Chart :options="data3"></Chart>
      </div>
    </div>
    <div style="height:30px"></div>
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">图表4</span>
      </div>
      <div class="h-panel-body">
        <Chart :options="data4"></Chart>
      </div>
    </div>
  </div>
</template>
<script>

import data1 from './datas/data1';
import data2 from './datas/data2';
import data3 from './datas/data3';
import data4 from './datas/data4';
export default {
  data() {
    return {
      data1,
      data2,
      data3,
      data4
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
