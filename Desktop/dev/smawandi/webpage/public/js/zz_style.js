$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $('#custom-nav').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $('#custom-nav').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }   
});

/*
(function() {

var win = $(window);

win.resize(function() {
    
    var win_w = win.width(),
        win_h = win.height(),
        $bg    = $("#bg");

    // Load narrowest background image based on 
    // viewport width, but never load anything narrower 
    // that what's already loaded if anything.
    var available = [
      375, 800, 1024, 1280,
      1920, 3024
    ];

    var current = $bg.attr('src').match(/([0-6]+)/) ? RegExp.$1 : null;
    
    if (!current || ((current < win_w) && (current < available[available.length - 1]))) {
      
      var chosen = available[available.length - 1];
      
      for (var i=0; i<available.length; i++) {
        if (available[i] >= win_w) {
          chosen = available[i];
          break;
        }
      }
      
      // Set the new image
        if(window.innerWidth > window.innerHeight){
            $bg.attr('src', '/images/hero/' + chosen + '.jpg');
        }
        else {
            $bg.attr('src', '/images/hero/500.jpg');
        }
        
    
      
      
      // for testing...
      // console.log('Chosen background: ' + chosen);
      
    }

    // Determine whether width or height should be 100%
    if ((win_w / win_h) < ($bg.width() / $bg.height())) {
      $bg.css({height: '100%', width: 'auto'});
    } else {
      $bg.css({width: '100%', height: 'auto'});
    }
    
  }).resize();
  
})(jQuery);
*/