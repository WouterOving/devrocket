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
    
    //active links on scroll
    
    $(window).scroll(function() {
        
        if( $(this).scrollTop() > $("#header").height() + (-61) ) {
            $("#over").addClass("active");
            $("#port, #cont").removeClass("active");
        }
        else {
            $("#over").removeClass("active");
        }
        
        if( $(this).scrollTop() > $("#about").height() + $("#header").height() + (-61) ) {
            $("#port").addClass("active");
            $("#cont, #over").removeClass("active");
        }
        else {
            $("#port").removeClass("active");
        }
        
        if( $(this).scrollTop() > $("#about").height() + $("#header").height() + $("#portfolio").height() + (-61) ) {
            $("#cont").addClass("active");
            $("#port, #over").removeClass("active");
        }
        else {
            $("#cont").removeClass("active");
        }
        
    });
    
    
    
    // responsive menu
    
    $("#menu_btn").click(function() {
        $("nav ul").toggleClass("open_menu");
    });
    
    $("nav a").click(function() {
        $('nav ul').removeClass("open_menu");
    });
    
    
    
    //porfolio slide down
    
    $(".port_btn p:nth-child(1)").click(function() {
        $(".portfolio").css({
            maxHeight: "100vw"
        })
        $(this).hide();
        $(".port_btn p:nth-child(2)").show();
    });
    
    $(".port_btn p:nth-child(2)").click(function() {
        $(".portfolio").css({
            maxHeight: "25vw"
        })
        $(this).hide();
        $(".port_btn p:nth-child(1)").show();
    });
    
    
});
