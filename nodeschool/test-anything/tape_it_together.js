var fancify = require(process.argv[2]);
var test = require('tape');

test('fancify' function (t) {
  t.equal(fancify('Hello'), "~*~Hello~*~" , "fancify accepts the string 'Hello'")
  t.equal(fancify('Hello', true), "~*~HELLO~*~" , "fancify accepts the string 'Hello' with true")
  t.equal(fancify('Hello', true, '!'), "~!~HELLO~!~" , "fancify accepts the string 'Hello' and '!' with true")
  t.equal(fancify('Hello', false, '!'), "~!~Hello~!~" , "fancify accepts the string 'Hello' and '!' with false")
  t.end
})
