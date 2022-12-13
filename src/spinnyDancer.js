var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('spinny');
};

makeSpinnyDancer.prototype = Object.create(makeBlinkyDancer.prototype);

makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.lineUp = function() {
  this.$node.css({
    'top': '0px'
  });
};