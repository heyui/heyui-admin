<style lang='less'>
</style>
<template>
  <div class="search-list-vue frame-page h-panel">
    <div class="h-panel-bar"><span class="h-panel-title">查询列表</span></div>
    <div class="h-panel-bar">
      <div style="padding: 0px 0 20px;"><Search :width="400" v-model="params.keyword" @search="getData(true)" showSearchButton></Search></div>
      <div class="search-picker">
        <SearchFilter v-model="params" :datas="dicts.type" prop="type" title="类型"></SearchFilter>
        <SearchFilter v-model="params" :datas="dicts.location" prop="location" multiple title="地点"></SearchFilter>
        <SearchFilter v-model="params" :datas="dicts.salary" prop="salary" range title="金额"></SearchFilter>
        <SearchFilter v-model="params" :datas="dicts.year" prop="year" range title="时间"></SearchFilter>
      </div>
    </div>
    <div class="h-panel-body">
      <div>
        <AItem v-for="d of datas" :key="d.id" :item="d" :loading="loading"></AItem>
      </div>
      <Pagination v-if="pagination.total>0" align="right" v-model="pagination" @change="changePage" />
    </div>
  </div>
</template>
<script>

function initData() {
  let data = {
    title: 'HeyUI',
    tags: ['vue', 'ui', 'components', 'select'],
    desc: '一个基于Vue.js的高质量UI组件库，一个基于Vue.js的高质量UI组件库，一个基于Vue.js的高质量UI组件库，一个基于Vue.js的高质量UI组件库，一个基于Vue.js的高质量UI组件库'
  };
  let list = [];
  for (let i = 1; i < 10; i++) {
    list.push(Utils.extend({ id: i }, data));
  }
  return list;
}
export default {
  data() {
    return {
      dicts: {
        type: [{ key: 1, title: '类型一' }, { key: 2, title: '类型二' }, { key: 3, title: '类型三' }, { key: 4, title: '类型四' }, { key: 5, title: '类型五' }],
        location: [{ key: '001', title: '上海' }, { key: '002', title: '杭州' }, { key: '003', title: '北京' }, { key: '004', title: '广州' }, { key: '005', title: '深圳' }],
        salary: [{ key: '10', title: '10万以下', max: 10, min: 0 }, { key: '20', title: '10-20万', max: 20, min: 10 }, { key: '30', title: '20-30万', max: 30, min: 20 }, { key: '40', title: '30-40万', max: 40, min: 30 }, { key: '50', title: '50-100万', max: 100, min: 50 }, { key: '100', title: '100万以上', max: null, min: 100 }],
        year: [{ key: '1', title: '1年以下', max: 1, min: 0 }, { key: '3', title: '1-3年', max: 3, min: 1 }, { key: '5', title: '3-5年', max: 5, min: 3 }, { key: '10', title: '5-10年', max: 10, min: 5 }, { key: '100', title: '10年以上', max: 100, min: 10 }]
      },
      pagination: {
        page: 1,
        size: 20,
        total: 0
      },
      datas: [{}, {}, {}],
      loading: true,
      params: {
        keyword: null,
        location: [],
        type: null,
        year: {
          max: null,
          min: null
        },
        salary: {
          max: null,
          min: null
        }
      }
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    params() {
      this.getData(true);
    }
  },
  methods: {
    changePage(page) {
      this.getData();
    },
    init() {
      this.getData();
    },
    getData(reload = false) {
      if (reload) {
        this.pagination.page = 1;
      }
      this.loading = true;
      setTimeout(() => {
        this.datas = initData();
        this.pagination.total = 100;
        this.loading = false;
      }, 1000);
    }
  },
  computed: {

  }
};
</script>
