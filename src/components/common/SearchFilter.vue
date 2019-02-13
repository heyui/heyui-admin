<style lang='less'>
.search-filter-wrap {
  
}
</style>
<template>
  <div class="search-filter-wrap">
    <div class="search-picker-wrap">
      <div class="search-picker-label">{{title}}</div>
      <div class="search-picker-item-group">
        <span @click="clear">不限</span>
        <span v-for="d of datas" @click="setvalue(d)" :class="{selected: multiple ? value[key] == d.key : value[key].indexOf(d.key) > -1}">{{d.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    datas: Array,
    key: String,
    value: Object,
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
  mounted() {
  },
  methods: {
    setvalue() {
      this.$emit('update', key, value)
    }
  },
  computed: {
    
  }
}
</script>