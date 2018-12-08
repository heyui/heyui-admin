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