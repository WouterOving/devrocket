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
    
    $("#wds_btn").click(function() {
        if ($(this).parents().children('.portfolio-container').css('display') == 'none'){
            $(this).css({backgroundColor: '#FFCC33', color: '#000'}).parents().children('.portfolio-container').show('blind', 300).children('.wds-container').fadeIn(300);
            $('.wds-content').removeClass('wds-content-show');
            $('.wds-profile').show('blind', 300);
        }
        else{//display==block
            if($('.wds-container').css('display')=='block'){
                $(this).css({backgroundColor: '', color: ''}).parents().children('.portfolio-container').hide('blind', 300).children('.wds-container').fadeOut(300);
                $('.wds-content').removeClass('wds-content-show');
                $('.wds-profile').show('blind', 300);
            }  
            else{
                $('#wdv_btn').css({backgroundColor: '', color: ''});
                $('#wds_btn').css({backgroundColor: '#FFCC33', color: '#000'});
                $('.wdv-container').fadeOut(100);
                $('.wds-container').delay(100).fadeIn(300);
                $('.wds-content').removeClass('wds-content-show');
                $('.wds-profile').show('blind', 300);
            } 
        }
    });
    
    $("#wdv_btn").click(function() {
        if ($(this).css({backgroundColor: '#A133FF', color: '#fff'}).parents().children('.portfolio-container').css('display') == 'none'){
            $(this).parents().children('.portfolio-container').show('blind', 300).children('.wdv-container').fadeIn(300);
            $('.wdv-content').removeClass('wdv-content-show');
            $('.wdv-profile').show('blind', 300);
        }
        else{//display==block
            if($('.wdv-container').css('display')=='block'){
                $(this).css({backgroundColor: '', color: ''}).parents().children('.portfolio-container').hide('blind', 300).children('.wdv-container').fadeOut(300);
                $('.wdv-content').removeClass('wdv-content-show');
                $('.wdv-profile').show('blind', 300);
            }  
            else{
                $('#wds_btn').css({backgroundColor: '', color: ''});
                $('#wdv_btn').css({backgroundColor: '#A133FF', color: '#fff'});
                $('.wds-container').fadeOut(100);
                $('.wdv-container').delay(100).fadeIn(300);
                $('.wdv-content').removeClass('wdv-content-show');
                $('.wdv-profile').show('blind', 300);
            } 
        }
    });
    
    $('.wds-persoon').click(function(){
        $(this).parent().children('.wds-persoon').children('.wds-profile').toggle('blind', 300);
        $(this).children('.wds-content').toggleClass('wds-content-show');
    });
    $('.wdv-persoon').click(function(){
        $(this).parent().children('.wdv-persoon').children('.wdv-profile').toggle('blind', 300);
        $(this).children('.wdv-content').toggleClass('wdv-content-show');
    });
    
    
    
});
