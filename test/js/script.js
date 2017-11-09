// Slider
$(document).ready(function(){
$('.owl-carousel').owlCarousel();
});

// MAP
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.SATELIT
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// MAP END
