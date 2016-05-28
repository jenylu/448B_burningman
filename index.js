// $('.outer').click(function(){
//     // $(this).css('opacity', function(i,o){
//     //     return parseFloat(o).toFixed(1) === '0.6' ? 1 : 0.6;
//     // });
// });

$(".outer").on("click", function() {
    $(this).toggleClass("selectedCol");
}); 