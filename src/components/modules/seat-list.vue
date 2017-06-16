<template>
  <div class="app-seat-list" v-padding="20">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">坐席管理</span>
      </div>
      <div class="h-panel-body">
        <Table :columns="columns" :datas="list">
          <template scope="props">
              <td>{{props.data.agentNo}}</td>
              <td>{{props.data.agentGroup}}</td>
              <td>{{props.data.extensionNo}}</td>
              <td>{{props.data.role | dictMapping('role')}}</td>
              <td>{{props.data.presenceStatus | dictMapping('presenceStatus')}}</td>
          </template>
        </Table>
        <Loading :loading="loading"></Loading>
      </div>
    </div>
  </div>
</template>
<script>
import AgentList from 'model/list/AgentList';

export default {
  data() {
    return {
      columns: [
        { title: '坐席号' },
        { title: '坐席组号' },
        { title: '分机号' },
        { title: '角色' },
        { title: '坐席状态' },
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
      R.List.agentList().then(resp=>{
        if(resp.status == 200){
          this.list = AgentList.parse(resp.body);
        }else{
          this.$Message.error("取数失败");
        }
        this.loading = false;
      });
    }
  }
}
</script>
