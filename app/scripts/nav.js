$(document).ready(function() {
  $('.menu-toggle-close').click(function() {
    $('.nav').addClass('nav-hide', 500);
  });

  $('.menu-toggle-open').click(function() {
    $('.nav').removeClass('nav-hide', 500);
  });

  $('.nav-link').click(function() {
    $('.nav').addClass('nav-hide', 500);
  })
});
