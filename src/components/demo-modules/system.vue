<template>
  <div class="app-detail" v-padding="20">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">参数</span>
      </div>
      <div class="h-panel-body">
        <Form label-position="left" :label-width="150" readonly>
          <FormItem label="信息1">{{config.maxCps}}</FormItem>
          <FormItem label="信息2">{{config.maxSession}}</FormItem>
          <FormItem label="信息3">{{config.gatewayIp}}</FormItem>
          <FormItem label="信息4">{{config.ctiIp}}</FormItem>
          <FormItem label="信息5">{{config.ctiPort}}</FormItem>
          <FormItem label="信息6">{{config.freeswitchIp}}</FormItem>
          <FormItem label="信息7">{{config.freeswitchPort}}</FormItem>
        </Form>
        <Loading :loading="loading"></Loading>
      </div>
    </div>
  </div>
</template>
<script>

import Config from 'model/demo/Config';

export default {
  data() {
    return {
      loading: true,
      config: Config.parse({})
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData(){
      R.Demo.config().then(resp=>{
        if(resp.ok){
          this.config = Config.parse(resp.body);
        }else{
          this.$Message.error("取数失败");
        }
        this.loading = false;
      });
    }
  }
}
</script>
