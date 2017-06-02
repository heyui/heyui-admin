<template>
  <div class="app-seat-list" v-padding="20">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">通话查询</span>
      </div>
      <div class="h-panel-bar">
        <Form :label-width="100" mode="threecolumn" :no-valid="true">
          <FormItem label="开始时间"><DatePicker v-model="search.startDate" :option="{end:search.endDate}" type="date" placeholder="请选择开始日期"></DatePicker></FormItem>
          <FormItem label="结束时间"><DatePicker v-model="search.endDate" :option="{start:search.startDate}" type="date" placeholder="请选择开始日期"></DatePicker></FormItem>
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
        { title: '日期', width: 100 },
        { title: '电话数', width: 100 },
        { title: '呼出数', width: 100 },
        { title: '呼出比例', width: 100 },
        { title: '呼入数', width: 100 },
        { title: '呼入比例', width: 100 },
        { title: '接通数', width: 100 },
        { title: '接通比例', width: 100 },
        { title: '平均电话时间', width: 150 },
        { title: '平均呼出电话时间', width: 150 },
        { title: '平均呼入电话时间', width: 150 },
        { title: '平均接通通话时间', width: 150 },
        { title: '最长通话时间', width: 150 },
        { title: '通话总时间', width: 100 }
      ],
      list: [],
      loading: true,
      search: {
        startDate: null, //通话开始时间最小值
        endDate: null, //通话开始时间最大值
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
