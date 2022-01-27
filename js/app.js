window.addEventListener('DOMContentLoaded', (event) => {
  
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

  document.getElementsByClassName('menu-toggle')[0].addEventListener('click', openNav)
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementsByClassName("mobile-nav")[0].style.width = "0";
  }
  
  document.getElementsByClassName("mobile-nav-li")[0].addEventListener("click", closeNav);
  
  document.getElementsByClassName("mobile-nav-li")[1].addEventListener("click", closeNav);
  
  document.getElementsByClassName("mobile-nav-li")[2].addEventListener("click", closeNav);
  
  document.getElementsByClassName("mobile-nav-li")[3].addEventListener("click", closeNav);
  
  document.getElementsByClassName("mobile-nav-li")[4].addEventListener("click", closeNav);

  document.getElementsByClassName('menu-exit')[0].addEventListener('click', closeNav)
  
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
  
  // Light/Dark Theme *********************************************
  
  let checkbox = document.querySelector('input[name=theme]')

  let heroSectionImg = document.querySelector('.hero-section-img')
  
  const trans = () => {
    document.documentElement.classList.add('transition')
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition')
    }, 1000)
  }
  
  checkbox.addEventListener('change', () => {
    if(checkbox.checked) {
      trans();
      document.documentElement.setAttribute('data-theme', 'dark')
      heroSectionImg.setAttribute('src', 'https://www.pinclipart.com/picdir/big/529-5299973_website-svg-wedsite-transparent-png-clipart-free-website.png')
    } else {
      trans();
      document.documentElement.setAttribute('data-theme', 'light')
      heroSectionImg.setAttribute('src', 'https://www.pinclipart.com/picdir/big/11-117255_coding-computer-programming-clipart.png')
    }
  })

});
