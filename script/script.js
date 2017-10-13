$(document).ready(function () {
    $("nav a").click(function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
    
    $("#menu_btn").click(function() {
        $("nav ul").toggleClass("open_menu");
    });
    
    $("nav a").click(function() {
        $('nav ul').removeClass("open_menu");
    });
    
    
});
