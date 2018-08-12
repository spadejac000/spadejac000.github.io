$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 100) {
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });

        // parallax
        $('.parallax').parallax();
        
        // sidenav
        $('.sidenav').sidenav();

        // init ScrollMagic
        var controller = new ScrollMagic.Controller();

        // build a scene
        var ourScene = new ScrollMagic.Scene({
          triggerElement: '#project01',
          triggerHook: 0.8
        })
        .setClassToggle('#project01', 'fade-in')
        .addTo(controller);

        var ourScene = new ScrollMagic.Scene({
          triggerElement: '#project02',
          triggerHook: 0.8
        })
        .setClassToggle('#project02', 'fade-in')
        .addTo(controller);

        var ourScene = new ScrollMagic.Scene({
          triggerElement: '#project03',
          triggerHook: 0.8
        })
        .setClassToggle('#project03', 'fade-in')
        .addTo(controller); 

        var ourScene = new ScrollMagic.Scene({
          triggerElement: '#project04',
          triggerHook: 0.8
        })
        .setClassToggle('#project04', 'fade-in')
        .addTo(controller); 

        var ourScene = new ScrollMagic.Scene({
          triggerElement: '#project05',
          triggerHook: 0.8
        })
        .setClassToggle('#project05', 'fade-in')
        .addTo(controller); 

        var ourScene = new ScrollMagic.Scene({
          triggerElement: '#project06',
          triggerHook: 0.8
        })
        .setClassToggle('#project06', 'fade-in')
        .addTo(controller); 

        var ourScene = new ScrollMagic.Scene({
          triggerElement: '#project07',
          triggerHook: 0.8
        })
        .setClassToggle('#project07', 'fade-in')
        .addTo(controller); 

        var ourScene = new ScrollMagic.Scene({
          triggerElement: '#project08',
          triggerHook: 0.8
        })
        .setClassToggle('#project08', 'fade-in')
        .addTo(controller); 

        var ourScene = new ScrollMagic.Scene({
          triggerElement: '#project09',
          triggerHook: 0.8
        })
        .setClassToggle('#project09', 'fade-in')
        .addTo(controller); 
});

$('.home').click(function() {
  $("html, body").animate({ scrollTop: $('#home').offset().top }, 500);
})

$('.about').click(function() {
  $("html, body").animate({ scrollTop: $('#about').offset().top }, 500);
})

$('.projects').click(function() {
  $("html, body").animate({ scrollTop: $('#projects').offset().top }, 500);
})

$('.contact').click(function() {
  $("html, body").animate({ scrollTop: $('#contact').offset().top }, 500);
})
