var _ = require("lodash");

//{ "Tom": [
//  {
//    "todo": "Clean kitchen",
//    "date": "2014-08-19T12:13:20.207Z"
//  },
//  {
//    "todo": "Learn Lo-Dash",
//    "date": "2014-08-10T12:13:20.210Z"
//  },
//  {
//    "todo": "Become a Lo-Dash master",
//    "date": "2014-08-12T12:13:20.210Z"
//  }
//],
//"Tim": [
//  {
//    "todo": "Contribute to an Open-Source-Project",
//    "date": "2014-08-11T12:13:20.210Z"
//  }
//]
//}

//<ul>
//  <li>Tom
//  <ul><li><b>URGENT</b> Learn Lo-Dash</li>
//    <li>Become a Lo-Dash master</li>
//    <li>Clean kitchen</li>
//  </ul>
//  </li>
//  <li>Tim
//    <ul><li><b>URGENT</b> Contribute to an Open-Source-Project</li>
//  </ul>
//  </li>
//</ul>

var worker = function(object) {
  _.forEach(object, function (item, key) {
    object[key] = _.sortBy(item, "date");
  });

  var check = function (date) {
    return (new Date(date) - new Date()) < 24 * 60 * 60 * 1000 * 2;
  };

  var htmloutput = '<ul>\n' +
    '<% _.forEach(input, function(todos, name){ %>' +
    '<li><%= name %>\n' +
    '<ul>' +
    '<% _.forEach(todos, function(todo_item){ %>' +
    '<li>' +
    '<% if(check(todo_item.date)) { %><b>URGENT</b><% } %>' +
    '<%= todo_item.todo %>' +
    '</li>\n' +
    '<% }); %>' +
    '</ul>\n' +
    '</li>\n' +
    '<% }); %>' +
    '</ul>';

  return _.template(htmloutput, { 'imports': { 'check': check } })({input: object});
};

module.exports = worker;
