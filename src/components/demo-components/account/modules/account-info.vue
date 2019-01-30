<style lang='less'>
.account-info-vue {
  padding: 30px 30px 30px 0;
  width: 500px;
}
</style>
<template>
  <div class="account-info-vue">
    <Form :model="acc" :rules="rules">
      <FormItem label="头像" prop="avatar">
        <Qiniu :options="options" type="image" data-type="url" v-model="acc.avatar"></Qiniu>
      </FormItem>
      <FormItem label="姓名" prop="name">
        <input type="text" v-model="acc.name"/>
      </FormItem>
      <FormItem label="描述" prop="desc">
        <textarea v-autosize v-model="acc.desc"/>
      </FormItem>
      <FormItem label="邮箱" prop="email">
        <input type="text" v-model="acc.email"/>
      </FormItem>
      <FormItem label="公司" prop="org">
        <input type="text" v-model="acc.org"/>
      </FormItem>
      <FormItem label="部门" prop="dept">
        <input type="text" v-model="acc.dept"/>
      </FormItem>
      <FormItem label="职位" prop="title">
        <input type="text" v-model="acc.title"/>
      </FormItem>
      <FormItem label="地址" prop="location">
        <input type="text" v-model="acc.location"/>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  props: {
    account: Object
  },
  data() {
    return {
      acc: Utils.copy(this.account),
      rules: {
        required: ['name', 'email', 'org'],
        email: ['email']
      },
      options: {
        max_file_size: '1mb',
        filters: {
          mime_types: [
            { title: "Image files", extensions: "jpg,gif,png" }
          ]
        }
      },
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      
    }
  },
  computed: {
    
  }
}
</script>