function countWords(inputWords) {
  return inputWords.reduce( function(object, word) {
    object[word] = ++object[word] || 1
    return object
  }, {})
}

module.exports = countWords

