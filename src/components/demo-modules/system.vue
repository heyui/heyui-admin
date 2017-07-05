<template>
  <div class="app-detail" v-padding="20">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">参数</span>
      </div>
      <div class="h-panel-body">
        <Form label-position="left" :label-width="150" readonly>
          <FormItem label="Max CPS">{{config.maxCps}}</FormItem>
          <FormItem label="Max Session">{{config.maxSession}}</FormItem>
          <FormItem label="网关IP">{{config.gatewayIp}}</FormItem>
          <FormItem label="CTI服务器IP">{{config.ctiIp}}</FormItem>
          <FormItem label="CTI服务器端口">{{config.ctiPort}}</FormItem>
          <FormItem label="FreeSWITCH IP">{{config.freeswitchIp}}</FormItem>
          <FormItem label="FreeSWITCH端口">{{config.freeswitchPort}}</FormItem>
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
        if(resp.status == 200){
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
