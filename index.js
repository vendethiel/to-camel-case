/**
 * Convert a string to camel case
 *
 * @param {String} str
 * @param {Boolean} first upper-case first too ? (PascalCase)
 */
module.exports = function (str, first) {
  str = str.replace(/[_-]([a-z])/g, function (l) {
  	return l[1].toUpperCase()
  })

  if (first)
    str = str.charAt(0).toUpperCase() + str.slice(1)

  return str
}