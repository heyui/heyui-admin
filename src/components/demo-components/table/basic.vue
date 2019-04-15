<style lang='less'>
  .table-basic-vue {}
</style>
<template>
  <div class="table-basic-vue frame-page h-panel">
    <div class="h-panel-bar"><span class="h-panel-title">基础表格</span></div>
    <div class="h-panel-body">
      <div>
        <Tabs :datas="tabs" className="common-status-filter-tabs" v-model="type" @change="getData(true)">
          <template slot-scope="{tab}" slot="item">
            <p class="code">{{counts[`${tab.key}`] || 0}}</p>
            <p class="name">{{tab.title}}</p>
          </template>
        </Tabs>
      </div>
      <div class="common-filter-bar">
        <div class="float-right">
          <Select class="common-filter-select" autosize v-width="160" v-model="sort" :datas="sortList" :no-border="true" @input="getData(true)" :null-option="false" placeholder="请选择您的内容"></Select>
        </div>
      </div>
      <Table :loading="loading" :datas="datas">
        <TableItem title="序号">
          <template slot-scope="{index}">{{index+1}} </template>
        </TableItem>
        <TableItem :width="200" prop="name" title="姓名"></TableItem>
        <TableItem :width="200" prop="salary" title="薪资"></TableItem>
        <TableItem :width="200" prop="country" title="国家"></TableItem>
        <TableItem :width="200" prop="city" title="城市"></TableItem>
        <TableItem :width="200" prop="name" title="姓名"></TableItem>
        <TableItem :width="200" prop="salary" title="薪资"></TableItem>
        <TableItem :width="200" prop="country" title="国家"></TableItem>
        <TableItem :width="200" prop="city" title="城市"></TableItem>
        <TableItem :width="200" prop="name" title="姓名"></TableItem>
        <TableItem :width="200" prop="salary" title="薪资"></TableItem>
        <TableItem :width="200" prop="country" title="国家"></TableItem>
        <TableItem :width="200" prop="city" title="城市"></TableItem>
      </Table>
      <p></p>
      <Pagination v-if="pagination.total>0"  align="right" v-model="pagination" @change="changePage" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: '',
      sort: 'updatedAt:desc',
      sortList: {
        'updatedAt:desc': '更新时间倒序',
        'updatedAt:asc': '更新时间正序',
        'createdAt:desc': '创建时间倒序',
        'createdAt:asc': '创建时间正序'
      },
      pagination: {
        page: 1,
        size: 20,
        total: 0
      },
      tabs: [
        { key: 'China', title: 'Malawi' },
        { key: 'Niger', title: 'Niger' },
        { key: 'Curaçao', title: 'Curaçao' },
        { key: 'Korea', title: 'Korea' },
        { key: 'Malawi', title: 'Malawi' }
      ],
      type: 'China',
      datas: [],
      counts: {},
      loading: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getData();
      this.getCounts();
    },
    changePage() {
      this.getData(true);
    },
    getCounts() {
      setTimeout(() => {
        this.counts = {
          China: 900,
          Niger: 90,
          Curaçao: 20,
          Korea: 30,
          Malawi: 45
        };
      }, 1000);
    },
    getData(reload = false) {
      if (reload) {
        this.pagination.page = 1;
      }
      this.loading = true;
      setTimeout(() => {
        this.datas = [{ name: 'Dakota Rice', salary: '$36,738', country: 'Niger', city: 'Oud-Turnhout' },
          { name: 'Minerva Hooper', salary: '$23,789', country: 'Curaçao', city: 'Sinaai-Waas' },
          { name: 'Sage Rodriguez', salary: '$56,142', country: 'Netherlands', city: 'Baileux' },
          { name: 'Philip Chaney', salary: '$38,735', country: 'Korea, South', city: 'Overland Park' },
          { name: 'Doris Greene', salary: '$63,542', country: 'Malawi', city: 'Feldkirchen in Kärnten' },
          { name: 'Mason Porter', salary: '$78,615', country: 'Chile', city: 'Gloucester' },
          { name: 'Dakota Rice', salary: '$36,738', country: 'Niger', city: 'Oud-Turnhout' },
          { name: 'Minerva Hooper', salary: '$23,789', country: 'Curaçao', city: 'Sinaai-Waas' },
          { name: 'Sage Rodriguez', salary: '$56,142', country: 'Netherlands', city: 'Baileux' },
          { name: 'Philip Chaney', salary: '$38,735', country: 'Korea, South', city: 'Overland Park' },
          { name: 'Doris Greene', salary: '$63,542', country: 'Malawi', city: 'Feldkirchen in Kärnten' },
          { name: 'Mason Porter', salary: '$78,615', country: 'Chile', city: 'Gloucester' }];
        this.pagination.total = 100;
        this.loading = false;
      }, 1000);
    }
  },
  computed: {

  }
};
</script>
