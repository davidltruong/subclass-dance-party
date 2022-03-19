describe('additional tests', function() {
  var bouncyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    bouncyDancer = new makeBouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should call a bouncydancer to the dancefloor', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should call lineUp and move bouncydancers ', function() {
    sinon.spy(bouncyDancer.$node, 'css');

    bouncyDancer.lineUp();
    expect(bouncyDancer.$node.css.called).to.be.true;
  });

});