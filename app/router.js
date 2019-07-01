'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { controller } = app;

  // 路由接口版本
  const apiVrouter = app.router.namespace('/api/v1');

  apiVrouter.get('/', controller.api.index);
  apiVrouter.post('/registered', controller.login.registered);
};
