$(document).ready(function(){
    $('.slider1').slick({
        dots: false,
        infinite: true,
         speed: 800,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 3000,
         responsive: [
             {
               breakpoint: 1345,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: false,
                 arrows: false
               }
             },
             {
               breakpoint: 992,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: false,
                 arrows: false
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: false,
                 arrows: false
               }
             }
           ]
         });
    });

    $(document).ready(function(){
        $('.slider2').slick({
            dots: false,
            infinite: true,
             speed: 500,
             slidesToShow: 4,
             slidesToScroll: 1,
             autoplay: true,
             autoplaySpeed: 3000,
             responsive: [
                 {
                   breakpoint: 1345,
                   settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                     infinite: true,
                     dots: false,
                     arrows: true
                   }
                 },
                 {
                   breakpoint: 992,
                   settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     dots: false,
                     arrows: true
                   }
                 },
                 {
                   breakpoint: 725,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     dots: false,
                     arrows: true
                   }
                 }
               ]
             });
        });
        $(document).ready(function(){
            $('.wrap').slick({
                dots: false,
                infinite: true,
                 speed: 500,
                 slidesToShow: 4,
                 slidesToScroll: 1,
                 autoplay: true,
                 autoplaySpeed: 3000,
                 responsive: [
                     {
                       breakpoint: 1384,
                       settings: {
                         slidesToShow: 3,
                         slidesToScroll: 1,
                         infinite: true,
                         dots: false,
                         arrows: true
                       }
                     },
                     {
                       breakpoint: 992,
                       settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                         dots: false,
                         arrows: true
                       }
                     },
                     {
                       breakpoint: 725,
                       settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         dots: false,
                         arrows: true
                       }
                     }
                   ]
                 });
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

// Mobile menu
jQuery(document).ready(function($) {
    $("#toggle-menu").click(function() {
    $(".mob-nav-container").css('display', 'block');
    });
});
    $(".mob-nav-close-btn").on('click', function(){
        $(".mob-nav-container").hide();
    });

// Popup kved
function openPopUpKved() {
    $('.popUp-kved').css('display', 'block');
    $('.overlay-bcg').css('display', 'block');
};

$(document).mouseup(function (e) {
    var container = $('.overlay-bcg, .popUp-kved');
    if (container.has(e.target).length === 0){
        container.css('display', 'none');
    }
});

function closePopUpKved() {
    $('.popUp-kved').css('display', 'none');
    $('.overlay-bcg').css('display', 'none');
};

function addPopUpKved() {
    $('.popUp-kved').css('display', 'none');
    $('.overlay-bcg').css('display', 'none');
};

// Subscribe Popup
function openPopUpSubscribe() {
    $('.popUp-subscribe').css('display', 'block');
    $('.overlay').css('display', 'block');
};

function closePopUpSubscribe() {
    $('.popUp-subscribe').css('display', 'none');
    $('.overlay').css('display', 'none');
};

function subscribeSuggest() {
    $('.popUp-subscribe').css('display', 'none');
    $('.overlay').css('display', 'none');
};

$(document).mouseup(function (e) {
    var container = $('.popUp-subscribe, .overlay');
    if (container.has(e.target).length === 0){
        container.css('display', 'none');
    }
});

// Pop up Creator portfolio
function closePopUpCreator() {
    $(".popUp-slider-creator").css('display', 'none');
    $(".overlay").css('display', 'none');
};

$(".item > img").on('click', function() {
    $(".popUp-slider-creator").css('display', 'block');
    $(".overlay").css('display', 'block');
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".global-nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


// Img upload's clear button's
$('button#delLogo').on('click', function() {
    $("#file_input1").val('');
    $("#drop_zone1 > .preview-container").empty();
    $("#drop_zone1 > .preview-container").remove();
});

$('button#delPhoto').on('click', function() {
    $("#file_input2").val('');
    $("#drop_zone2 > .preview-container").empty();
    $("#drop_zone2 > .preview-container").remove();
});

$('button#delPortfolio').on('click', function() {
    $("#file_input3").val('');
    $("#drop_zone3 > .preview-container").empty();
    $("#drop_zone3 > .preview-container").remove();
});


// Become a creator error input
$('document').ready(function() {
    $('#submitCreator').on('click', function() {
        $('input[required]').addClass('ifield');
  });
});

// Become a partner error input
$('document').ready(function() {
    $('#submitPartner').on('click', function() {
        $('input[required]').addClass('ifield');
    });
});

$('document').ready(function() {
    $('#submitPartner').on('click', function() {
        $('textarea[required]').addClass('ifield');
    });
});

// Contacts error input
$('document').ready(function() {
    $('#submitContacts').on('click', function() {
        $('input[required]').addClass('ifield');
    });
});

$('document').ready(function() {
    $('#submitContacts').on('click', function() {
        $('textarea[required]').addClass('ifield');
    });
});

$('document').ready(function() {
    $('#submitContacts').on('click', function() {
        $('textarea[required]').addClass('ifield');
    });
});

// Become a creator page Input file clear buttons
$('form input#file_input1[type=file]').on('change', function() {
    $('.clear-logo').css('display', 'block');
});
function removeLogoBtn() {
    $('.clear-logo').hide();
}

$('form input#file_input2[type=file]').on('change', function() {
    $('.clear-portfolio').css('display', 'block');
});
function removePorfolioBtn() {
    $('.clear-portfolio').hide();
}

$('form input#file_input3[type=file]').on('change', function() {
    $('.clear-portfolio-big').css('display', 'block');
});
function removeBigPorfolioBtn() {
    $('.clear-portfolio-big').hide();

}

// Close selects
$(document).mouseup(function (e) {
    var container = $(".low-form");
    if (container.has(e.target).length === 0) {
        container.removeClass("opened");
    }
});

$(document).mouseup(function (e) {
    var container = $(".quantEmpl");
    if (container.has(e.target).length === 0) {
        container.removeClass("opened");
    }
});

$(document).mouseup(function (e) {
    var container = $(".typeSelect");
    if (container.has(e.target).length === 0) {
        container.removeClass("opened");
    }
});

$(document).mouseup(function (e) {
    var container = $(".langClose");
    if (container.has(e.target).length === 0) {
        container.removeClass("opened");
    }
});
