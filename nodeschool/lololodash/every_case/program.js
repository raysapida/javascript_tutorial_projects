var _ = require('lodash');

var iterate = function(object) {
  return _.forEach(object, function(item) {
    if (item.population >= 1) {
      item.size = 'big';
    } else if (item.population < 1 && item.population > 0.5) {
      item.size = 'med';
    } else {
      item.size = 'small';
    }
  });
};

module.exports = iterate;
