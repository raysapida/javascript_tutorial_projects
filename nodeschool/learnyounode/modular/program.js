var mymodule = require('./mymodule.js')
String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
var fs = require('fs');

var fileName = process.argv[2];
var fileExtension = process.argv[3];

mymodule.filtering(fileName, fileExtension, callback);
