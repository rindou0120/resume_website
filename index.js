$(window).on("scroll", function() {
    $(".box").each(function() {
        let triggerBottom = $(window).height() * 0.8; //觸發點設置
        let boxTop = $(this).offset().top - $(window).scrollTop();

        if (boxTop < triggerBottom) {
            $(this).addClass("show");
        } else {
            $(this).removeClass("show");
        }
    });
});

$(document).ready(function() {
    $(window).trigger("scroll"); // 初次執行
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

function openSmallWindow() {
    // 開啟小視窗，指定 URL 和視窗屬性
        window.open('https://1drv.ms/p/s!As0plJOKWki5g23V66gVE9CfM0hH?e=JiICPY', 'width=500,height=400,top=100,left=100');
    }
