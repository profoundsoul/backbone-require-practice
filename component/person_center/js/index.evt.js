// 首页轮播
$('.banner').unslider({
	autoplay: true ,
	arrows: false,
	infinite: true,
	dots: true,
});




$(function(){

	//elevator fix

	function elevatorFix(){
	var marginL = $(".common_w1220").css('margin-left');
	    $(".elevator").css('left',marginL);
	}
	$(document).ready(function(){elevatorFix()});
	window.onresize = function(){elevatorFix()};

	// show elevator
	function showElevator(){
		var t_offset = $('#h-set').offset().top;
		$(window).scroll(function(){
		var s=$(window).scrollTop();
		if(s>t_offset){
		    $('.elevator').show();
		}else{
			$('.elevator').hide();
		}
		});
	}
	showElevator();

	//click elevator


	var floors = $('.js_floor').length;
	
	for(i=0;i<floors;i++){
		(function(i){
			var floorsoffset = $('.js_floor').eq(i).offset().top-274;
			$('.elevator li').eq(i).click(function(){
		 		$('html,body').stop().animate({scrollTop:floorsoffset}, 500);
		 	})
		})(i)
	}

	//backtotop
	$('.js_gotop').click(function(){
		$('html,body').stop().animate({scrollTop:0}, 500);
	})
})


