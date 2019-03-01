<style lang="less">
  .autocomplete-full-demos{
    h4{
      margin-top: 30px;
    }
    p{
      margin: 5px 0;
    }
  }
</style>
<template>
  <div class="autocomplete-full-demos frame-page h-panel">
    <div class="h-panel-bar"><span class="h-panel-title">场景应用</span></div>
    <div class="h-panel-body">
      <h4>默认Key模式</h4>
      <p>option可以传递一些业务参数，针对于选择数据的时候。</p>
      <p>value:{{value}}</p>
      <div v-width="300"><AutoComplete config="simple" v-model="value" @change="onChange" :option="{orgId: orgId}"></AutoComplete></div>

      <h4>Key模式，附带show属性</h4>
      <p>使用show属性做展示，针对一些平铺属性的对象。</p>
      <p>value: {{value5}}, show: {{show}}</p>
      <div v-width="300"><AutoComplete config="simple" v-model="value5" :show="show" @change="onChange1" type="key" :must-match="false"></AutoComplete></div>

      <h4>title模式</h4>
      <p>配合mustMatch=false，适用于输入提醒或者模糊查询的一些场景。</p>
      <p>value:{{value4}}</p>
      <div v-width="300"><AutoComplete config="simple" v-model="value4" @change="onChange" type="title" :must-match="false"></AutoComplete></div>

      <h4>Key多选模式</h4>
      <p>适用于一些数据选择的场景，比如说精准查询。</p>
      <p>value1:{{value1}}</p>
      <div v-width="300"><AutoComplete config="simple" v-model="value1" @change="onChange" multiple></AutoComplete></div>

      <h4>对象选择模式</h4>
      <p>适用于一些数据编辑的场景。</p>
      <p>value2:{{value2}}</p>
      <div v-width="300"><AutoComplete config="simple" v-model="value2" @change="onChange" type="object"></AutoComplete></div>

      <h4>对象多选模式</h4>
      <p>适用于一些数据编辑的场景。</p>
      <p>value3:{{value3}}</p>
      <div v-width="300"><AutoComplete config="simple" v-model="value3" @change="onChange" type="object" multiple></AutoComplete></div>
      <p>还有<code>mustMatch</code>等模式，具体请查看autocomplete文档。</p>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      value5: 34,
      show: '测试',
      value4: '测试',
      orgId: 1,
      value: '',
      value1: [],
      value2: null,
      value3: []
    };
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    },
    onChange1(data) {
      this.show = data.title;
    }
  }
};
</script>
