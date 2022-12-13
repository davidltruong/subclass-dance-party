$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });

  $('.colorChange').on('click', function(event) {
    $('.dancer').css('border-color', 'purple');
  });

  $('.lineUp').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.addDancerButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var minDistance = 150;
      var aPosX = window.dancers[i].left;
      var aPosY = window.dancers[i].top;
      //if dancer is within minDistance
      for (var j = i + 1; j < window.dancers.length; j++) {
        var bPosX = window.dancers[j].left;
        var bPosY = window.dancers[j].top;
        var a = Math.abs(aPosX - bPosX);
        var b = Math.abs(aPosY - bPosY);
        var cSqred = (Math.pow(a, 2)) + (Math.pow(b, 2));
        var c = Math.sqrt(cSqred);
        if (c < minDistance) {
          window.dancers[i].together();
          window.dancers[j].together();
        }
      }
    }
  });


  $('.grow').click(function() {
    $('.dancer').animate({
      width: '200px',
      height: '200px',
    }, 1500 );
  });

  $('.addSpinnyButton').click(function() {
    $('.spinny').animate(
      { deg: 1800 },
      {
        duration: 2400,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
  });

  $('.addBouncyButton').click(function() {
    for (i = 0; i < 5; i++) {
      $('.bouncy').animate({marginTop: '-=' + '50px'}, 300).animate({marginTop: '+=' + '50px'}, 300);
    }
  });

  $('.move').click(function() {
    $('.dancer').animate({left: '0px'});
  });

  $('body').on('mouseover', '.bouncy', function(event) {
    console.log(event);
    $('.bouncy').addClass('backgroundyellow');
  });

});