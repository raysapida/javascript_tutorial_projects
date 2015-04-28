// Write a passing assertion for the function isCoolNumber, that will assure
// that it returns true when passing 42 in it.
//
// The path of the module exporting the function will be provided through
// process.argv[2].

var assert = require('assert');
var isCoolNumber = require(process.argv[2]);

assert(isCoolNumber(42) == true, "Function is true when passed 42")
// assert(module.isCoolNumber(1) === false, "Function is true when passed 42")
// assert(argument === 42, "Function is true when passed 42")


// if(add(2,1) !== 3) throw new Error('add(2,1) should be 3')
//
// var assert = require('assert')
// assert(add(2,1) === 3,'add(2,1) should be 3')
//
// assert.deepEqual(add(2,1), 3, 'add(2,1) should be 3')
//
// assert.ok(value, message) // tests if value is truthy
// assert.equal(actual, expected, message) // ==
// assert.notEqual(actual, expected, message) // !=
// assert.deepEqual(actual, expected, message) // for comparing objects
// assert.notDeepEqual(actual, expected, message)
// assert.strictEqual(actual, expected, message) // ==
// assert.notStrictEqual(actual, expected, message) // !==
