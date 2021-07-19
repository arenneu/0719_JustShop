// eslint-disable

$(function(){

    // GNB 메뉴 시작 
    $(".mainLi").mouseover(function(){
        $(".subMenu").stop().slideDown(300);
    });

    $(".mainLi").mouseout(function(){
        $(".subMenu").stop().slideUp(300);
    });
    // GNB 메뉴 끝

    // SlideShow 시작
    setInterval(fnSlide,3000);
    function fnSlide(){
    $("#shuttleFrame").animate(
        {"margin-top":"-300px"},
        1000,
        function(){
            $("#shuttleFrame a:first-child")
            .insertAfter("#shuttleFrame a:last-child");
            $("#shuttleFrame").css({"margin-top":"0"});
        }
    );
}
    // SlideShow 끝
});
