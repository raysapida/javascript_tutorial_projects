var _ = require("lodash");

var worker = function(array) {
  return _.chain(array)
  .map(function (item) {
    return item.toUpperCase();
  })
  .map(function (item) {
    return item + 'CHAINED';
  })
  .sortBy()
  .value();
};

module.exports = worker;
