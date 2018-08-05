$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) {
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
        $('.parallax').parallax();

        // init ScrollMagic
        var controller = new ScrollMagic.Controller();

        // var projects = [
        //   '#project01',
        //   '#project02',
        //   '#project03'
        // ]
        // build a scene
        var ourScene = new ScrollMagic.Scene({
          triggerElement: '#project01'
        })
        .setClassToggle('#project01', 'fade-in')
        .addTo(controller);

        var ourScene = new ScrollMagic.Scene({
          triggerElement: '#project02'
        })
        .setClassToggle('#project02', 'fade-in')
        .addTo(controller);

        var ourScene = new ScrollMagic.Scene({
          triggerElement: '#project03'
        })
        .setClassToggle('#project03', 'fade-in')
        .addTo(controller);
});
