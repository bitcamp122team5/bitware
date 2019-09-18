/* 사이드메뉴 */
window.onload=function(){
	var toggleCheck = document.getElementById("toggleCheck").value;
	if(toggleCheck=="toggleOn"){
		$("#toggleOpenCheck").click();
	}
};
$(function(){
	$(".aside_con .dep1.have").click(function(){
		$(this).removeClass("on");
		$(this).toggleClass("on");
	});
});

$(function(){
	$(".aside_con .dep1 a").click(function(e){
	$(this).parent().toggleClass('on');
	$(this).parent().siblings('li').removeClass('on');
	if($(this).parent().hasClass('have')){
		e.preventDefault();
		$(this).addClass('on');
		$('.dep2ul').addClass('on');
	}
	});
});

$(window).load(function(){
  var url_pathname = window.location.pathname;
    var url_search = window.location.search;
    var url = url_pathname +  url_search;
     $(".aside_con .dep2ul li a").each(function(){
//      $(this).parent().parent().removeClass("active");
      $(this).removeClass('active');
      if ($(this).attr("href") == url ){
      $(this).addClass("active");
      $(this).parent().parent().addClass("active");
      }
  });   
});

/* 전체페이지 autocomplete off */
$(document).ready(function(){
    $( document ).on( 'focus', ':input', function(){
        $( this ).attr( 'autocomplete', 'off' );
    });
});

/* 채팅 아코디언  */
$(function(){
	$(".btn_chat").bind("click", function(){
		if($(this).data("dragging")) return;
		
		$(this).toggleClass("on");
		if($(this).hasClass("on") == true){
			$(this).parent(".chat_inner").css("transform","translateX(-100px)");	
			$(".tab").click(function(){
				$(this).parent().parent(".chat_inner").css("transform","translateX(-300px)");
			});
			
		}else{
			$(this).parent(".chat_inner").css("transform","translateX(0px)");
			$(this).parent().parent(".chat_inner").css("transform","translateX(0px)");
		}
		
		$.ajax({
			url: "/user/chatDepartmentListAjax",
			data: {},
			datatype: "json",
			success: function(departmentList){
				var str = "";
				for(var i in departmentList){
					str += "<li class='person' value='"+departmentList[i].deptName+"'><a href='#dep"+(Number(i)+1)+"'>"+departmentList[i].deptName+"</a></li>";
				}
				$("#department li").remove();
				$("#department").append(str);
				
				$(function(){
					$('.person').bind('click',function(){
						var deptName = $(this).attr("value");
						$.ajax({
							url: "/user/chatMemberListByDepartmentAjax",
							data: {deptName:deptName},
							datatype: "json",
							success: function(list){
								var str = "";
								for(var i in list){
									if(list[i].content==null){
										list[i].content="";
									}
									if(list[i].member.teamName==null){
										str += "<li class='memberByDept' value='"+list[i].member.memId+"'>"+"<p>"+list[i].member.ranks+"</p>"+list[i].member.memName+"<p>"+list[i].content+"</p></li>";
									}else{
										str += "<li class='memberByDept' value='"+list[i].member.memId+"'>"+"<p>"+list[i].member.teamName+" "+list[i].member.ranks+"</p>"+list[i].member.memName+"<p>"+list[i].content+"</p></li>";
									}
								}
								$("#memberByDepartment li").remove();
								$("#memberByDepartment").append(str);
								
								$(".memberByDept").click(function(){
									var memId = $(this).attr('value');
									var url = "/user/chat?memId=" + memId;
									var name = "chatPopup";
									
									var popupX=(document.body.offsetWidth/2) - (500/2);
									var popupY=(document.body.offsetHeight/2) - (700/2);
									
									var options = "width=500, height=700, scrollbars, resizable, toolbar=2, left="+popupX+", top="+popupY;
									window.open(url, name, options);
								})
							}
						});
					});
				});
			}
		})
		
	});
	$( ".btn_chat" ).draggable({
		containment:".chat_inner",
		axis:"y",
		start: function(event, ui){
			$(this).data("dragging", true);
		},
		stop: function(event, ui){
			setTimeout(function(){
				$(event.target).data("dragging", false);
			}, 1);
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

//$(function(){ 
//	setInterval(function(){
//		$.ajax({
//			url:"/user/checkChatAlert",
//			data:{},
//			success:function(msg){
//				if(msg!=""){
//					alert(msg);
//				}
//			}
//		});
//	}, 1000);
//});