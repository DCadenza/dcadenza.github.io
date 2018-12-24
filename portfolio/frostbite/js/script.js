$("button.menu").on("click", function() {
  $(".navigation-container").css("display", "block");
});

$("button.close").on("click", function(){
    $(".navigation-container").css("display", "none");
});
