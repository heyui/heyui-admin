import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const initRouter = () => {
  const routerParam = {
    mode: 'history',
    routes: [{
      path: '/login',
      name: 'login',
      component: (resolve) => require(['components/login'], resolve)
    }, {
      path: '/',
      component: (resolve) => require(['components/app/app-frame'], resolve),
      children: [{
        path: '',
        name: 'Home',
        component: (resolve) => require(['components/welcome/home'], resolve),
        meta: {title: '首页', icon: 'icon-monitor'}
      }, {
        path: '/form',
        name: 'form',
        component: (resolve) => require(['components/demo-components/form'], resolve),
        meta: {title: '表单', icon: 'icon-paper'}
      }, {
        path: '/autocomplete1',
        name: 'autocomplete1',
        component: (resolve) => require(['components/demo-components/autocomplete1'], resolve),
        meta: {title: '自动补全'}
      }, {
        path: '/autocomplete2',
        name: 'autocomplete2',
        component: (resolve) => require(['components/demo-components/autocomplete2'], resolve),
        meta: {title: '自动补全2'}
      }, {
        path: '/autocomplete3',
        name: 'autocomplete3',
        component: (resolve) => require(['components/demo-components/autocomplete3'], resolve),
        meta: {title: '自动补全3'}
      }, {
        path: '/icons',
        name: 'icons',
        component: (resolve) => require(['components/demo-components/icons'], resolve),
        meta: {title: '图表列表', icon: 'icon-grid'}
      }, {
        path: '/formBasic',
        name: 'formBasic',
        component: (resolve) => require(['components/demo-components/form/basic'], resolve),
        meta: {title: '基础表单', icon: 'icon-paper'}
      }, {
        path: '/formCreate',
        name: 'formCreate',
        component: (resolve) => require(['components/demo-components/form/create'], resolve),
        meta: {title: '创建表单'}
      }, {
        path: '/tableBasic',
        name: 'tableBasic',
        component: (resolve) => require(['components/demo-components/table/basic'], resolve),
        meta: {title: '基础表格'}
      }, {
        path: '/tableDetail',
        name: 'tableDetail',
        component: (resolve) => require(['components/demo-components/table/detail'], resolve),
        meta: {title: '表格详情'}
      }, {
        path: '/tableSearch',
        name: 'tableSearch',
        component: (resolve) => require(['components/demo-components/table/search'], resolve),
        meta: {title: '搜索表格'}
      }, {
        path: '/accountBasic',
        name: 'accountBasic',
        component: (resolve) => require(['components/demo-components/account/account-setting'], resolve),
        meta: {title: '用户信息', icon: 'icon-head'}
      }, {
        path: '/accountSecurity',
        name: 'accountSecurity',
        component: (resolve) => require(['components/demo-components/account/security-setting'], resolve),
        meta: {title: '用户安全'}
      }, {
        path: '/infoBasic',
        name: 'infoBasic',
        component: (resolve) => require(['components/demo-components/info/basic'], resolve),
        meta: {title: '基础信息'}
      }, {
        path: '/infoDetail',
        name: 'infoDetail',
        component: (resolve) => require(['components/demo-components/info/detail'], resolve),
        meta: {title: '信息详情'}
      }, {
        path: '/addressPicker',
        name: 'addressPicker',
        component: (resolve) => require(['components/demo-components/components/address-picker'], resolve),
        meta: {title: '地址选择器'}
      }, {
        path: '/chart',
        name: 'chart',
        component: (resolve) => require(['components/demo-components/components/chart'], resolve),
        meta: {title: '图表'}
      }, {
        path: '/codeEditor',
        name: 'codeEditor',
        component: (resolve) => require(['components/demo-components/components/code-editor'], resolve),
        meta: {title: '代码编辑器'}
      }, {
        path: '/markdownEditor',
        name: 'markdownEditor',
        component: (resolve) => require(['components/demo-components/components/markdown-editor'], resolve),
        meta: {title: 'markdown编辑器'}
      }, {
        path: '/ricktextEditor',
        name: 'ricktextEditor',
        component: (resolve) => require(['components/demo-components/components/richtext-editor'], resolve),
        meta: {title: '富文本编辑器'}
      }, {
        path: '/setting',
        name: 'setting',
        component: (resolve) => require(['components/setting/setting'], resolve),
        meta: {title: '系统设置'}
      }, {
        path: '/systemError',
        name: 'systemError',
        component: (resolve) => require(['components/error-pages/500'], resolve),
        meta: {title: '系统错误'}
      }, {
        path: '/permissionError',
        name: 'permissionError',
        component: (resolve) => require(['components/error-pages/403'], resolve),
        meta: {title: '权限错误'}
      }, 
      {
        path: '/notfoundError',
        name: 'notfoundError',
        component: (resolve) => require(['components/error-pages/404'], resolve),
        meta: {title: '页面找不到'}
      }, 
      {
        path: '*',
        component: (resolve) => require(['components/error-pages/404'], resolve),
        meta: {title: '页面找不到'}
      }]
    }]
  };

  let router = new VueRouter(routerParam);

  router.beforeEach((to, from, next) => {
    HeyUI.$LoadingBar.start();
    if (to.meta && to.meta.title) {
      document.title = to.meta.title + ' - 管理应用';
    } else {
      document.title = '管理系统';
    }
    next();
  })
  router.afterEach(() => {
    HeyUI.$LoadingBar.success();
    Vue.nextTick(() => {
      if(document.querySelector('.app-body')) {
        document.querySelector('.app-body').scrollTop = 0;
      }
      // HeyUI.$ScrollIntoView(document.querySelector('.app-body'), {
      //   time: 0,
      //   align:{
      //     top: 0,
      //     topOffset: 0,
      //   },
      // })
    });
    window._hmt.push(['_trackPageview', window.location.pathname]);
  });
  return router;
}

export default initRouter;
