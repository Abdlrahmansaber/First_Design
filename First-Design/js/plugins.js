
/*global $, alert, console*/
$(document).ready( function(){
	'use strict';

	$(".navbar .links ul li a").click(function() {
		$(this).parent().addClass("active").siblings().removeClass("active");
	});

	//Adjust HeaderHeight
	var myHeader=$(".header");
	myHeader.height($(window).height());

	$(window).resize(function(){
		myHeader.height($(window).height());
	});



	//adjust slider make th item center

	//Smooth scroll to Div
	$(".navbar .links ul li a").click(function(){
		$("html , body").animate({
			scrollTop:$("#" + $(this).data("value")).offset().top
		} , 1000);
	});



		//Trigger mixitup

		 $('#container').mixItUp();


		//Trigger niceScroll

		 $("html").niceScroll({
		 	cursorcolor:'#1abc9c' ,
		 	cursorwidth:'10px',
		 	cursorborder:'1px solid #1abc9c'
		 });



		 //start Scroll Top
		var scrollbutton = $("#scroll-top")

		$(window).scroll(function(){

			if($(this).scrollTop() >= 700)
			{
				scrollbutton.fadeIn(1500);
			}
			else
			{
				scrollbutton.fadeOut(1500);
			}

		});
			scrollbutton.click(function(){
			$("html , body").animate({ scrollTop : 0 } ,  800);
			});
		//header 
		//gear-check
		$(".gear-check").click(function(){
		$(".color-option").fadeToggle(1000);
});

	//change theme color for list
	var colorLi = $(".option-box .color-option ul li");
	colorLi 
	.eq(0).css("backgroundColor" , "#d816b6" ).end()
	.eq(1).css("backgroundColor" , "#1bd8d1" ).end()
	.eq(2).css("backgroundColor" , "#009fff" ).end()
	.eq(3).css("backgroundColor" , "#1abc9c" );
	
	colorLi.click(function(){
		$("link[href*='theme']").attr("href" , $(this).attr("data-value"));
	});


		$(".products ul li ").click(function() {
		$(this).parent().addClass("selected").siblings().removeClass("selected");
	});
});