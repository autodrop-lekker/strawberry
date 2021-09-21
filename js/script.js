$(document).ready(function() {
    $('.drawer').drawer();
    $('.drawer-nav').on('click', function() {
      $('.drawer').drawer('close');
   });
  });

  new WOW().init();