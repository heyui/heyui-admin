<style lang="less">
.app-layout-setting-vue {
  width: 300px;
  .h-panel-body {
    padding: 15px;
  }
  .alert-warning {
    border: 1px solid #ffe58f;
    background-color: #fffbe6;
    line-height: 1.5;
    font-size: 12px;
    color: rgba(0,0,0,.65);
    box-sizing: border-box;
    margin: 0;
    list-style: none;
    position: relative;
    padding: 10px 20px;
    border-radius: 4px;
    margin-top: 16px;
  }
  .setting-form {
    margin: 0 0 0 -15px;
    .h-form-item{
      margin-bottom: 10px;
    }
    .h-form-item-wrap {
      float: right;
    }
  }
}
</style>

<template>
  <div class="app-layout-setting-vue">
    <div class="h-modal-header">系统布局配置</div>
    <div class="h-panel">
      <div class="h-panel-body">
        <Form class="setting-form" :labelWidth="120" labelPosition="left" readonly>
          <FormItem label="Sider风格">
            <SwitchList v-model="layoutConfig.siderTheme" small :datas="{'white': '白色', 'dark': '暗色'}"></SwitchList>
          </FormItem>
          <FormItem label="固定 Header">
            <h-switch small v-model="layoutConfig.headerFixed"></h-switch>
          </FormItem>
          <FormItem label="固定侧边菜单">
            <h-switch small v-model="layoutConfig.siderFixed"></h-switch>
          </FormItem>
          <FormItem label="开启多Tab">
            <h-switch small v-model="layoutConfig.showSystab"></h-switch>
          </FormItem>
          <p class="dark-color font13" style="padding: 10px 15px;">开启多Tab后，在 app-frame 中打开 keep-alive 才能开启页面缓存</p>
        </Form>
        <Button block @click="copySetting">复制配置</Button>
        <p class="alert-warning">所有的配置都在 app-frame.vue 文件内，通过 layoutConfig 参数设置排版方式。</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    layoutConfig: Object
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    copySetting() {
      this.$Clipboard({ text: JSON.stringify(this.layoutConfig, null, 2), showSuccessTip: '复制成功' });
    }
  }
};
</script>
