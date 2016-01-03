var expect = require('chai').expect
  , last = require('./')

describe('last', function() {

  it('should return last element', function() {
    expect(last(['a','b'])).to.equal('b')
  })

  it('should return last element', function() {
    expect(last()).to.equal(undefined)
  })

})