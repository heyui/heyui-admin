<style lang='less'>
.progress-div{
  padding: 30px 40px;
  >p{
    margin: 10px;
  }
}
</style>
<template>
  <div class="app-home" v-padding="20">
    <Row :space="20">
      <Col :width="12">
      <div class="h-panel" v-height="280" v-padding="30">
        <Row>
          <Col :width="11" class="text-center">
            <h-circle :percent="76" :stroke-width="10" :size="200" v-tooltip ref-el="demo1" placement="right">
              <div class="gray-color" v-font="28">122,332,98</div>
              <div v-height="5"></div>
              <div class="dark-color" v-font="13">目前达成比例</div>
              <div class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*76/100)}}</span>/<span>123</span></div>
            </h-circle>
          </Col>
          <Col :width="7" class="text-center">
            <div v-height="100"></div>
            <h-circle :percent="26" :stroke-width="10" :size="100" color="red" v-tooltip ref-el="demo2" placement="right">
              <div v-height="5"></div>
              <div class="dark-color" v-font="13">目前达成比例</div>
              <div class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*26/100)}}</span>/<span>123</span></div>
            </h-circle>
          </Col>
          <Col :width="6" class="text-center">
            <div v-height="100"></div>
            <h-circle :percent="100" :stroke-width="10" :size="100" color="green" v-tooltip ref-el="demo3" placement="right">
              <div v-height="5"></div>
              <div class="dark-color" v-font="13">目前达成比例</div>
              <div class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*26/100)}}</span>/<span>123</span></div>
            </h-circle>
          </Col>
        </Row>
      </div>
      </Col>
      <Col :width="12">
      <div class="h-panel progress-div" v-height="280">
        <div class="clearfix">
          <div class="float-right"><span v-color:gray>总共达成</span><i class="h-split"></i><span v-font="48" style="font-weight:100">200</span><i class="h-split"></i><span v-color:primary>W</span></div>
        </div>
        <p><Progress :percent="99" color="green"><span slot="title">推荐面试</span><span slot="text">4个</span></Progress></p>
        <p><Progress :percent="12" color="red"><span slot="title">客户面试</span><span slot="text">0个</span></Progress></p>
        <p><Progress :percent="12" color="red"><span slot="title">Offer谈判</span><span slot="text">0个</span></Progress></p>
        <p><Progress :percent="12" color="red"><span slot="title">入职试用</span><span slot="text">0个</span></Progress></p>
        <p><Progress :percent="12" color="red"><span slot="title">入职试用</span><span slot="text">0个</span></Progress></p>
      </div>
      </Col>
      <Col :width="24">
      <div class="h-panel">
        <div class="h-panel-bar">
          <span class="h-panel-title">搭建顺序</span>
        </div>
        <div class="h-panel-body demo-doc">
          <p v-font="16">1、下载</p>
          <p>前往github下载，<a href="https://github.com/heyui/heyui-demo">https://github.com/heyui/heyui-demo</a></p>
          <p><code>git clone https://github.com/heyui/heyui-demo.git 自己项目名 </code></p>
          <p>将git地址转换为自己项目的git地址</p>
          <p><code>git remote set-url origin 自己的git地址<br/>git push</code></p>
          <p v-font="16">2、安装hey-cli工具</p>
          <p>可以在npm下载，<a href="https://www.npmjs.com/package/hey-cli">https://www.npmjs.com/package/hey-cli</a>，如果您已经安装，请忽略这一步。</p>
          <p><code>npm install -g hey-cli</code></p>

          <p v-font="16">3、安装依赖</p>
          <p><code>npm install</code></p>
          <p>本项目有以下依赖包：</p>
          <ul>
            <li><a target="_blank" href="https://www.npmjs.com/package/axios">axios</a>: 异步数据加载</li>
            <li><a target="_blank" href="https://www.npmjs.com/package/hey-global">hey-global</a>: 全局变量控制</li>
            <li><a target="_blank" href="https://www.npmjs.com/package/hey-log">hey-log</a>: console.log简写工具</li>
            <li><a target="_blank" href="https://www.npmjs.com/package/hey-utils">hey-utils</a>: 通用utils</li>
            <li><a target="_blank" href="https://www.npmjs.com/package/heyui">heyui</a>: HeyUI库</li>
            <li><a target="_blank" href="https://www.npmjs.com/package/js-model">js-model</a>: 前端数据模型工具</li>
            <li><a target="_blank" href="https://www.npmjs.com/package/manba">manba</a>: 日期工具库</li>
            <li><a target="_blank" href="https://www.npmjs.com/package/qs">qs</a>: 数据处理工具</li>
            <li><a target="_blank" href="https://www.npmjs.com/package/vue">vue</a>: Vue</li>
            <li><a target="_blank" href="https://www.npmjs.com/package/vue-router">vue-router</a>: vue-router</li>
          </ul>

          <p v-font="16">4、修改相关项</p>
          <ul>
            <li>修改hey.js文件中的端口号，以及proxy反向代理地址。</li>
            <li>修改app-header文件中的项目名，以及删除github链接。</li>
            <li>修改menu-config.js文件中的目录配置</li>
            <li>修改router-config.js文件中的router配置</li>
            <li>修改src/images/logo.ico文件</li>
          </ul>

          <p v-font="16">2、启动项目</p>
          <p>项目的配置在文件hey.js中，具体请参考代码与hey-cli配置规则。</p>
          <p><code>hey dev</code></p>

          <p v-font="16">2、打包项目</p>
          <p><code>hey build</code></p>

        </div>
      </div>
      </Col>
    </Row>
    <div tmpl="demo1">
      <div v-padding="20">
        <div>占值：70%</div>
        <div>占值：70%</div>
        <div>占值：70%</div>
        <div>占值：70%</div>
      </div>
    </div>
    <div tmpl="demo2">
      <div v-padding="20">
        <div>占值：70%</div>
        <div>占值：70%</div>
        <div>占值：70%</div>
        <div>占值：70%</div>
      </div>
    </div>
    <div tmpl="demo3">
      <div v-padding="20">
        <div>占值：70%</div>
        <div>占值：70%</div>
        <div>占值：70%</div>
        <div>占值：70%</div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  methods: {}
}
</script>
