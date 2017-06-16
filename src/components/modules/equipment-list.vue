<template>
  <div class="app-seat-list" v-padding="20">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">设备管理</span>
      </div>
      <div class="h-panel-body">
        <Table :columns="columns"
           :datas="list">
          <template scope="props">
            <td>{{props.data.extensionNo}}</td>
            <td>{{props.data.outNumber}}</td>
            <td>{{props.data.phoneType | dictMapping('phoneType')}}</td>
            <td>{{props.data.phoneStatus | dictMapping('phoneStatus')}}</td>
            <td>{{props.data.callerNumber}}</td>
            <td>{{props.data.calleeNumber}}</td>
            <td>{{props.data.callStartTime}}</td>
          </template>
        </Table>
        <Loading :loading="loading"></Loading>
      </div>
    </div>
  </div>
</template>
<script>

import ExtensionList from 'model/list/ExtensionList';

export default {
  data() {
    return {
      columns: [
        { title: '分机号' },
        { title: '直线号码' },
        { title: '话机类型' },
        { title: '话机状态' },
        { title: '主叫号码' },
        { title: '被叫号码' },
        { title: '通话开始时间' }
      ],
      list: [],
      loading: true
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      R.List.extensionList().then(resp=>{
        if(resp.status == 200){
          this.list = ExtensionList.parse(resp.body);
        }else{
          this.$Message.error("取数失败");
        }
        this.loading = false;
      });
    }
  }
}
</script>
