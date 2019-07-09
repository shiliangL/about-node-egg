'use strict';
// 模型建立将数据库映射成js对象

module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
  const User = app.model.define('users', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: { type: STRING(255) },
    email: { type: STRING(255), allowNull: false },
    password: { type: STRING(255), allowNull: false },
    username: { type: STRING(255), allowNull: false },
    avatarUrl: { type: STRING(255), defaultValue: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg' },
    mobile: STRING(32),
    prefix: STRING(32),
    abstract: { type: STRING(255), allowNull: true },
    sex: { type: INTEGER, defaultValue: 1 },
    created_at: { type: DATE, defaultValue: NOW },
    updated_at: { type: DATE, defaultValue: NOW },
  }, {
    freezeTableName: true,
  });
  return User;
};
