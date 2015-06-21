var through = require('through2');
var split = require('split');

var count = 0;
var tr = through(function (buffer, _, next) {
  var line = buffer.toString();
  this.push(
    if (count % 2 === 0) {
      line.toLowerCase() + '\n'
    } else {
      line.toUpperCase() + '\n');
    }
    count += 1;
    next();
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
