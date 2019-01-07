// Navigation buttons
$('button.menu').on('click', function() {
  $('.navigation-container').show('2000');
  $('button.menu').hide();
  $('button.search').hide();
  $('#site-search').hide();
});

$('button.close').on('click', function(){
    $('.navigation-container').hide('2000');
    $('button.menu').show();
    $('button.search').show();
});

// Preloader
$(window).on('load', function () {
var $preldr = $('#preloader'),
    $svg_anm   = $preldr.find('.svg-animation');
$svg_anm.fadeOut();
$preldr.delay(1000).fadeOut('slow');
});

// Search btn and field
    var open = document.getElementById('site-search');
    $('button.search').on('click', function(){
    if(open.style.display == 'none') {
        $('#site-search').css('display', 'inline-block');
        $('#site-search').css('margin-top', '-2px');
    } else if (open.style.display == 'inline-block') {
        $('#site-search').css('display', 'none');
        $('#site-search').css('margin-top', '0px');
    }
});
