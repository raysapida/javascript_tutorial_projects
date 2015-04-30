var _ = require("lodash");

//{ name: "Foo",
//  login: [ 1407574431, 140753421 ]
//}

//Hello Foo (logins: 2)

var worker = function(object) {
  return _.template("Hello <%= name %> (logins: <%= login.length %>)")(object);
};

module.exports = worker;
