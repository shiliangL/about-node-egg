'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      userId: { type: STRING(255), allowNull: false },
      username: { type: STRING(255), allowNull: false },
      email: { type: STRING(255), allowNull: false },
      password: { type: STRING(255), allowNull: false },
      avatarUrl: STRING(256),
      mobile: STRING(32),
      prefix: STRING(32),
      abstract: { type: STRING(255), allowNull: true },
      sex: { type: INTEGER, defaultValue: 1 },
      created_at: DATE,
      updated_at: DATE,
    });

  },

  down: async (queryInterface, Sequelize) => {
    console.log(Sequelize);
    await queryInterface.dropTable('users');
  },
};
