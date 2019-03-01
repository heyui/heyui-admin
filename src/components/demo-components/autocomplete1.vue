<style lang="less">
  .autocomplete-baidu{
    .middle-container{
      padding: 30vh 0;
      .search-container{
        max-width: 500px;
        margin: 0 auto;
        height: 40px;
        display: flex;
        input{
          height: 34px;
          line-height: 34px;
          font-size: 15px;
        }
        .h-autocomplete-show{
          border-color: @primary-color;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .h-autocomplete .h-autocomplete-show .h-icon-loading, .h-autocomplete .h-autocomplete-show > .h-icon-close{
          display: none;
        }
        .h-btn.h-btn-primary{
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }
  }
</style>
<template>
  <div class="frame-page autocomplete-baidu h-panel">
    <div class="h-panel-bar"><span class="h-panel-title">模糊搜索</span></div>
    <div class="middle-container">
      <div class="search-container">
        <AutoComplete class="flex1" :showDropdownWhenNoResult="false" placeholder=" " :mustMatch="false" config="baidu" v-model="keyword" type="title" @change="trigger"></AutoComplete>
        <Button color="primary" @click="go">百度一下</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: null
    };
  },
  methods: {
    trigger(data, type) {
      // log(data, type)
      if (type == 'enter' || type == 'picker') {
        this.$Message(`跳转至关键词“${this.keyword}”的搜索`);
      }
    },
    go() {
      setTimeout(() => {
        this.$Message(`跳转至关键词“${this.keyword}”的搜索`);
      }, 100);
    }
  }
};
</script>
