var toCamelCase = require('..')

describe('toCamelCase(str)', function () {
  it('should convert dashes to camel case', function () {
    toCamelCase("hello-ya").should.equal("helloYa")
  })
  it('should convert underscores to camel case', function () {
    toCamelCase("chocolate-rain").should.equal("chocolateRain")
  })
})