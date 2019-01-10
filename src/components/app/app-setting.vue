<style lang='less'>
.app-setting-vue {

}
</style>
<template>
  <div class="app-setting-vue frame-page">
    <div class="h-panel">
      <div class="h-panel-body">
        <Form :labelWidth="120" readonly>
          <FormItem label="开启多Tab">
            <h-switch small v-model="showSystab"></h-switch>
            <p>开启过后需要在 app-frame 中打开 keep-alive 才能开启页面缓存</p>
          </FormItem>
        </Form>
        <Form :labelWidth="100" readonly>
          <FormItem label="固定 Header">
            <h-switch small v-model="headerFixed"></h-switch>
          </FormItem>
        </Form>
        <Form :labelWidth="100" readonly>
          <FormItem label="固定侧边菜单">
            <h-switch small v-model="siderFixed"></h-switch>
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
  data() {
    return {
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    showSystab: {
      get () {
        return this.$store.state.showSystab;
      },
      set (value) {
        this.$store.commit('updateSystab', value)
      }
    },
    headerFixed: {
      get () {
        return this.$store.state.headerFixed;
      },
      set (value) {
        this.$store.commit('updateHeaderFixed', value)
      }
    },
    siderFixed: {
      get () {
        return this.$store.state.siderFixed;
      },
      set (value) {
        this.$store.commit('updateSiderFixed', value)
      }
    }
  },
  methods: {
    init() {
      
    }
  }
}
</script>