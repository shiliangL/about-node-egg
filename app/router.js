'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller } = app;
  const routerPlus = app.router.namespace('/v1/api');

  // 版本控制
  routerPlus.get('/', controller.home.index);
  routerPlus.post('/login', controller.home.login);

  router.get('/', controller.home.index);
};
