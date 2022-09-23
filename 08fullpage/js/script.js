$("#fullpage").fullpage({
    menu:".menu_list",
    anchors:["m1st","m2st","m3st","m4st","m5st","m6st","m7st","m8st"],
    navigation:true,
    // navigationPosition:"fp-right",
    navigationTooltips:["first","second","third","forth","fifth","sixth","seven","eight"],
    responsiveWidth:900,
    afterLoad:function(anchorslink,index){
        console.log(anchorslink,index);
        if(index == 1){
           
        }else{
            $(".page1 .txtWrap").removeClass("move")
        }
        if(index == 2){
            $(".page2 .txtWrap").addClass("move")
        }else{
            $(".page2 .txtWrap").removeClass("move")
        }
        if(index == 3){
            $(".page3 .wrap").addClass("move")
        }else{
            $(".page3 .wrap").removeClass("move")
        }
       
        
    }
})

$(".toggle").click(function(){
    $(".toggle_menu").css("display","block")
    $(".modal_wrap").css("display","block")
     
})

$(".toggle_close").click(function(){
    $(".toggle_menu").css("display","none")
    $(".modal_wrap").css("display","none")
})



$(".btn_down").click(function(){
    $(".rev_pop").css("display","block")
    $(".modal_wrap").css("display","block")
     
})

$(".rev_pop_close").click(function(){
    $(".rev_pop").css("display","none")
    $(".modal_wrap").css("display","none")
})





$(".gift").click(function(){
    $(".modal_wrap").css("display","block")
    $(".modal_wrap .gift_pop").css("display","block")
})

$(".gift_close").click(function(){
    $(".modal_wrap").css("display","none")
    $(".modal_wrap .gift_pop").css("display","none")
    
})

$(".modal_wrap").click(function(){
    $(".modal_wrap").css("display","none")
    $(".toggle_menu").css("display","none")
    $(".modal_wrap .gift_pop").css("display","none")
    $(".rev_pop").css("display","none")
})


// new ClipboardJS(".url_copy")
let btns = document.querySelectorAll('.url_copy');
let clipboard = new ClipboardJS(btns);

clipboard.on('success', function(e) {
  console.log(e);
  if("success"=="success"){
    alert("주소가 복사 되었습니다.")
  }else{
    alert("error")
  }
});

clipboard.on('error', function(e) {
  console.log(e);
  
});











   





