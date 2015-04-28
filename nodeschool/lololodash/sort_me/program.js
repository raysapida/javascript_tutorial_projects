var _ = require('lodash');

var worker = function(object) {
  return _.sortBy(object, function (each) {
    return -each['quantity']
  });
};

module.exports = worker;
