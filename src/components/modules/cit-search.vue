<template>
  <div class="app-seat-list" v-padding="20">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">通话查询</span>
      </div>
      <div class="h-panel-bar">
        <Form :label-width="150" mode="threecolumn" :no-valid="true">
          <FormItem label="开始时间"><DatePicker v-model="search.startTime" :option="{end:search.endTime}" type="datetime" placeholder="请选择开始时间"></DatePicker></FormItem>
          <FormItem label="结束时间"><DatePicker v-model="search.endTime" :option="{start:search.startTime}" type="datetime" placeholder="请选择开始时间"></DatePicker></FormItem>
          <FormItem label="坐席号"><input type="text" v-model="search.agentNo"/></FormItem>
          <FormItem label="分机号"><input type="text" v-model="search.extensionNo"/></FormItem>
          <FormItem label="分机直线号码"><input type="text" v-model="search.outNumber"/></FormItem>
          <FormItem label="对方号码"><input type="text" v-model="search.partnerNumber"/></FormItem>
          <FormItem><Button color="green">查询</Button></FormItem>
        </Form>
      </div>
      <div class="h-panel-body">
        <Table :columns="columns"
           :datas="list">
          <template scope="props" slot="tr">
              <td>{{props.data.name}}</td>
              <td>{{props.data.age}}</td>
              <td>{{props.data.address}}</td>
              <td>
                <button class="h-btn h-btn-s h-btn-red" @click="remove(datas1, props.data)"><i class="h-icon-trash"></i></button>
              </td>
            </tr>
          </template>
        </Table>
        <Loading :loading="loading"></Loading>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      columns: [
        { title: 'Call ID' },
        { title: '坐席号' },
        { title: '分机号' },
        { title: '直线号码' },
        { title: '主叫号码' },
        { title: '被叫号码' },
        { title: '通话开始时间' },
        { title: '通话结束时间' },
        { title: '总时长' },
        { title: '计费时长' },
        { title: '录音' }
      ],
      list: [],
      loading: true,
      search: {
        startTime: null, //通话开始时间最小值
        endTime: null, //通话开始时间最大值
        agentNo: null, //坐席号
        extensionNo: null, //分机号
        outNumber: null, //分机直线号码
        partnerNumber: null, //对方号码
      }
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = false;
    }
  }
}
</script>
