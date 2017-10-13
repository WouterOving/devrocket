$(document).ready(function () {
    
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        $('#background').css('top', -(scrollTop / 4) + 'px');
    });
    
    $("nav a").click(function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top + (-60)
        }, 500);
    });
    
    $("#menu_btn").click(function() {
        $("nav ul").toggleClass("open_menu");
    });
    
    $("nav a").click(function() {
        $('nav ul').removeClass("open_menu");
    });
    
    $(".port_btn i").click(function() {
        $(".portfolio").css({
            height: "auto"
        })
    });
    
    
});
