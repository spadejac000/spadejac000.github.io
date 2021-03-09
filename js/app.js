$(document).ready(function() {

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

const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // get full text of current word
  const fullTxt = this.words[current];

  // check if deleting
  if(this.isDeleting) {
    // remove character
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // add character
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

  // initial type speed
  let typeSpeed = 300;

  if(this.isDeleting) {
    typeSpeed = typeSpeed /= 2;
  }

  // if word is complete
  if(!this.isDeleting && this.txt === fullTxt) {
    // make pause at end
    typeSpeed = this.wait;
    // set delete to true
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Moving to next word
    this.wordIndex++;
    // pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed)
}

// Init On DOM Load
// document.addEventListener('DOMContentLoaded', init);

// // Init App
// function init() {
//   const txtElement = document.querySelector('.txt-type');
//   const words = JSON.parse(txtElement.getAttribute('data-words'));
//   const wait = txtElement.getAttribute('data-wait');
//   // Init Typewriter
//   new TypeWriter(txtElement, words, wait);
// }

// navbar scrolling
$(window).on('scroll', () => {
  if($(window).width() > 600) {
    if($(window).scrollTop()) {
      $('nav').addClass('black');
    } else {
      $('nav').removeClass('black');
    }
  } 
})

// hamburger menu functionality
$('.fa-bars').on('click', () => {
  $('.mobile-menu').slideToggle();
})

$('.mobile-menu-item').on('click', () => {
  $('.mobile-menu').slideToggle();
})

/* Open the sidenav */
function openNav() {
  document.getElementsByClassName("mobile-nav")[0].style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementsByClassName("mobile-nav")[0].style.width = "0";
}

document.getElementsByClassName("mobile-nav-li")[0].addEventListener("click", closeNav);

document.getElementsByClassName("mobile-nav-li")[1].addEventListener("click", closeNav);

document.getElementsByClassName("mobile-nav-li")[2].addEventListener("click", closeNav);

document.getElementsByClassName("mobile-nav-li")[3].addEventListener("click", closeNav);

document.getElementsByClassName("mobile-nav-li")[4].addEventListener("click", closeNav);

//formspree ajax

window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("my-form");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    status.classList.add('success')
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add('error')
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}