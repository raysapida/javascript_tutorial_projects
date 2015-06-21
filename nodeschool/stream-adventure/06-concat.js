var concat = require('concat-stream');

process.stdin.pipe(concat(function (arg) {
  var result = arg.toString().split('').reverse().join('');
  console.log(result);
}));
