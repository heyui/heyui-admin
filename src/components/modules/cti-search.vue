<template>
  <div class="app-seat-list" v-padding="20">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">通话查询</span>
      </div>
      <div class="h-panel-bar">
        <Form :label-width="150" mode="threecolumn" :readonly="true">
          <FormItem label="通话开始时间"><DatePicker v-model="search.startTime" :option="{end:search.endTime}" type="datetime" placeholder="请选择开始时间"></DatePicker></FormItem>
          <FormItem label="通话结束时间"><DatePicker v-model="search.endTime" :option="{start:search.startTime}" type="datetime" placeholder="请选择结束时间"></DatePicker></FormItem>
          <FormItem label="坐席号"><input type="text" v-model="search.agentNo"/></FormItem>
          <FormItem label="分机号"><input type="text" v-model="search.extensionNo"/></FormItem>
          <FormItem label="分机直线号码"><input type="text" v-model="search.outNumber"/></FormItem>
          <FormItem label="被叫号码"><input type="text" v-model="search.partnerNumber"/></FormItem>
          <FormItem><Button color="green" @click="getData">查询</Button><Button color="red" @click="resetData">重置</Button></FormItem>
        </Form>
      </div>
      <div class="h-panel-body">
        <Table :columns="columns"
           :datas="list">
          <template scope="props">
            <td>{{props.data.callId}}</td>
            <td>{{props.data.agentNo}}</td>
            <td>{{props.data.extensionNo}}</td>
            <td>{{props.data.outNumber}}</td>
            <td>{{props.data.callerNumber}}</td>
            <td>{{props.data.calleeNumber}}</td>
            <td>{{props.data.startTime}}</td>
            <td>{{props.data.endTime}}</td>
            <td>{{props.data.duration}}</td>
            <td>{{props.data.billsec}}</td>
          </template>
        </Table>
        <Loading :loading="loading"></Loading>
      </div>
      <div v-padding="15">
        <Pagination :cur="page.page" :total="page.total" align="right" @change="currentChange"></Pagination>
      </div>
    </div>
  </div>
</template>
<script>
import CallSearch from 'model/list/CallSearch';
import CallList from 'model/list/CallList';

export default {
  data() {
    return {
      columns: [
        { title: 'Call ID' , width: 300, fixed: 'left'},
        { title: '坐席号' , width: 100},
        { title: '分机号' , width: 100},
        { title: '直线号码', width: 100 },
        { title: '主叫号码', width: 120 },
        { title: '被叫号码', width: 120 },
        { title: '通话开始时间', width: 150 },
        { title: '通话结束时间', width: 150 },
        { title: '总时长', width: 100 },
        { title: '计费时长', width: 100 }
      ],
      list: [],
      loading: true,
      search: CallSearch.parse({}),
      page:{
        total: 0,
        page: 1,
        size: 10
      }
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    resetData() {
      this.search = CallSearch.parse({});
      this.page.page = 1;
      this.getData();
    },
    getData() {
      this.loading = true;
      let param = Utils.extend({pageNum: this.page.page, pageSize: this.page.size}, CallSearch.dispose(this.search))
      R.List.recordList(param).then(resp=>{
        if(resp.status == 200){
          this.list = CallList.parse(resp.body);
          this.page.page = resp.meta.page;
          this.page.total = resp.meta.total;
        }
        this.loading = false;
      });
    },
    currentChange(data) {
      this.page.page = data.cur;
      this.page.size = data.size;
      this.getData();
    }
  }
}
</script>
