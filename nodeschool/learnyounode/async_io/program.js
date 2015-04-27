var fs = require('fs');
var buffer = fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) throw err;
  var result = data.split('\n').length -1;
  console.log(result)
});
