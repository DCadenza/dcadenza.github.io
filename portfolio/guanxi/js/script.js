// Top navigation scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".global-nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
// Accordion
$('.accordion-head').click(function() {
    $(this).children('.arrow-down').toggleClass('rotate');
    $(this).next('.accordion-hidden').slideToggle(350);
});
// Mobile menu
$(function() {
    var clickCount = 0;
    $('#toggle-menu').click(function () {
        if(clickCount%2==0){
              //do when open
               $('.mob-nav-container').css({display:'block'});
        }else{
             //do when closed
             $('.mob-nav-container').css({display:'none'});
         }
        clickCount++;
    });
});
