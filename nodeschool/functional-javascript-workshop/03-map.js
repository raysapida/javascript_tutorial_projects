function doubleAll(numbers) {
  // var result = []
  // for (var i = 0; i < numbers.length; i++) {
  //   result.push(numbers[i] * 2)
  // }
  // return result
  //
  // Conditions:
  // Your solution should use Array.prototype.map()
  // Do not use any for/while loops or Array.prototype.forEach.
  // Do not create any unecessary functions e.g. helpers.

  return numbers.map( function (number) { return number * 2 });
}

module.exports = doubleAll
