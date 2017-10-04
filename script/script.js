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
	
	$("#wds_btn").click(function(){
		$("#wds_btn").toggleClass("btn_toggle_wds");
		$(".wds").toggle('blind');
				
	});
	
	$("#wdv_btn").click(function(){
		$("#wdv_btn").toggleClass("btn_toggle_wdv");
		$(".wdv").toggle('blind');
		
	});
	
	$(".ett").click(function(){
		$(".een").find(".lid_text").toggle('fade');
		$(".een").next().removeClass("persoon_toggle");
		$(".een").toggleClass("persoon_toggle");
		$(".een").find(".lid h2").toggle('blind');
		$(".een").find(".lid img").toggleClass("persoon_img_toggle");
		$(".portfolio_een").hide('blind');
		$(".portfolio").removeClass("portfolio_toggle");
	});
	
	$(".tva").click(function(){
		$(".twee").find(".lid_text").toggle('fade');
		$(".twee").next().removeClass("persoon_toggle");
		$(".twee").toggleClass("persoon_toggle");
		$(".twee").find(".lid h2").toggle('blind');
		$(".twee").find(".lid img").toggleClass("persoon_img_toggle");
		$(".portfolio_twee").hide('blind');
		$(".portfolio").removeClass("portfolio_toggle");
		
		$(".een").toggleClass("m33");
	});
	
	$(".tre").click(function(){
		$(".drie").find(".lid_text").toggle('fade');
		$(".drie").next().removeClass("persoon_toggle");
		$(".drie").toggleClass("persoon_toggle");
		$(".drie").find(".lid h2").toggle('blind');
		$(".drie").find(".lid img").toggleClass("persoon_img_toggle");
		$(".portfolio_drie").hide('blind');
		$(".portfolio").removeClass("portfolio_toggle");
		
		$(".een").toggleClass("m66");
		$(".twee").toggleClass("m33");
	});
	
	$("#btn_alpay").click(function(){
		$(".portfolio").toggleClass("portfolio_toggle");
		$("#portfolio_alpay").toggle('blind');
	});
	
	$("#btn_sam").click(function(){
		$(".portfolio").toggleClass("portfolio_toggle");
		$("#portfolio_sam").toggle('blind');
	});
	
	$("#btn_wouter").click(function(){
		$(".portfolio").toggleClass("portfolio_toggle");
		$("#portfolio_wouter").toggle('blind');
	});
	
	$("#btn_andy").click(function(){
		$(".portfolio").toggleClass("portfolio_toggle");
		$("#portfolio_andy").toggle('blind');
	});
	
	$("#btn_kevin").click(function(){
		$(".portfolio").toggleClass("portfolio_toggle");
		$("#portfolio_kevin").toggle('blind');
	});
	
	$("#btn_thom").click(function(){
		$(".portfolio").toggleClass("portfolio_toggle");
		$("#portfolio_thom").toggle('blind');
	});
});
