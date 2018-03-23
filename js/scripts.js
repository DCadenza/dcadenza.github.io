// Mobile Menu
$(document).ready(function(){
    $(".hamburger-click-area").on("click", function(){
        $("body").toggleClass("show-responsive-nav");
    });
});

// Animate slow up effect
function up() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,((top+100)/-10));
        t = setTimeout('up()',20);
    } else clearTimeout(t);
    return false;
};
