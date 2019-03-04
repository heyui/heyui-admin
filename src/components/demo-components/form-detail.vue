<style lang="less">
.form-detail-vue {
  .h-panel-body {
    padding-right: 60px;
  }
  .info-basic {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .info-table {
    margin-top: 30px;
    .h-tabs {
      margin-bottom: 20px;
    }
  }
  .info-title {
    font-size: 16px;
    font-weight: bold;
  }
  .table-wrapper {
    padding: 0 20px;
  }
}
</style>

<template>
  <div class="app-form frame-page form-detail-vue">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">表单详情</span>
      </div>
      <div class="h-panel-body">

        <div class="info-title">
          基本信息
        </div>
        <!-- 基础信息 -->
        <Form class="info-basic" :label-width="90" mode="threecolumn" readonly>
          <FormItem label="生日：">
            1900-01-01
          </FormItem>
          <FormItem label="手机：">
            <span>138****0000</span>
          </FormItem>
          <FormItem label="邮箱：">
            <span>123456@gmail.com</span>
          </FormItem>
          <FormItem label="性别：">
            <span>女</span>
          </FormItem>
          <FormItem label="城市：">
            <span>上海市</span>
          </FormItem>
          <FormItem label="地址：">
            <span>xx区xx弄</span>
          </FormItem>
        </Form>

        <div class="info-title">
          其他信息
        </div>
        <!-- 基础信息 -->
        <Form class="info-basic" :label-width="90" mode="twocolumn" readonly>
          <FormItem label="生日：">
            1900-01-01
          </FormItem>
          <FormItem label="手机：">
            <span>138****0000</span>
          </FormItem>
          <FormItem label="邮箱：">
            <span>123456@gmail.com</span>
          </FormItem>
          <FormItem label="性别：">
            <span>女</span>
          </FormItem>
          <FormItem label="城市：">
            <span>上海市</span>
          </FormItem>
          <FormItem label="地址：">
            <span>xx区xx弄</span>
          </FormItem>
        </Form>

        <div class="info-title">
          操作记录
        </div>
        <!-- 表格 -->
        <section class="info-table">
          <Tabs :datas="tabConfig" v-model="selectedTab" @change="tabChanged"></Tabs>

          <div v-if="selectedTab == 'module1'" class="table-wrapper">
            <Table :datas="datas" :columns="columns">
              <div slot="empty">自定义提醒：暂时无数据</div>
            </Table>
          </div>

          <div v-if="selectedTab == 'module2'" class="table-wrapper">
            <Table :datas="datas2" :columns="columns">
              <div slot="empty">自定义提醒：暂时无数据</div>
            </Table>
          </div>

        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabConfig: {
        module1: '操作类型一',
        module2: '操作类型二'
      },
      selectedTab: 'module1',
      columns: [
        { title: '操作类型', prop: 'operateType' },
        { title: '操作人', prop: 'operateBy' },
        { title: '执行结果', prop: 'operateResult' },
        { title: '操作时间', prop: 'operateTime' },
        { title: '备注', prop: 'remark' }
      ],
      datas: [
        { id: 1, operateType: '订购关系生效', operateBy: '张三', operateResult: '成功', operateTime: '2019-02-14 13:27:12', remark: '-' },
        { id: 2, operateType: '财务复审', operateBy: '李四', operateResult: '驳回', operateTime: '2019-02-14 13:27:12', remark: '不通过原因' },
        { id: 3, operateType: '部门初审', operateBy: '李四', operateResult: '成功', operateTime: '2019-02-14 13:27:12', remark: '-' },
        { id: 4, operateType: '提交订单', operateBy: '王五', operateResult: '成功', operateTime: '2019-02-14 13:27:12', remark: '很好' },
        { id: 5, operateType: '创建订单', operateBy: '王五', operateResult: '成功', operateTime: '2019-02-14 13:27:12', remark: '-' }
      ],
      datas2: [
        { id: 5, operateType: '创建订单', operateBy: '王五', operateResult: '成功', operateTime: '2019-02-14 13:27:12', remark: '-' }
      ]
    };
  },
  methods: {
    tabChanged(data) {
      this.$Message.info(`切换至${data.title}`, 1000);
    }
  }
};
</script>
