String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
var fs = require('fs');

var fileName = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(fileName, function (err, list) {
  if (err) throw err;
  for (var i = 0; i < list.length; i++) {
    if (list[i].endsWith(fileExtension) && list[i] != fileExtension) {
      console.log(list[i])
    }
  }
});
