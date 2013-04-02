/**
 * Converts a string to camel case
 */
module.exports = function (str) {
  return str.replace(/[_-]([a-z])/g, function (l) {
  	return l[1].toUpperCase()
  })
}