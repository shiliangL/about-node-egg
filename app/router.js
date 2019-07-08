'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller } = app;
  const routerV1 = app.router.namespace('/v1/api');
  const routerV2 = app.router.namespace('/v2/api');

  // 版本控制
  routerV1.get('/', controller.home.index1);

  routerV1.post('/login', controller.app.login);

  routerV2.get('/', controller.home.index2);

  router.get('/', controller.home.index);
};
