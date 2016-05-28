$(".itemHeader").on("click", function() {
    $(this).parent().toggleClass("selectedCol");
}); 

$(".legend").on("click", function() {
    $(this).toggleClass("selected");
}); 