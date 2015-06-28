// Use array#some and Array#every to check every user passed to your returned
// function exists in the array passed to the exported function.

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id
      })
    })
  };
}

module.exports = checkUsersValid

