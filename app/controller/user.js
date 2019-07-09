'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx } = this;
    return await ctx.service.user.register();
  }
  async login() {
    const { ctx } = this;
    ctx.returnBody(200, '获取成功', {
      test: '测试',
    });
  }
}

module.exports = UserController;
