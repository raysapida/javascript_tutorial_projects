describe("Circle", function() {
  var Circle = require('../../lib/testing_intro/Circle');
  var circle;

  beforeEach(function() {
    circle = new Circle(47, 32, 10);
  });

  it("should have an x coordinate", function() {
    expect(circle.x).toEqual(47);
  });

  it("should draw on the canvas", function() {
    var context = hmmmm; // ???
    circle.draw(context);
  });
});