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

  // user
  routerV1.post('/register', controller.user.register);
  routerV1.post('/login', controller.user.login);

  routerV2.get('/', controller.home.index2);

  router.get('/', controller.home.index);
};
