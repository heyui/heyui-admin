<template>
  <div class="app-detail" v-padding="20">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">系统参数</span>
      </div>
      <div class="h-panel-body">
        <Form label-position="left" :label-width="150" >
          <FormItem label="Max CPS">100</FormItem>
          <FormItem label="Max Session">100</FormItem>
          <FormItem label="网关IP">172.16.52.100</FormItem>
          <FormItem label="CTI服务器IP">100</FormItem>
          <FormItem label="CTI服务器端口">100</FormItem>
          <FormItem label="FreeSWITCH IP">100</FormItem>
          <FormItem label="FreeSWITCH端口">100</FormItem>
        </Form>
        <Loading :loading="loading"></Loading>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {}
}
</script>
