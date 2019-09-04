/* 사이드메뉴 */
$(function(){
	$(".aside_con .dep1.have").click(function(){
		$(this).toggleClass("on");
	});
});

/* 채팅 아코디언  */
$(function(){
	$(".chat_wrap button").siblings(".chat_inner").css("width","0px");
	
	$(".chat_wrap button").click(function(){
		$(".chat_wrap button").toggleClass("on");
		if($(".chat_wrap button").hasClass("on") == true){
			$(".chat_wrap button").siblings(".chat_inner").animate({"width":"400px"});
		}else{
			$(".chat_wrap button").siblings(".chat_inner").animate({"width":"0px"});
		}
	});
});

//tab 
$(function(){   
    $(".tab > ul li").click(function(){
        var now_tab = $(this).index();
        $(this).parent().find("li").removeClass("on");
        $(this).parent().parent().parent().find(".info").addClass("hidden");
        $(this).parent().find("li").eq(now_tab).addClass("on");
        $(this).parent().parent().parent().find(".info").eq(now_tab).removeClass("hidden");
    });
});