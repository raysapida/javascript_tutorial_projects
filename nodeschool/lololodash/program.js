// include the Lo-Dash library
var _ = require("lodash");

var worker = function(argument) {
  return _.where(argument, { "active": true });
};

// export the worker function as a nodejs module
module.exports = worker;
