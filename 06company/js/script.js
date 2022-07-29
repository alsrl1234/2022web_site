const slide = $(".slideWrap").bxSlider({
    controls: false,
    
});

$(".next").click(function(){
    slide.goToNextSlide();
});

$(".prev").click(function(){
    slide.goToPrevSlide();
});
    




$(".navbar01>ul>li").hover(function(){
    $(this).addClass("on");
},function(){
    $(this).removeClass("on");
});

$(".toggle").click(function(){
    $(".navbarClone").css("left",0);
    $(".overlay").show();
})
$(".overlay").click(function(){
    $(".navbarClone").css("left","-100%");
    $(".overlay").hide();
});
$(".navbar01>ul").clone().appendTo(".mMenu");