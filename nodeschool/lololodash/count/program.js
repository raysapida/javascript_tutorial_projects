var _ = require('lodash');

// var worker = function(object) {
//   return _.size(_.groupBy(object, 'username'));
// };

var worker = function(object) {
  var sorted = [];

  object = _.groupBy(object, 'username');

  _.forEach(object, function(array, name) {
    sorted.push({
      username: name,
      comment_count: _.size(array)
    });
  });

  return _.sortBy(sorted, 'comment_count').reverse();
};

module.exports = worker;
