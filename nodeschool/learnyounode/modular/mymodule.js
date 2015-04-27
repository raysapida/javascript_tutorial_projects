module.exports = {
  String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
  var fs = require('fs');

  // mymodule.filtering(directory, fileExtension, callback);
  filtering: function(directory, fileExtension, callback) {
    fs.readdir(fileName, function callback (err, list) {
      if (err) throw err;
      for (var i = 0; i < list.length; i++) {
        if (list[i].endsWith(fileExtension) && list[i] != fileExtension) {
          console.log(list[i])
        }
      }
    }
  });
}
// Your additional module file [mymodule.js] exports a function that takes fewer
// than three arguments. You must accept a directory, a filter and a callback.
