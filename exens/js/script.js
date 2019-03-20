$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
         speed: 500,
         slidesToShow: 4,
         slidesToScroll: 1,
         responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: true,
                 dots: true,
                 arrows: false
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 dots: true,
                 arrows: false
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 dots: true,
                 arrows: false
               }
             }
             // You can unslick at a given breakpoint now by adding:
             // settings: "unslick"
             // instead of a settings object
           ]
         });
    });

// Mobile menu
jQuery(document).ready(function($) {
    $(".mob-nav-container").hide();
    $("#toggle-menu").click(function() {
    $(".mob-nav-container").slideToggle(200);
    });
});

// Hero Animation actions
// jQuery(document).ready(function($) {
//     $(".hero").addClass('flash');
//     setTimeout(function() {
//         $(".hero").removeClass('flash');
//     }, 1500);
// });

// Accordion
$('.accordion-head').click(function() {
    $(this).children('.arrow-down').toggleClass('rotate');
    $(this).next('.accordion-hidden').slideToggle(350);
});

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

// Popup simple!!! close function
function closePopUp() {
    $('.popUp-request').css('display', 'none');
};

// Events on scroll Triangle show
// Hero
jQuery(document).ready(function($) {
    setTimeout(function() {
        $(".triangle-hero").css('display', 'block');
    }, 3000);
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 700) {
            setTimeout(function() {
                $(".triangle-products-green").css('display', 'block');
            }, 500);
		}
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1100) {
            setTimeout(function() {
                $(".triangle-social-orange").css('display', 'block');
            }, 500);
		}
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1700) {
            setTimeout(function() {
                $(".triangle-news-main").css('display', 'block');
            }, 500);
		}
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 2300) {
            setTimeout(function() {
                $(".triangle-commitment-green").css('display', 'block');
            }, 600);
		}
	});
});

// Hide popUp window on any click
$(document).mouseup(function (e) {
    var container = $(".popUp-request");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

jQuery(document).ready(function($) {
    setTimeout(function() {
        $(".triangle-iner-pages").css('display', 'block');
    }, 1000);
});

// Cookies
// Show and Hide cookies message on Click
$(document).ready(function(){
    $("#cookiesBtn").click(function (){
        $.cookie(".cookies", "24hourse", {expires: 0} );
        $(".cookies").hide();
    });

    if ( $.cookie(".cookies") == null ) {
        setTimeout(function(){
            $(".cookies").show();
        }, 4000)
    } else { $(".cookies").hide();}
});
