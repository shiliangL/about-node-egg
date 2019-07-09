'use strict';
const Service = require('egg').Service;
const uuid = require('uuid');

class UserService extends Service {
  async register(user) {
    const { ctx, app } = this;
    console.log(ctx, app);

    user.userId = uuid.v4().replace(/-/g, '');
  }
}

module.exports = UserService;
