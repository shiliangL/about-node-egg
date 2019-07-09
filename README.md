# Node-Node-Egg

---

> post提交会默认有安全防攻击 CSRF 跨站请求伪造， 配置 config security: false

> 插件使用

- 插件安装 npm i egg-router-plus --save
- config/plugin配置暴露


> 使用 sequelize-cli初始化、管理mysql数据库、.sequelizerc配置文件

- npx sequelize init 初始化
- npx sequelize db:create 创建数据库
- npx sequelize migration:create --name create-users 创建数据库表迁移文件
- npx sequelize db:migrate 执行初始化创建表


> 数据库Client does not support authentication protocol requested by server的解决

- mysql -uroot -p 密码登录
- mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;  修改加密方式
- mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123'; 更改密码为新密码
- mysql> FLUSH PRIVILEGES;  刷新


#### 注册业务



---

## QuickStart
<!-- add docs here for user -->
see [egg docs][egg] for more detail.
### Development
```bash
$ npm i
$ npm run dev
```
### Deploy
```bash
$ npm start
$ npm stop
```
### npm scripts
- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.
[egg]: https://eggjs.org
