<style lang='less'>
.progress-div {
  padding: 30px 40px;
  > p {
    margin: 10px;
  }
}
</style>
<template>
  <div class="app-home frame-page">
    <Row :space="20">
      <Col :xs='24' :sm='24' :md='24' :lg='12' :xl='12'>
      <div class="h-panel" style="min-height: 280px" v-padding="30">
        <Row>
          <Col :xs='24' :sm='24' :md='24' :lg='11' :xl='11' class="text-center">
            <h-circle :percent="76" :stroke-width="10" :size="200">
              <div class="gray-color" v-font="28">122,332,98</div>
              <div v-height="5"></div>
              <div class="dark-color" v-font="13">目前达成比例</div>
              <div class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*76/100)}}</span>/<span>123</span></div>
            </h-circle>
          </Col>
          <Col :xs='24' :sm='24' :md='24' :lg='7' :xl='7' class="text-center">
            <div v-height="100"></div>
            <h-circle :percent="26" :stroke-width="10" :size="100" color="red">
              <div v-height="5"></div>
              <div class="dark-color" v-font="13">目前达成比例</div>
              <div class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*26/100)}}</span>/<span>123</span></div>
            </h-circle>
          </Col>
          <Col :xs='24' :sm='24' :md='24' :lg='6' :xl='6' class="text-center">
            <div v-height="100"></div>
            <h-circle :percent="100" :stroke-width="10" :size="100" color="green">
              <div v-height="5"></div>
              <div class="dark-color" v-font="13">目前达成比例</div>
              <div class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*26/100)}}</span>/<span>123</span></div>
            </h-circle>
          </Col>
        </Row>
      </div>
      </Col>
      <Col :xs='24' :sm='24' :md='24' :lg='12' :xl='12'>
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
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
