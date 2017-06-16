<style lang='less'>
.progress-div{
  padding: 30px 40px;
  >p{
    margin: 10px;
  }
}
</style>
<template>
  <div class="app-home" v-padding="20">
    <Row :space="20">
      <Col :width="12">
      <div class="h-panel" v-height="280" v-padding="30">
        <Row>
          <Col :width="11" class="text-center">
            <h-circle :percent="76" :stroke-width="10" :size="200" v-tooltip ref-el="demo1" placement="right" theme="white">
              <p class="gray-color" v-font="28">122,332,98</p>
              <div v-height="5"></div>
              <p class="dark-color" v-font="13">目前达成比例</p>
              <p class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*76/100)}}</span>/<span>123</span></p>
            </h-circle>
          </Col>
          <Col :width="7" class="text-center">
            <div v-height="100"></div>
            <h-circle :percent="26" :stroke-width="10" :size="100" color="red" v-tooltip ref-el="demo2" placement="right" theme="white">
              <div v-height="5"></div>
              <p class="dark-color" v-font="13">目前达成比例</p>
              <p class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*26/100)}}</span>/<span>123</span></p>
            </h-circle>
          </Col>
          <Col :width="6" class="text-center">
            <div v-height="100"></div>
            <h-circle :percent="100" :stroke-width="10" :size="100" color="green" v-tooltip ref-el="demo2" placement="right" theme="white">
              <div v-height="5"></div>
              <p class="dark-color" v-font="13">目前达成比例</p>
              <p class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*26/100)}}</span>/<span>123</span></p>
            </h-circle>
          </Col>
        </Row>
      </div>
      </Col>
      <Col :width="12">
      <div class="h-panel progress-div" v-height="280">
        <div class="clearfix">
          <div class="float-right"><span v-color:gray>总共达成</span><i class="h-split"></i><span v-font="48" style="font-weight:100">200</span><i class="h-split"></i><span v-color:primary>W</span></div>
        </div>
        <p><Progress :percent="99" color="green"><span slot="title">推荐面试</span><span slot="text">4个</span></Progress></p>
        <p><Progress :percent="12" color="red"><span slot="title">客户面试</span><span slot="text">0个</span></Progress></p>
        <p><Progress :percent="12" color="red"><span slot="title">Offer谈判</span><span slot="text">0个</span></Progress></p>
        <p><Progress :percent="12" color="red"><span slot="title">入职试用</span><span slot="text">0个</span></Progress></p>
        <p><Progress :percent="12" color="red"><span slot="title">入职试用</span><span slot="text">0个</span></Progress></p>
      </div>
      </Col>
      <Col :width="24">
      <div class="h-panel" v-height="200">
      </div>
      </Col>
      <Col :width="24">
      <div class="h-panel" v-height="400">
        
      </div>
      </Col>
    </Row>
    <div tmpl="demo1">
      <div v-padding="20">
        <p>占值：70%</p>
        <p>占值：70%</p>
        <p>占值：70%</p>
        <p>占值：70%</p>
      </div>
    </div>
    <div tmpl="demo2">
      <div v-padding="20">
        <p>占值：70%</p>
        <p>占值：70%</p>
        <p>占值：70%</p>
        <p>占值：70%</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  methods: {}
}
</script>
