<style lang='less'>
.app-home {
  .home-part-body {
    height: 350px;
    .echarts {
      height: 350px;
    }
  }
  .progress-div {
    .h-progress {
      margin: 25px 0;
      &-title {
        color: @dark2-color;
        font-size: 18px;
      }
      &-text {
        width: 40px;
      }
    }
  }
}
</style>
<template>
  <div class="app-home frame-page">
    <Row :space="20">
      <Col :xs='24' :sm='24' :md='24' :lg='16' :xl='16'>
        <div class="h-panel">
          <div class="h-panel-bar">
            <div class="h-panel-title">数据走势</div>
          </div>
          <div class="home-part-body">
            <Chart :options="data1"></Chart>
          </div>
        </div>
      </Col>
      <Col :xs='24' :sm='24' :md='24' :lg='8' :xl='8'>
        <div class="h-panel">
          <div class="h-panel-bar">
            <div class="h-panel-title">订单统计</div>
            <div class="h-panel-right"><span class="gray-color">总共达成</span><i class="h-split"></i><span class="font20 primary-color">200</span><i class="h-split"></i><span class="gray-color">W</span></div>
          </div>
          <div class="h-panel-body progress-div home-part-body">
            <p><Progress :percent="99" color="green"><span slot="title">订单状态</span><span slot="text">4个</span></Progress></p>
            <p><Progress :percent="88" color="yellow"><span slot="title">订单状态</span><span slot="text">0个</span></Progress></p>
            <p><Progress :percent="55" color="red"><span slot="title">订单状态</span><span slot="text">0个</span></Progress></p>
            <p><Progress :percent="77" color="yellow"><span slot="title">订单状态</span><span slot="text">0个</span></Progress></p>
            <p><Progress :percent="66" color="yellow"><span slot="title">订单状态</span><span slot="text">0个</span></Progress></p>
          </div>
        </div>
      </Col>

      <Col :xs='24' :sm='24' :md='24' :lg='16' :xl='16'>
        <div class="h-panel">
          <div class="h-panel-bar">
            <div class="h-panel-title">数据比例</div>
          </div>
          <div class="home-part-body">
            <Chart :options="data2"></Chart>
          </div>
        </div>
      </Col>

      <Col :xs='24' :sm='24' :md='24' :lg='8' :xl='8'>
        <div class="h-panel">
          <div class="h-panel-bar">
            <div class="h-panel-title">数据比例</div>
          </div>
          <div class="h-panel-body home-part-body">
            <h-circle :percent="76" :stroke-width="10" :size="200">
              <div class="gray-color" v-font="28">122,332,98</div>
              <div v-height="5"></div>
              <div class="dark-color" v-font="13">目前达成比例</div>
              <div class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*76/100)}}</span>/<span>123</span></div>
            </h-circle>
            <h-circle :percent="26" :stroke-width="10" :size="118" color="red">
              <div v-height="5"></div>
              <div class="dark-color" v-font="13">目前达成比例</div>
              <div class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*26/100)}}</span>/<span>123</span></div>
            </h-circle>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import data1 from 'components/demo-components/components/datas/data1';
import data2 from 'components/demo-components/components/datas/data2';

export default {
  data() {
    return {
      data1,
      data2,
    };
  },
  methods: {}
};
</script>
