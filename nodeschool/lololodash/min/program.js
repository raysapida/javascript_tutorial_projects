var _ = require('lodash');

var worker = function(object) {
  var sorted = {
    hot: [],
    warm: []
  };

  _.forEach(object, function(array, name) {
    if ( _.every(array, function(item) { return item > 19})) {
      sorted.hot.push(name);
    } else if ( _.some(array, function(item) { return item > 19})) {
      sorted.warm.push(name)
    }
  });

  return sorted
};

module.exports = worker;
