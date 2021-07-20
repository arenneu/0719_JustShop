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

    // MultiTap 시작
        // 탭버튼
    $("#bbs button").click(function(){
        $("#bbs button").removeClass("selected");
        $(this).addClass("selected");
        // 탭 콘텐츠
        var dataLink = $(this).attr("data-link");
        $("#bbs .tabContents").css({"display":"none"});
        $("#" + dataLink).css({"display":"block"});
    });
        
    // MultiTap 끝

    // 레이어 팝업 시작
    $("tr#popupPoint").click(function(){
        $("div#layerBG").css({"display":"block"});
    });

    $("#closeBtnArea>button").click(function(){
        $("div#layerBG").css({"display":"none"});
    });
    // 레이어 팝업 끝

});
