import VueRouter from 'vue-router';

const initRouter = ()=>{
  const routerParam = {
    mode: 'history',
    routes: [{
      path: '/',
      name: 'home',
      component: (resolve) => require(['components/modules/home'], resolve)
    }, {
      path: '/seatList',
      name: 'seatList',
      component: (resolve) => require(['components/modules/seat-list'], resolve)
    }, {
      path: '/equipmentList',
      name: 'equipmentList',
      component: (resolve) => require(['components/modules/equipment-list'], resolve)
    }, {
      path: '/ctiSearch',
      name: 'ctiSearch',
      component: (resolve) => require(['components/modules/cti-search'], resolve)
    }, {
      path: '/report',
      name: 'report',
      component: (resolve) => require(['components/modules/report'], resolve)
    }, {
      path: '/system',
      name: 'system',
      component: (resolve) => require(['components/modules/system'], resolve)
    }]
  };

  let router = new VueRouter(routerParam);

  router.beforeEach((to, from, next) => {
    HeyUI.$LoadingBar.start();
    // if (titleConfig[to.name]) {
    //   document.title = titleConfig[to.name] + ' - 应用';
    // } else {
      document.title = '管理系统';
    // }
    next();
  })
  router.afterEach(() => {
    HeyUI.$LoadingBar.success();
    // Vue.nextTick(() => {
    //   $('.app-body').scrollTop(0);
    // });
  });
  return router;
}

export default initRouter;
