<style lang='less'>
.security-setting-vue {

}
</style>
<template>
  <div class="security-setting-vue">
    <div class="subframe-title">安全设置</div>
    <div class="common-list-container">
      <div class="common-list-item">
        <div class="common-list-meta">
          <p class="font-bold"><i class="icon-head"></i> 帐号密码</p>
          <p>更新当前帐号密码</p>
        </div>
        <div class="common-list-action"><Button>修改</Button></div>
      </div>
      <div class="common-list-item">
        <div class="common-list-meta">
          <p class="font-bold"><i class="icon-microphone"></i> 绑定手机</p>
          <p>设置您的绑定手机号码</p>
        </div>
        <div class="common-list-action"><Button>修改</Button></div>
      </div>
      <div class="common-list-item">
        <div class="common-list-meta">
          <p class="font-bold"><i class="icon-mail"></i> 绑定邮箱</p>
          <p>设置您的绑定邮箱</p>
        </div>
        <div class="common-list-action"><Button>修改</Button></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {

    }
  },
  computed: {

  }
};
</script>
