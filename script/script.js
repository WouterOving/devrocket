$(document).ready(function () {

    $("nav a").click(function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
    
    $("#menu_btn").click(function() {
        $("nav ul").toggle();
    })
    
    $("nav ul li a").click(function() {
        $("nav ul").hide();
    })
    
    $("html").scroll(function() {
        $("nav ul").hide();
    })

});
