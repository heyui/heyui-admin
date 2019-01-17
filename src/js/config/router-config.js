import Vue from 'vue';
import VueRouter from 'vue-router';
import demoComponents from './demo-components';

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
      ...demoComponents, 
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
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // baidu 统计，如果有自己的统计，请至index.html修改至自己的埋点
    if( window._hmt) {
      window._hmt.push(['_trackPageview', window.location.pathname]);
    }
  });
  return router;
}

export default initRouter;
