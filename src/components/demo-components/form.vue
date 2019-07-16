<style lang="less">
.basic-form-vue {
  .h-panel-body {
    padding-right: 60px;
  }
}
</style>

<template>
  <div class="app-form frame-page basic-form-vue">
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">Form</span>
      </div>
      <div class="h-panel-body">
        <Form :label-width="110" mode="twocolumn" :model="data" :rules="validationRules" ref="form" showErrorTip>
          <FormItem label="输入框" prop="input">
            <input type="text" v-model="data.input" placeholder="请输入15/18位的字符串" />
            <template slot="error" slot-scope="props">
              <!-- *type*: base, combine, async -->
              <span class="link" v-if="props.type == 'async'">+++++++错误的特殊提示+++++++</span>
            </template>
          </FormItem>
          <FormItem label="整数" prop="int">
            <Slider v-model="data.int"></Slider>
          </FormItem>
          <FormItem label="整数" prop="int">
            <NumberInput v-model="data.int" :min="0" :max="100"></NumberInput>
          </FormItem>
          <FormItem label="只读" readonly>只读数据</FormItem>
          <FormItem label="数字" prop="number">
            <input type="text" v-model="data.number" />
          </FormItem>
          <FormItem label="邮箱" prop="email">
            <input type="text" v-model="data.email" />
          </FormItem>
          <FormItem label="网址" prop="url">
            <input type="text" v-model="data.url" />
          </FormItem>
          <FormItem label="电话" prop="tel">
            <input type="text" v-model="data.tel" />
          </FormItem>
          <FormItem label="手机号码" prop="mobile">
            <input type="text" v-model="data.mobile" />
          </FormItem>
          <FormItem label="金额" :required="true">
            <div class="h-input-group">
              <div class="h-input-addon">
                <Select v-model="data.select1" :datas="param1" :no-border="true" :null-option="false"></Select>
              </div>
              <FormItem prop="money.min" label="起始金额" :show-label="false">
                <input type="text" placeholder="起始金额" v-model="data.money.min" />
              </FormItem>
              <span class="h-input-addon">-</span>
              <FormItem prop="money.max" label="结束金额" :show-label="false">
                <input type="text" placeholder="结束金额" v-model="data.money.max" />
              </FormItem>
              <span class="h-input-addon">K</span>
            </div>
          </FormItem>
          <FormItem label="选择" prop="select2">
            <Select v-model="data.select2" dict="simple"></Select>
          </FormItem>
          <FormItem label="标签" prop="taginputs">
            <TagInput v-model="data.taginputs"></TagInput>
          </FormItem>
          <FormItem label="多选" prop="select3">
            <Select v-model="data.select3" dict="simple" :multiple="true"></Select>
          </FormItem>
          <FormItem label="日期" prop="date">
            <DatePicker placeholder="选择日期" v-model="data.date"></DatePicker>
          </FormItem>
          <FormItem label="评分" prop="rate">
            <Rate v-model="data.rate" :show-text="true"></Rate>
          </FormItem>
          <FormItem label="多文本" :single="true" prop="textarea">
            <textarea rows="3" v-autosize v-wordcount="50" v-model="data.textarea"></textarea>
          </FormItem>
          <FormItem label="单选" prop="radio">
            <Radio v-model="data.radio" :datas="dataParam"></Radio>
          </FormItem>
          <FormItem label="多选" prop="checkbox">
            <Checkbox v-model="data.checkbox" :datas="dataParam"></Checkbox>
          </FormItem>
          <FormItem label="模糊匹配" prop="autocomplete">
            <AutoComplete v-model="data.autocomplete" config="simple"></AutoComplete>
          </FormItem>
          <!--
            这里定义的required属性同样适用与验证规则中，
            验证的字段即可以是things[0]（代表独立的数据验证），也可以是things[]（代表整个数组的数据验证）
           -->
          <FormItem label="自定义规则" prop="things[0]" required>
            <input type="text" v-model="data.things[0]" />
          </FormItem>
          <FormItem label="分类选择" prop="category">
            <Category :option="categoryParam" type="key" v-model="data.category"></Category>
          </FormItem>
          <FormItemList>
            <FormItem v-for="(item, index) of data.inputs" :key="item" :label="'输入框'+(index+1)" :prop="'inputs['+index+'].value'">
              <Row type="flex">
                <Cell class="flex1">
                <input type="text" v-model="item.value" />
                </Cell>
                <Cell class="text-right" v-width="50">
                <Poptip @confirm="remove(index)" content="确定删除？">
                  <Button text-color="red" :no-border="true" icon="h-icon-trash"></Button>
                </Poptip>
                </Cell>
              </Row>
            </FormItem>
          </FormItemList>
          <FormItem :single="true">
            <Button size="s" text-color="blue" @click="add">添加输入框</Button>
          </FormItem>
          <FormItem :no-padding="true">
            <Button color="primary" :loading="isLoading" @click="submit">提交</Button>&nbsp;&nbsp;&nbsp;
            <Button @click="reset">重置验证</Button>
            <Button @click="resetData">重置数据</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import FormModel from 'model/Form';
import categoryList from './components/datas/data5';
export default {
  data() {
    return {
      mode: 'single',
      data: FormModel.parse({}),
      dataParam: {
        1: '男',
        2: '女',
        3: '其他'
      },
      param1: ['美金', '人民币', '卢布'],
      categoryParam: {
        title: '测试',
        keyName: 'id',
        titleName: 'name',
        dataMode: 'tree',
        datas: categoryList
      },
      isLoading: false,
      validationRules: {
        rules: {
          textarea: {
            maxLen: 50,
            minLen: 10
          },
          input: {
            valid(value) {
              if (value.length == 15 || value.length == 18) {
                return true;
              } else {
                return '字段长度非15/18位，可能不符合规定';
              }
            }
          }
        },
        required: [
          'autocomplete',
          'category',
          'select2',
          'select3',
          'inputs[].value',
          'input',
          'radio',
          'rate',
          'checkbox',
          'money',
          'date',
          'taginputs',
          'money.min',
          'money.max',
          'int',
          'number',
          'url',
          'email',
          'tel',
          'mobile'
        ],
        int: ['int'],
        number: ['number', 'money.min', 'money.max'],
        url: ['url'],
        email: ['email'],
        tel: ['tel'],
        mobile: ['mobile'],
        combineRules: [
          {
            parentRef: 'money',
            refs: ['min', 'max'],
            valid: {
              valid: 'lessThan',
              message: '起始金额不能大于结束金额'
            }
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.$Message('验证成功');
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      }
    },
    reset() {
      this.isLoading = false;
      this.$refs.form.resetValid();
    },
    resetData() {
      this.isLoading = false;
      this.$refs.form.resetValid();
      this.data = FormModel.parse({});
    },
    add() {
      this.data.inputs.push({ value: '' });
    },
    remove(index) {
      this.data.inputs.splice(index, 1);
    }
  }
};
</script>
