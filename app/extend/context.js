'use strict';
module.exports = {
  returnBody(status, message, data = {}) {
    this.status = status;
    this.body = {
      data,
      message,
      success: true,
    };
  },
};

