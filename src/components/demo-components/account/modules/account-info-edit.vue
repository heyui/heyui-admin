<style lang="less">
.account-info-vue {
  padding: 30px 30px 30px 0;
  max-width: 500px;
}
</style>
<template>
  <div class="account-info-vue">
    <Form :model="acc" :rules="rules" ref="form" showErrorTip>
      <FormItem label="头像" prop="avatar">
        <Upload display-type="image" data-type="url" v-model="acc.avatar" />
      </FormItem>
      <FormItem label="姓名" prop="name">
        <Input type="text" v-model="acc.name" />
      </FormItem>
      <FormItem label="描述" prop="desc">
        <Textarea v-autosize v-model="acc.desc" />
      </FormItem>
      <FormItem label="邮箱" prop="email">
        <Input type="text" v-model="acc.email" />
      </FormItem>
      <FormItem label="公司" prop="org">
        <Input type="text" v-model="acc.org" />
      </FormItem>
      <FormItem label="部门" prop="dept">
        <Input type="text" v-model="acc.dept" />
      </FormItem>
      <FormItem label="职位" prop="title">
        <Input type="text" v-model="acc.title" />
      </FormItem>
      <FormItem label="地址" prop="location">
        <Input type="text" v-model="acc.location" />
      </FormItem>
      <FormItem label="标签" prop="tags">
        <TagInput v-model="acc.tags"></TagInput>
      </FormItem>
      <FormItem label="" prop="location">
        <Button color="primary" @click="save" :loading="saveloading">保存</Button>
        <Button @click="reset">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import utils from '@common/utils';

export default {
  props: {
    account: Object
  },
  data() {
    return {
      acc: utils.copy(this.account),
      rules: {
        required: ['name', 'email', 'org'],
        email: ['email']
      },
      saveloading: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    save() {
      if (!this.$refs.form.valid().result) return;
      this.saveloading = true;
      setTimeout(() => {
        this.saveloading = false;
        this.$store.dispatch('updateAccount', utils.copy(this.acc));
      }, 1000);
    },
    reset() {
      this.$refs.form.resetValid();
      this.acc = utils.copy(this.account);
    }
  },
  computed: {}
};
</script>
