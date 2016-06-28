// 首页列表样式IE8兼容
$(document).ready(function() { 
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") {
			$(".col-1-3-wrap").find(".col-1-3:last").find(".item-1-3").css("border-right","none");
			$(".col-1-3-wrap:last").find(".col-1-3").find(".item-1-3").css("border-bottom","none");
			$(".col-1-5-wrap").find(".col-1-5:last").find(".item-1-5").css("border-right","none");
	}
}); 