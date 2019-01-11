
<template>
  <div class="app-setting-vue">
    <div class="h-modal-header">系统布局配置</div>
    <div class="h-panel">
      <div class="h-panel-body">
        <p class="dark-color"><i class="h-icon-info blue-color"></i> 所有的配置都在 app-frame.vue 文件内，根据你需求设置排版方式。</p>
        <p style="height: 10px"></p>
        <Form :labelWidth="120" readonly>
          <FormItem label="固定 Header">
            <h-switch small v-model="layoutConfig.headerFixed" @input="updateHeaderFixed"></h-switch>
          </FormItem>
          <FormItem label="固定侧边菜单">
            <h-switch small v-model="layoutConfig.siderFixed"></h-switch>
          </FormItem>
          <FormItem label="开启多Tab">
            <h-switch small v-model="layoutConfig.showSystab"></h-switch>
            <span class="dark-color">开启后，在 app-frame 中打开 keep-alive 才能开启页面缓存</span>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>

import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  props: {
    layoutConfig: Object
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    updateHeaderFixed() {
      // if (!this.layoutConfig.headerFixed) {
      //   this.layoutConfig.showSystab = false;
      // }
    }
  }
}
</script>