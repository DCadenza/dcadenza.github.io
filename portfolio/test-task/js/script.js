// Change background color of top navigation on scroll
window.onscroll = () => {
    const nav = document.querySelector('#menu');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};

// Hide or show top menu when scroll UP or DOWN
document.onscroll = function() {
    if (window.innerHeight + window.scrollY > 6000) {
        document.getElementById('menu').style.cssText = 'display: none; transition: all 1s ease;'
    } else {
        document.getElementById('menu').style.cssText = 'display: block; transition: all 1s ease;'
    }
};

// document.getElementById("subelement").onfocus = function() {myFunction()};
//     function myFunction() {
//         document.getElementById("socials-contact").style.cssText = 'border-bottom: 1px solid #FF0E0E;'
// }

// // Show and hide social buttons(icons) top menu
// function showSocials() {
//     $(".socials").css('visibility', 'visible');
//     $('.socials-link').addClass('active-link');
//     if ($(e.target).closest(".socials").length === 0) {
//             $(".socials").css('visibility', 'hidden');
//         }
// };
// $('body').click(function(e) {
//     var target = e.target;
//     if ($(target).is('.socials-link')) return;
//     if (!$(".socials-link").hasClass('active-link')) return
//     $(".socials").css('visibility', 'hidden');
//     $(".socials-link").removeClass('active-link');
// });

// // Show and hide social buttons(icons) bottom menu
// function showSocialsBbottom() {
//     $(".socials-bottom").css('visibility', 'visible');
//     $('.socials-link-bottom').addClass('active-link-bottom');
//     if ($(e.target).closest(".socials-bottom").length === 0) {
//         $(".socials-bottom").css('visibility', 'hidden');
//     }
// };
// $('body').click(function(e) {
//     var target = e.target;
//     if ($(target).is('.socials-link-bottom')) return;
//     if (!$(".socials-link").hasClass('active-link-bottom')) return
//     $(".socials-bottom").css('visibility', 'hidden');
//     $(".socials-link-bottom").removeClass('active-link-bottom');
// });

// document.getElementById('socials-contact').addEventListener('click', function(e) {
//     e.preventDefault();
// }, false);
//
// document.getElementById('socials-contact').addEventListener('click', function(e) {
//     e.preventDefault();
// }, false);

// Scroll down script
$(document).ready(function(){
    $("a.contact-btn").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        }
    });
});

// Izotope gallery
$(window).on('load', function(){
    function gridMasonry(){
        var grid = $(".grid")
        if( grid.length ){
            grid.isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: '.grid-sizer',
                },
            });
        }
    }
    gridMasonry();
});

// Magnific pop-up
$(document).ready(function() {
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
});

// Mobile menu
jQuery(document).ready(function($) {
    $("#toggle-menu").click(function() {
        $(".mob-nav-container").css('display', 'block');
    });
});
$(".mob-nav-close-btn").on('click', function(){
    $(".mob-nav-container").hide();
});

// Custom file input
;( function ( document, window, index )
{
    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label	 = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    });
}( document, window, 0 ));

// Form select
$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';});
    template += '</div></div>';
    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});

$(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
}, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
});

$(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});

$(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});
