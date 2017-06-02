<template>
  <div class="app-seat-list" v-padding="20">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">设备管理</span>
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
        { title: '分机号' },
        { title: '直线号码' },
        { title: '分级类型' },
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
      this.loading = false;
    }
  }
}
</script>
