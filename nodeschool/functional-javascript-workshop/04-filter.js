function getShortMessages(messages) {
  // getShortMessages takes an array of objects with '.message' properties and
  // returns an array of messages that are less than < 50 characters long
  // messages: an Array of 10 to 100 random objects that look something like
  // this:

  return messages.filter( function(value) {
    return value.message.length < 50
  }).map(function(value) {
    return value.message
  })
}

module.exports = getShortMessages

