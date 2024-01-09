// 이미지 슬라이드
$(document).ready(function(){
    
    $(".main").hover(function(){
        $(".sub li,.band").stop().slideDown();
    }, function(){
        $(".sub li,.band").stop().slideUp();
    });

});