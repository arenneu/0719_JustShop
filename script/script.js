/* eslint-disable */

$(function () {

    /* gnb 메뉴 영역 */

    $("li.mainLi").mouseover(function () {
        $("ul.subMenu").show();
    });

    $("li.mainLi").mouseout(function () {
        $("ul.subMenu").hide();
    });

    /* gnb 메뉴 영역 */

    /* 슬라이드쇼 영역 */

    setInterval(fnslide, 5000);

    function fnslide() {

        $("#shuttleFrame").animate({
                "margin-top": "-300px"
            },
            3000,
            function () {
                $("#shuttleFrame>a:nth-child(1)")
                    .insertAfter("#shuttleFrame>a:nth-child(3)");
                $("#shuttleFrame").css({
                    "margin-top": "0px"
                });
            });
    }

    /* 슬라이드쇼 영역 */

    /* 탭버튼 구현 */

    $("button.tabBtn").click(function () {
        $("button.tabBtn").css({
            "border": "1px solid #c9adb1",
            "background-color": "#c9adb1",
        });
        
        $(this).css({
            "border-bottom-color": "#fff",
            "background-color": "#fff"
        });
    
        $("div.tabContents").css({"display":"none"});
        
        var datalink = $(this).attr("data-link");
        $("#"+datalink).css({"display": "block"});
        
    });



    /* 탭버튼 구현 */

    /* 팝업버튼 구현 */

    $("#popPoint").click(function () {
        $("#popupBG").css({
            "display": "block"
        });
    });

    $("#closeBtn").click(function () {
        $("#popupBG").css({
            "display": "none"
        });
    });

    /* 팝업버튼 구현 */

});
