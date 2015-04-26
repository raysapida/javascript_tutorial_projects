describe("Circle", function() {
  var Circle = require('../../lib/testing_intro/Circle');

  it("should have an x coordinate", function() {
    var circle = new Circle(47);
    expect(circle.x).toEqual(47);
  });
});
