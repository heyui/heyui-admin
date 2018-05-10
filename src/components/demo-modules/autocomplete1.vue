<style lang="less">
  .autocomplete-baidu{
    .middle-container{
      margin: 20% auto;
      width: 500px;
      .search-container{
        width: 500px;
        height: 40px;
        display: flex;
        input{
          height: 34px;
          line-height: 34px;
          font-size: 15px;
        }
        .h-autocomplete-show{
          border-color: @primary-color;  
        }
        .h-autocomplete .h-autocomplete-show .h-icon-loading, .h-autocomplete .h-autocomplete-show > .h-icon-close{
          display: none;
        }
      }
    }
  }
</style>
<template>
  <div v-padding="20" class="autocomplete-baidu">
    <div class="middle-container">
      <div class="search-container">
        <AutoComplete class="flex1" placeholder=" " :mustMatch="false" config="baidu" v-model="keyword" type="title" @change="trigger"></AutoComplete>
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
    }
  },
  methods: {
    trigger(data, type) {
      // log(data, type)
      if(type == 'enter' || type == 'picker') {
        this.$Message(`跳转至关键词“${this.keyword}”的搜索`);
      }
    },
    go() {
      setTimeout(()=>{
        this.$Message(`跳转至关键词“${this.keyword}”的搜索`);
      }, 100);
    }
  }
};
</script>