// Animate slow up effect
function up() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,((top+100)/-10));
        t = setTimeout('up()',20);
    } else clearTimeout(t);
    return false;
};

// Form
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

//Styling checkbox
function fun1() {
    var chbox;
    chbox=document.getElementById('checkboxOneTime');
    if (chbox.checked) {
        $("#checkboxSubscribe").prop("checked", false);
        $(".boxSubscribe").css('border', '2px solid #e5e4d7');
        $(".subscribe").css({'width' : '40px', 'height' : '40px'});
        $(".subscribeBefore").css('z-index', '1');
        $(".box").css('border', 'none');
        $(".check").css({'width' : '44px', 'height' : '44px'});
        $(".before").css('z-index', '-1');
        $("#subBtn").html('Add to cart');
        $('.subscribeInfo').hide('2000');
    } else {
        $(".box").css("border", "2px solid #e5e4d7");
        $(".check").css({'width' : '40px', 'height' : '40px'});
        $(".before").css('z-index', '1');
        $(".subscribeButton button").css('background', '#78bc61');
    }
};

function fun2() {
var chbox2;
chbox2=document.getElementById('checkboxSubscribe');
	if (chbox2.checked) {
        $("#checkboxOneTime").prop("checked", false);
        $(".boxSubscribe").css("border", "none");
        $(".subscribe").css({'width' : '44px', 'height' : '44px'});
        $(".subscribeBefore").css('z-index', '-1');
        $("#subBtn").html('Subscribe');
        $(".box").css("border", "2px solid #e5e4d7");
        $(".check").css({'width' : '40px', 'height' : '40px'});
        $(".before").css('z-index', '1');
        $(".subscribeButton button").css('background', '#78bc61');
        $('.subscribeInfo').show('2000');

	}
	else {
        $(".boxSubscribe").css('border', '2px solid #e5e4d7');
        $(".subscribe").css({'width' : '40px', 'height' : '40px'});
        $(".subscribeBefore").css('z-index', '1');
        $('.subscribeInfo').css('display', 'none');
	}
};

//Hide subscribe info block on click
$('.subscribeInfo').on('click', function(){
    $('.subscribeInfo').hide('2000');
});

// Show cookies message on Click
$(document).ready(function() {
    $(".cookies").delay(1000).fadeIn(500);
});

// Hide cookies message on Click
$('#cookiesBtn').on('click', function(){
    $('.cookies').fadeOut('2000');
});

// Video video popUp
jQuery(function($){

// Lightbox Triggers
    $(".open-video-link").videoBox();
});

//Function to create lightbox
jQuery.fn.extend({
    videoBox : function() {
        var self, link, target, video, videoSrc, toggle;
        this.each(function() {
            self = this;
            target = $(self).attr("href");
            video = $(target).find(".popup-video iframe");
            videoSrc = $(video).attr("src");

            $(this).on("click", function(event) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
                $(target).wrap( "<div class='lightbox'></div>" );
                $(".lightbox").fadeIn(300, function() {
                    $(target).fadeIn(0);
                    $("body").addClass("modal-open");
                    $(video).attr("src",videoSrc+'?autoplay=1');
                    resizeIfame(video);
                });

                $("body").on("click", function(event) {
                    if(($(event.target).hasClass("lightbox") || $(event.target).hasClass("close")) && $(target).parent().hasClass("lightbox") ) {
                        $(".lightbox").fadeOut(300, function() {
                            $(target).hide(0);
                            $(target).unwrap();
                        });
                        $("body").removeClass("modal-open");
                        $(video).attr("src",videoSrc);
                    }
                });
            });
        });
    }
});

// Resize iframe video function
function resizeIfame(frame) {

    var oldWidth = $(frame).width();
    var oldHeight = $(frame).height();
    var propotion = oldHeight / oldWidth;
    var newHeight;

    $(frame).width('100%');
    newHeight = $(frame).width() * propotion;
    $(frame).height(newHeight);

    $(window).resize(function() {
        $(frame).width('100%');
        newHeight = $(frame).width() * propotion;
        $(frame).height(newHeight);
    });
};

// Function to change table button color on Click
$('#colorBtn1, #colorBtn2, #colorBtn3').click(function () {
    if (this.id == 'colorBtn1') {
        $('#colorBtn1').css('color', '#36c1ba');
        $('.underline1').css('border-color', '#36c1ba');
        $('#colorBtn2').css('color', '#121920');
        $('.underline2').css('border-color', '#121920');
        $('#colorBtn3').css('color', '#121920');
        $('.underline3').css('border-color', '#121920');
    } else if (this.id == 'colorBtn2') {
        $('#colorBtn1').css('color', '#121920');
        $('.underline1').css('border-color', '#121920');
        $('#colorBtn3').css('color', '#121920');
        $('.underline3').css('border-color', '#121920');
        $('#colorBtn2').css('color', '#36c1ba');
        $('.underline2').css('border-color', '#36c1ba');
    } else if (this.id == 'colorBtn3') {
        $('#colorBtn1').css('color', '#121920');
        $('.underline1').css('border-color', '#121920');
        $('#colorBtn2').css('color', '#121920');
        $('.underline2').css('border-color', '#121920');
        $('#colorBtn3').css('color', '#36c1ba');
        $('.underline3').css('border-color', '#36c1ba');
    }
});

// Function to change table content
var HIDDEN_CLASS_NAME = 'hidden'
var TARGET_CLASS_NAME = 'table'
var SOURCE_CLASS_NAME = 'titleBtn'

var targetIdToShow = 1

function table() {
	var targets = getElements(TARGET_CLASS_NAME)
	var sources = getElements(SOURCE_CLASS_NAME)
	sources.forEach(function (sourceNode) {
		var sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
		sourceNode.addEventListener('click', function () {
			showTarget(targets, sourceNodeId)
		})
	})
	showTarget(targets, targetIdToShow)
}

function getElements(type) {
	return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
		var target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
		var target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
		return target1Num > target2Num
	})
}

function extractId(targetNode, baseClass) {
	var currentClassIndex = targetNode.classList.length
	while (currentClassIndex--) {
		var currentClass = targetNode.classList.item(currentClassIndex)
		var maybeIdNum = parseInt(currentClass.split('-')[1])
		if (isNaN(maybeIdNum)) {
			continue
		}
		var classStrinToValidate = baseClass + '-' + maybeIdNum
		if (classStrinToValidate === currentClass) {
			return maybeIdNum
		}
	}
}

function showTarget(targets, targetId) {
	targets.forEach(function (targetNode, targetIndex) {
    var currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
		if (currentTargetNodeId === targetId) {
			targetNode.classList.remove(HIDDEN_CLASS_NAME)
		} else {
			targetNode.classList.add(HIDDEN_CLASS_NAME)
		}
	})
}

table()

// Testimonial hide thumbnail function

// video-overlay-1
document.querySelector(".video-overlay-1").onclick = function(){
	this.style.display = "none";
}
// video-overlay-2
document.querySelector(".video-overlay-2").onclick = function(){
	this.style.display = "none";
}
// video-overlay-3
document.querySelector(".video-overlay-3").onclick = function(){
	this.style.display = "none";
}
// video-overlay-4
document.querySelector(".video-overlay-4").onclick = function(){
	this.style.display = "none";
}
