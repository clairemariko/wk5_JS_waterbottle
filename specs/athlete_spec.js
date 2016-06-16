var assert = require('chai').assert;
var athlete = require('../athlete.js');
var bottle = require('../water_bottle.js');


describe("athelte", function(){
  it("should know its name", function(){
    assert.equal("Andy Murray", athlete.name)
  });
  it("should be fully hydrated at start", function(){
    assert.equal(100, athlete.hydration)
  });
  it("should start off with zero distance covered", function(){
    assert.equal(0, athlete.distance_covered)
  });
  it("should increase distance while running", function(){
    assert.deepEqual([90,5], athlete.run(5));
  });
  it("should decrease hydration while running", function(){
    assert.deepEqual([50,25] ,athlete.run(20));
  });
  it("should not be able to run if hydration goes below 0", function(){
    assert.equal("NOT ENOUGH HYDRATION!", athlete.run(26));
  });

});