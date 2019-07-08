'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  // sequelize: {
  //   enable: true,
  //   package: 'egg-sequelize',
  // },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
};
