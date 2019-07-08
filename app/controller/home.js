'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg - 版本0';
  }
  async index1() {
    const { ctx } = this;
    ctx.body = 'hi, egg - 版本v1';
  }
  async index2() {
    const { ctx } = this;
    ctx.body = 'hi, egg - 版本v2';
  }
  async login() {
    const { ctx } = this;
    ctx.body = 'hi, egg login';
  }
}
module.exports = HomeController;
