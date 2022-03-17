var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  // makeDancer.call(this);
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('spinny');
};

makeSpinnyDancer.prototype = Object.create(makeBlinkyDancer.prototype);

makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

// makeSpinnyDancer.prototype.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   makeDancer.prototype.step.call(this);
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };

