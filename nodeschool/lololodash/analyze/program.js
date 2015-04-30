var _ = require("lodash");

// [ { name: "mike",  income: 2563 },
//  { name: "kim",   income: 1587 },
//  { name: "liz",   income: 3541 },
//  { name: "tom",   income: 2475 },
//  { name: "bello", income: 987  },
//  { name: "frank", income: 2975 } ]

//{
//  "average": 167,
//  "underperform": [
//    { "name": "foobar", "income": 99 },
//    { "name": "dummy", "income": 100 }
//  ],
//  "overperform": [
//    { "name": "foo", "income": 302 }
//  ]
//}

var worker = function(object) {
  object = _.sortBy(object, "income");

  var average = (_.reduce(object, function(sum, num) {
    return sum + num.income;
  }, 0)) / object.length;

  var underperform = _.filter(object, function (num) {
    return num.income <= average;
  });

  var overperform = _.filter(object, function (num) {
    return num.income > average;
  });

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };
};
module.exports = worker;
