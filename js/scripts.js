// Contact form
$(document).ready(function() {
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "../mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Thank you!");
            $("#form").trigger("reset");
        });
        return false;
    });
});


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
        t = setTimeout('up()',30);
    } else clearTimeout(t);
    return false;
};
