'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

  async login() {
    const { ctx } = this;
    ctx.body = 'login';
  }

  async registered() {
    const { ctx } = this;
    ctx.body = 'registered';
  }
}

module.exports = LoginController;
