'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Api 后台接口';
  }
  async registered() {
    const { ctx } = this;
    ctx.body = 'registered';
  }
}

module.exports = ApiController;
