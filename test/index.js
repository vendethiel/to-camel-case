var toCamelCase = require('..')

describe('toCamelCase(str)', function () {
  it('should convert dashes to camel case', function () {
    toCamelCase("hello-howare-ya").should.equal("helloHowareYa")
  })
  it('should convert underscores to camel case', function () {
    toCamelCase("the_chocolate_rain").should.equal("theChocolateRain")
  })
})

describe('toCamelCase(str, first=true)', function () {
  it('should upper case first and convert dashes to camel case', function () {
    toCamelCase("hello-howare-ya", true).should.equal("HelloHowareYa")
  })
})