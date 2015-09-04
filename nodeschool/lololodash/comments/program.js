var _ = require("lodash");

var worker = function(input) {
  var count = [];
  input = _.groupBy(input, "username");
  _.forEach(input, function (item, name) {
    count.push({
      username: name,
      comment_count: _.size(item)
    });
  });
  return _.sortBy(count, "comment_count").reverse();
};

module.exports = worker;
