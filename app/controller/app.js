'use strict';

const Controller = require('egg').Controller;

class AppController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.body = 'login-api';
  }
}

module.exports = AppController;
