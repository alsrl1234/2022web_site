const slide = $(".slideWrap").bxSlider({
    controls: false,

});

$(".next").click(function () {
    slide.goToNextSlide();
});

$(".prev").click(function () {
    slide.goToPrevSlide();
});






$(".navbar01>ul>li").hover(function () {
    $(this).addClass("on");
}, function () {
    $(this).removeClass("on");
});

$(".toggle").click(function () {
    $(".navbarClone").css("left", 0);
    $(".overlay").show();
    $(".mMenu>ul>li>a").removeClass("on")
    $(".submenu").hide()

})
$(".overlay").click(function () {
    $(".navbarClone").css("left", "-100%");
    $(".overlay").hide();
})
$(".mClose").click(function () {
    $(".navbarClone").css("left", "-100%");
    $(".overlay").hide();
});
// $(".navbarWrap").clone().appendTo(".mMenu");
$(".navbar01>ul").clone().appendTo(".mMenu");
$(".contents2 li").click(function () {
    $(".contents2 li").removeClass("click")
    $(this).addClass("click")

})



$(".mMenu>ul>li>a").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("on")) {
        $(this).removeClass("on")
        $(".submenu").hide()
    } else {
        $(".mMenu>ul>li>a").removeClass("on")
        $(".submenu").hide()
        $(this).parent().find(".submenu").show()
        $(this).addClass("on")
    }
})


   
let bWidth = window.innerWidth;
window.addEventListener("resize", () => {
  const nWidth = window.innerWidth;
  if ((bWidth < 817 && nWidth >= 817) || (bWidth > 816 && nWidth <= 816)) {
    location.reload();
  }
  beforeWidth = nowWidth;
});


if(matchMedia("screen and (max-width: 816px)").matches){
   
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
    
}
// window.onresize = function(){
//     document.location.reload();
  

// }
  
       
      

  