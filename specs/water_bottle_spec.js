
var assert = require('chai').assert;
var bottle = require('../water_bottle')

describe('Water Bottle', function(){
  it('should be empty at start', function(){
  assert.equal(0,bottle.volume);
  });

  it('should be empty', function(){
    assert.equal("Empty!", bottle.drink())
  });

  it('should go to 100 when filled', function(){
    assert.equal(100, bottle.fill());
  });

  it('shuold go down by 10 when drunk', function(){
    assert.equal(90, bottle.drink());
  });
  it('should go down to 0 when empited', function(){
    assert.equal(0, bottle.empty());
  });

});