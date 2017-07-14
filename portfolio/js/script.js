$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
     return false;
   });
 });

jQuery(document).ready(function() {
jQuery('.post').addClass("hidden").viewportChecker({
classToAdd: 'visible animated fadeIn',
offset: 100
});
});
