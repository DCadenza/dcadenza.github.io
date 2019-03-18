// MENU
$(document).ready(function(){
$('.owl-carousel').owlCarousel();
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// OWAL CAROUSEL
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
});

// BX SLIDER
$(document).ready(function(){
    $('.bxslider').bxSlider();
});
$('.bxslider').bxSlider({
    auto: true,
    autoControls: false
});

// UNSLIDER
jQuery(document).ready(function($) {
			$('.my-slider').unslider();
		});
// UNSLIDER END
