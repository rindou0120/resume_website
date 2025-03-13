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