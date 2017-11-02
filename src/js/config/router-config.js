import VueRouter from 'vue-router';

const initRouter = ()=>{
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
  });
  return router;
}

export default initRouter;
