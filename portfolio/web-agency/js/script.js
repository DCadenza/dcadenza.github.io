// Mobile Menu
$('.js-toggle-menu').click(function(e){
    e.preventDefault();
$('.mobile-header-nav').slideToggle();
$(this).toggleClass('open');
});

// MAP
// function myMap() {
//     var mapOptions = {
//         center: new google.maps.LatLng(51.5, -0.12),
//         zoom: 10,
//         mapTypeId: google.maps.MapTypeId.SATELIT
//         key: AIzaSyAwUwU6ut4w3ylYD-pK_Zcxjs23zq_Q4pI
//     }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }
