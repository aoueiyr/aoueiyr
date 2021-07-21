/*layerpopup*/
//$(".pop").click(function(){
//    $(".layerbg").slideDown(200);
//    $(".layer").slideDown(200);
//});
//$(".close").click(function(){
//    $(".layerbg").slideUp(200);
//    $(".layer").slideUp(200);
//});

/*layerpopup*/
$(".pop").click(function(){
    $(".layerbg").show();
    $(".layer").show(200);
});
$(".close").click(function(){
    $(".layerbg").hide();
    $(".layer").hide();
});

/*이미지 슬라이드(위아래)*/
//var currentindex = 0;

//setInterval(function(){
//    if(currentindex <2){
//        currentindex++;
//    } else {
//        currentindex=0
//    }
    
//    var slideposition = currentindex * (-300)+"px";
//    $(".slidelist").animate({top:slideposition},400);
//},3000);

/*이미지슬라이드(페이드)*/
//$(".slidelist").children("div:gt").hide();

//var current = 0;

//setInterval(function(){
//    var next = (current+1)%3;
//    $(".slidelist").find("div").eq(current).fadeOut();
//    $(".slidelist").find("div").eq(next).fadeIn();
//    current = next;
//},3000);

/*이미지슬라이드(좌우)*/
var currentindex = 0;

setInterval(function(){
    if(currentindex < 2){
        currentindex++;
    }else {
        currentindex=0
    }
    var slideposition = currentindex * (-1200)+"px";
    $(".slidelist").animate({left:slideposition},400);
},3000);

/*메뉴*/
$(".nav > ul > li").mouseover(function(){
    $(".nav > ul > li").find(".submenu").stop().slideDown(200);
    $(".menubg").stop().slideDown(200);
});
$(".nav > ul > li").mouseleave(function(){
    $(".nav > ul > li").find(".submenu").stop().slideUp(200);
    $(".menubg").stop().slideUp(200);
});

//패밀리사이트
$(".button").click(function{
        $(".sns > ul").fadeToggle('fast');          
   });
































