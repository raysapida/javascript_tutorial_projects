var _ = require('lodash');

//     [ { article: 1, quantity: 4 },
//       { article: 2, quantity: 2 },
//         article: 1, quantity: 5 } ]
//
//     [ { article: 1, total_orders: 9 },
//       { article: 2, total_orders: 2} ]

var worker = function(object) {
  object = _.groupBy(object, 'article');
  var result = [];

  _.forEach(object, function (quantity, article) {
    article = parseInt(article);
    var total = 0;
    if (quantity.length === 1) {
      total = quantity[0].quantity;
    } else {
      total = _.reduce(quantity, function(sum, quantity) {
        return sum + quantity.quantity;
      }, 0);
    }
    result.push({
      article: article,
      total_orders: total
    });
  });

  result = _.sortBy(result, "total_orders").reverse();

  return result;

};

module.exports = worker;
