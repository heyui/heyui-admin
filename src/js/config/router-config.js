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
        path: '/',
        name: 'home',
        component: (resolve) => require(['components/welcome/home'], resolve)
      }, {
        path: '/form',
        name: 'form',
        component: (resolve) => require(['components/demo-components/form'], resolve)
      }, {
        path: '/autocomplete1',
        name: 'autocomplete1',
        component: (resolve) => require(['components/demo-components/autocomplete1'], resolve)
      }, {
        path: '/autocomplete2',
        name: 'autocomplete2',
        component: (resolve) => require(['components/demo-components/autocomplete2'], resolve)
      }, {
        path: '/autocomplete3',
        name: 'autocomplete3',
        component: (resolve) => require(['components/demo-components/autocomplete3'], resolve)
      }, {
        path: '/icons',
        name: 'icons',
        component: (resolve) => require(['components/demo-components/icons'], resolve)
      }, {
        path: '/formBasic',
        name: 'formBasic',
        component: (resolve) => require(['components/demo-components/form/basic'], resolve)
      }, {
        path: '/formCreate',
        name: 'formCreate',
        component: (resolve) => require(['components/demo-components/form/create'], resolve)
      }, {
        path: '/tableBasic',
        name: 'tableBasic',
        component: (resolve) => require(['components/demo-components/table/basic'], resolve)
      }, {
        path: '/tableDetail',
        name: 'tableDetail',
        component: (resolve) => require(['components/demo-components/table/detail'], resolve)
      }, {
        path: '/tableSearch',
        name: 'tableSearch',
        component: (resolve) => require(['components/demo-components/table/search'], resolve)
      }, {
        path: '/accountBasic',
        name: 'accountBasic',
        component: (resolve) => require(['components/demo-components/account/account-setting'], resolve)
      }, {
        path: '/accountSecurity',
        name: 'accountSecurity',
        component: (resolve) => require(['components/demo-components/account/security-setting'], resolve)
      }, {
        path: '/infoBasic',
        name: 'infoBasic',
        component: (resolve) => require(['components/demo-components/info/basic'], resolve)
      }, {
        path: '/infoDetail',
        name: 'infoDetail',
        component: (resolve) => require(['components/demo-components/info/detail'], resolve)
      }, {
        path: '/addressPicker',
        name: 'addressPicker',
        component: (resolve) => require(['components/demo-components/components/address-picker'], resolve)
      }, {
        path: '/chart',
        name: 'chart',
        component: (resolve) => require(['components/demo-components/components/chart'], resolve)
      }, {
        path: '/markdownEditor',
        name: 'markdownEditor',
        component: (resolve) => require(['components/demo-components/components/markdown-editor'], resolve)
      }, {
        path: '/ricktextEditor',
        name: 'ricktextEditor',
        component: (resolve) => require(['components/demo-components/components/richtext-editor'], resolve)
      }, {
        path: '/systemError',
        name: 'systemError',
        component: (resolve) => require(['components/error-pages/500'], resolve)
      }, {
        path: '/permissionError',
        name: 'permissionError',
        component: (resolve) => require(['components/error-pages/403'], resolve)
      }, 
      {
        path: '/404',
        name: 'notfoundError',
        component: (resolve) => require(['components/error-pages/404'], resolve)
      }]
    }]
  };

  let router = new VueRouter(routerParam);

  router.beforeEach((to, from, next) => {
    HeyUI.$LoadingBar.start();
    // if (titleConfig[to.name]) {
    //   document.title = titleConfig[to.name] + ' - 应用';
    // } else {
    // document.title = '管理系统';
    // }
    next();
  })
  router.afterEach(() => {
    HeyUI.$LoadingBar.success();
    // Vue.nextTick(() => {
    //   $('.app-body').scrollTop(0);
    // });
    window._hmt.push(['_trackPageview', window.location.pathname]);
  });
  return router;
}

export default initRouter;
