import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const initRouter = () => {
  const routerParam = {
    mode: 'history',
    routes: [{
      path: '/',
      name: 'home',
      component: (resolve) => require(['components/welcome/home'], resolve)
    }, {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['components/login'], resolve)
    }, {
      path: '/form',
      name: 'form',
      component: (resolve) => require(['components/demo-modules/form'], resolve)
    }, {
      path: '/autocomplete1',
      name: 'autocomplete1',
      component: (resolve) => require(['components/demo-modules/autocomplete1'], resolve)
    }, {
      path: '/autocomplete2',
      name: 'autocomplete2',
      component: (resolve) => require(['components/demo-modules/autocomplete2'], resolve)
    }, {
      path: '/autocomplete3',
      name: 'autocomplete3',
      component: (resolve) => require(['components/demo-modules/autocomplete3'], resolve)
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
