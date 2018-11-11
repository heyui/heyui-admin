<style lang="less">
  .autocomplete-complex-demos{
  }
</style>
<template>
  <div class="autocomplete-complex-demos frame-page">
    <div class="h-panel"  v-padding="40">
      <Form style="max-width: 400px" :labelWidth="100">
        <FormItem label="公司信息" readonly>
          {{companyId}}/{{companyName}}
        </FormItem>
        <FormItem label="公司">
          <AutoComplete config="company" v-model="companyId" :show="companyName" @change="onChange"></AutoComplete>
        </FormItem>
        <FormItem label="人员信息" readonly>
          {{accountId}}/{{accountName}}
        </FormItem>
        <FormItem label="人员">
          <AutoComplete config="account" v-model="accountId" :show="accountName" :option="{companyId: companyId,companyName: companyName}" @change="onChange1"></AutoComplete>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      companyId: 1,
      companyName: '知乎',
      accountId: 2,
      accountName: '张三'
    }
  },
  methods: {
    onChange(data, trigger) {
      this.companyName = data.title;
      this.accountId = null;
      this.accountName = null;
    },
    onChange1(data, trigger) {
      this.accountName = data.title;
    },
  }
};
</script>