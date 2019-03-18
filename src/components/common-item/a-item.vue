<style lang='less'>
.a-item-vue {
  padding: 20px 0;
  margin: 0 10px;
  .title {
    font-size: 15px;
    font-weight: bold;
  }

  &:first-of-type {
    padding-top: 0;
  }

  + .a-item-vue {
    border-top: @border;
  }
}
</style>
<template>
  <div class="a-item-vue">
    <Skeleton active :loading="loading">
      <p class="title">{{item.title}}</p>
      <p class="tags"><TagInput v-model="item.tags" readonly></TagInput></p>
      <pre class="desc">{{item.desc}}</pre>
    </Skeleton>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
    loading: Boolean
  },
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
