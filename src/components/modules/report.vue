<template>
  <div class="app-seat-list" v-padding="20">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">系统报表</span>
      </div>
      <div class="h-panel-bar">
        <Form :label-width="120" mode="inline" :readonly="true">
          <FormItem label="查询时间范围"><DateRangePicker v-width="300" v-model="search" :option="{paramName:{start: 'startDate', end: 'endDate'}}"></DateRangePicker></FormItem>
          <FormItem><Button color="green" @click="getData">查询</Button><Button color="red" @click="resetData">重置</Button></FormItem>
        </Form>
      </div>
      <div class="h-panel-body">
        <Table :columns="columns"
           :datas="list">
          <template scope="props">
            <td>{{props.data.date}}</td>
            <td>{{props.data.callCount}}</td>
            <td>{{props.data.callOutCount}}</td>
            <td>{{props.data.callOutRate | rate}}</td>
            <td>{{props.data.callInCount}}</td>
            <td>{{props.data.callInRate | rate}}</td>
            <td>{{props.data.callEffectiveCount}}</td>
            <td>{{props.data.callEffectiveRate | rate}}</td>
            <td>{{props.data.avgBillSec | time}}</td>
            <td>{{props.data.avgOutBillSec | time}}</td>
            <td>{{props.data.avgInBillSec | time}}</td>
            <td>{{props.data.avgEffectiveBillSec | time}}</td>
            <td>{{props.data.maxBillSec | time}}</td>
            <td>{{props.data.totalBillSec | time}}</td>
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

import ReportList from 'model/list/ReportList';
import ReportSearch from 'model/list/ReportSearch';

export default {
  data() {
    return {
      columns: [
        { title: '日期', width: 150 , fixed: 'left'},
        { title: '电话数', width: 100 },
        { title: '呼出数', width: 100 },
        { title: '呼出比例', width: 100 },
        { title: '呼入数', width: 100 },
        { title: '呼入比例', width: 100 },
        { title: '接通数', width: 100 },
        { title: '接通比例', width: 100 },
        { title: '平均电话时间', width: 130 },
        { title: '平均呼出电话时间', width: 150 },
        { title: '平均呼入电话时间', width: 150 },
        { title: '平均接通通话时间', width: 150 },
        { title: '最长通话时间', width: 130 },
        { title: '通话总时间', width: 130 }
      ],
      list: [],
      loading: true,
      search: ReportSearch.parse({}),
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
  filters: {
    rate(value) {
      return (value*100).toFixed(2) + "%";
    },
    time(value) {
      let minitus = parseInt(value/60%60);
      minitus = `${(minitus<10?'0':'')}${minitus}`;
      let secords = parseInt(value%60);
      let hours = parseInt(value/3600);
      secords = `${(secords<10?'0':'')}${secords}`;
      if (hours == 0) {
        hours = '';
      }else{
        hours = `${(hours<10?'0':'')}${hours}:`;   
      }   
      return `${hours}${minitus}:${secords}`;
    }
  },
  methods: {
    resetData() {
      this.search = {
        start: null,
        end: null,
      };
      this.page.page = 1;
      this.getData();
    },
    getData() {
      this.loading = true;
      let param = Utils.extend({pageNum: this.page.page, pageSize: this.page.size}, ReportSearch.dispose({startDate: this.search.start, endDate: this.search.end}))
      R.List.reportList(param).then(resp=>{
        if(resp.status == 200){
          this.list = ReportList.parse(resp.body);
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
