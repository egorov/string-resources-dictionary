const resources = require('./src/resources');

module.exports = {
  create() {
    return new resources();
  }
};