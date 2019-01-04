<style lang='less'>
.setting-vue {

}
</style>
<template>
  <div class="setting-vue frame-page">
    <div class="h-panel">
      <div class="h-panel-body">
        <Form :labelWidth="100" readonly>
          <FormItem label="开启多Tab">
            <h-switch v-model="showSystab"></h-switch>
            <span>开启过后需要在 app-frame 中打开 keep-alive 才能开启页面缓存</span>
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
    }
  },
  methods: {
    init() {
      
    }
  }
}
</script>