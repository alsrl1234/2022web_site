$("#fullpage").fullpage({
    menu: ".menu_list",
    anchors: ["m1st", "m2st", "m3st", "m4st", "m5st", "m6st", "m7st", "m8st"],
    navigation: true,
    // navigationPosition:"fp-right",
    navigationTooltips: ["first", "second", "third", "forth", "fifth", "sixth", "seven", "eight"],
    responsiveWidth: 900,
    afterLoad: function (anchorslink, index) {
        if (index == 1) {

        } else {
            
        }
        if (index == 2) {
            swiper.slideTo((0), (1000), false)
        } else {
            
        }
        if (index == 3) {
            $(".swiper-slide video").eq(0).trigger('play')
            $("#page3 .swiper-pagination span").addClass("on")
            $(".page3 .wrap").addClass("move")
        } else {
           
            $(".swiper-slide video").get(0).currentTime = 0
            $("#page3 .swiper-pagination span").removeClass("on")
          
        }
        if (index == 4){
            swiper.slideTo((0), (1000), false)
            
        }

    }
})

var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

let sliderVideos = $(".swiper-slide video")

swiper.on('slideChange', function () {
    console.log('slide changed');
    sliderVideos.each(function (index) {
        this.currentTime = 0;
    });
    sliderVideos.trigger("pause")
    sliderVideos.eq(this.realIndex).trigger('play')
        console.log('play')

});




function vi_slide(){
    swiper.slideNext(false);
}

$(".toggle").click(function () {
    $(".toggle_menu").css("display", "block")
    $(".modal_wrap").css("display", "block")

})

$(".toggle_close").click(function () {
    $(".toggle_menu").css("display", "none")
    $(".modal_wrap").css("display", "none")
})



$(".btn_down").click(function () {
    $(".rev_pop").css("display", "block")
    $(".modal_wrap").css("display", "block")

})

$(".rev_pop_close").click(function () {
    $(".rev_pop").css("display", "none")
    $(".modal_wrap").css("display", "none")
})



$(".gift").click(function () {
    $(".modal_wrap").css("display", "block")
    $(".modal_wrap .gift_pop").css("display", "block")
})

$(".gift_close").click(function () {
    $(".modal_wrap").css("display", "none")
    $(".modal_wrap .gift_pop").css("display", "none")

})

$(".modal_wrap").click(function () {
    $(".modal_wrap").css("display", "none")
    $(".toggle_menu").css("display", "none")
    $(".modal_wrap .gift_pop").css("display", "none")
    $(".rev_pop").css("display", "none")
    $(".letter_pop").css("display", "none")
    $(".media_bg").css("display","none")
})

$(".letter").click(function(){
    $(".modal_wrap").css("display", "block")
    $(".letter_pop").css("display", "block")
})


$(".letter_txt").on("mousewheel",function(e){
    console.log("wh")
    e.stopPropagation();
})




// new ClipboardJS(".url_copy")
let btns = document.querySelectorAll('.url_copy');
let clipboard = new ClipboardJS(btns);

clipboard.on('success', function (e) {
    console.log(e);
    if ("success" == "success") {
        alert("주소가 복사 되었습니다.")
    } else {
        alert("error")
    }
});

clipboard.on('error', function (e) {
    console.log(e);

});

$(".skill_btn").click(function(){
    let i = $(".skill_btn").index(this)
    $(".skill_btn").removeClass("active")
    $(this).addClass("active")
    $(".skill_txt ul li").css("display","none")
    $(".skill_txt ul li").eq(i).css("display","block")
    console.log(i)
})


$(".btn_class").click(function(){
    $("video").trigger("pause")
    $(".class_intro").css("display","block")
    $(".class_tap ul .tap_list").eq(0).find(".class").trigger("play")
    $(".class_tap ul .tap_list").eq(0).find(".skill_video").trigger("play")
    $(".class_tap>ul>li").css("display","none")
    $(".class_tap>ul>li").eq(0).css("display","block")
    $(".skill_btn").removeClass("active")
    $(".class_tap ul .tap_list").eq(0).find(".skill_btn").eq(0).addClass("active")
    $(".skill_txt ul li").css("display","none")
    $(".class_tap ul .tap_list").eq(0).find(".skill_txt ul li").eq(0).css("display","block")
})



$(".class_btn").click(function(){
    let i = $(".class_btn").index(this)
    $(".class_btn").removeClass("active")
    $(this).addClass("active")
    $(".class_tap ul .tap_list").css("display","none")
    $(".class_tap ul .tap_list").eq(i).css("display","block")
    $(".skill_video").trigger("pause")
    $(".class").trigger("pause")
    $(".skill_video").get(i).currentTime=0;
    $(".class_tap ul .tap_list").eq(i).find(".class").trigger("play")
    $(".class_tap ul .tap_list").eq(i).find(".skill_video").trigger("play")
    $(".skill_btn").removeClass("active")
    $(".class_tap ul .tap_list").eq(i).find(".skill_btn").eq(0).addClass("active")
    $(".skill_txt ul li").css("display","none")
    $(".class_tap ul .tap_list").eq(i).find(".skill_txt ul li").eq(0).css("display","block")
    
    
         
})

$(".class_close").click(function(){
    $(".class_intro").css("display","none")
    $(".skill_video").get(0).currentTime=0;
    $(".skill_video").trigger("pause")
    $(".class_tap ul .tap_list").css("display","none")
    $(".class_tap ul .tap_list").eq(0).css("display","block")
    $(".class_btn").removeClass("active")
    $(".class_btn").eq(0).addClass("active")
    $("#class_bg").trigger('play')
})

$(".media_img").click(function(){
    $(".media_bg").css("display","block")
    $(".modal_wrap").css("display","block")
    let meida_attr = $(this).attr("src")
    $(".media_bg img").attr("src",meida_attr)
})


$(".media_close").click(function(){
    $(".media_bg").css("display","none")
    $(".modal_wrap").css("display","none")
})

$("#page5 .game_info_wrap>button").hover(function(){
    let hover_i = $("#page5 .game_info_wrap>button").index(this)+1
    console.log(hover_i)
     $("#page5 .game_info_wrap").css("background-image","url(./images/bg05_0"+ hover_i +"on.jpg)")
},function(){
    $("#page5 .game_info_wrap").css("background-image","url(./images/bg05.jpg)")
})
















