$(".humbergar span").click(function(){
    $(this).parent().toggleClass("active");
    $(".humb-menu").toggleClass("open");
});

$('.humb-menu a').on('click',function(){
    $('.humb-menu').removeClass("open");
    $(".humbergar").removeClass("active")
});
