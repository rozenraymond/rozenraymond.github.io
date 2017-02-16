
console.log('%c Hey you, pleasure to find you here', 'background: salmon; color: black; display: block;');
console.log('%c I am Rozen', 'background: salmon; color: black; display: block;');
console.log('%c A junior web developer based in Sydney', 'background: salmon; color: black; display: block;');
console.log('%c Feel free to check out some of the projects I had built so far', 'background: #87CEFA; color: black; display: block;');

console.log('%c Interested in knowing me further?', 'background: #FF7F50; color: black; display: block;');
console.log('%c You can reach me at rozenr.raymond@gmail.com ', 'background: #FF7F50; color: black; display: block;');

console.log('%c Cheers! ', 'background: 	#9370DB; color: black; display: block;');

$(document).ready(function () {

  // ----------------------------------------Canvas Plugin in Index.html--------------------------------------
  if( $.fn.particleground ){
    $("#homepage").particleground({
      dotColor: '#ACAFD6',
      lineColor: '#ACAFD6'
    });
  }

  if( window.innerWidth < 721 ) {
    $(".homepage-wrap").css({
      'margin-top': -($('.homepage-wrap').height() / 2)
    });
  } else {
    $(".homepage-wrap").css({
      'margin-top': -($('.homepage-wrap').height() / 1.2)
    });
  }

  window.onresize = function() {
    // if less than 721px
    if( window.innerWidth < 721 ) {
      $(".homepage-wrap").css({
        'margin-top': -($('.homepage-wrap').height() / 2)
      });
    } else {
      $(".homepage-wrap").css({
        'margin-top': -($('.homepage-wrap').height() / 1.2)
      });
    }
  };



// ---------------------------------------- Project Details Slider -------------------------------------------
  // Selecting the wrapper for the slide
  $wrapper = $("#wrapper");
  var slideCount = $wrapper.children().length;
  var slideHeight = $(".content").height();


  // which slide number is currently active
  var activeLink = 0;

  // set up active class to the first child div initially
  $wrapper.children().eq( 0 ).addClass( "active" );

  // add event listener, when click next or previous will move to the next slide
  var nextButton = function () {
    // determine which div we are currently displaying
    for(var i=0; i < slideCount; i++) {
      if (i === (slideCount-1)) {
        break;
      }
      else if ($wrapper.children().eq( i ).hasClass( "active" ) ) {
        console.log(i);
        nextSlide(i);
        break;
      }

    }
  };

  var previousButton = function () {
    // determine which div we are currently displaying
    for(var i= 0; i < slideCount; i++) {

      if ($wrapper.children().eq( i ).hasClass( "active" ) ) {
        if (i === (0)) {
          break;
        }
        else {
          previousSlide(i);
          break;
        }

      }

    }
  };

  var nextSlide = function (i) {
    console.log(i);
    console.log(slideHeight);
    var bottomHeight = ((i+1) * slideHeight * -1);

    // set translate3d css to the bottom height of the current active div
    var translateValue = "translate3d(0px," + bottomHeight + "px, 0px)";
    $wrapper.css("transform", translateValue);

    // remove active class in the previous div
    $wrapper.children().eq( i ).removeClass( "active" );

    // add the next slide with the class of active
    $wrapper.children().eq( i+1 ).addClass( "active" );
  };

  var previousSlide = function (i) {
    var upperHeight = ((i) * slideHeight * -1);
    console.log(upperHeight);
    // set translate3d css to the bottom height of the current active div
    var translateValue = "translate3d(0px," + upperHeight + "px, 0px)";
    $wrapper.css("transform", translateValue);

    // remove active class in the previous div
    $wrapper.children().eq( i ).removeClass( "active" );

    // add the next slide with the class of active
    $wrapper.children().eq( i-1 ).addClass( "active" );
  };

  $(".next").click(nextButton);
  $(".previous").click(previousButton);

  $(".email").hover(function () {
      $(this).toggleClass("animated");
      $(this).toggleClass("pulse");
      $(this).toggleClass("infinite");
   });

   $(".linkedin").hover(function () {
       $(this).toggleClass("animated");
       $(this).toggleClass("pulse");
       $(this).toggleClass("infinite");
    });

    $(".github").hover(function () {
        $(this).toggleClass("animated");
        $(this).toggleClass("pulse");
        $(this).toggleClass("infinite");
     });

     $(".twitter").hover(function () {
         $(this).toggleClass("animated");
         $(this).toggleClass("pulse");
         $(this).toggleClass("infinite");
      });

      $(".skill").hover(function() {
          $(this).toggleClass("animated");
          $(this).toggleClass("swing");
          $(this).toggleClass("infinite");
      });

      // Add animation to next and previous button at the project details html
      $(".next").hover(function() {
          $(this).toggleClass("animated");
          $(this).toggleClass("pulse");
          $(this).toggleClass("infinite");
      });


});
