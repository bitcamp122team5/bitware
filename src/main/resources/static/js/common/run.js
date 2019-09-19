/* 사이드메뉴 */
$(function(){
	$(".aside_con .dep1 a").click(function(e){

	$('.dep2ul').removeClass('active');
	if($(this).parent().hasClass('have')){
		e.preventDefault();
		$(this).siblings('.dep2ul').removeClass('active');
		$(this).siblings('.dep2ul').addClass('active');
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
									if(list[i].count!=0){
										if(list[i].member.teamName==null){
											str += "<li class='memberByDept' value='"+list[i].member.memId+"'>"+"<p>"+list[i].member.ranks+"</p>"+list[i].member.memName+"<p>"+list[i].content+"</p><span align='right'>"+list[i].count+"</span></li>";
										}else{
											str += "<li class='memberByDept' value='"+list[i].member.memId+"'>"+"<p>"+list[i].member.teamName+" "+list[i].member.ranks+"</p>"+list[i].member.memName+"<p>"+list[i].content+"</p><span align='right'>"+list[i].count+"</span></li>";
										}
									}else{
										if(list[i].member.teamName==null){
											str += "<li class='memberByDept' value='"+list[i].member.memId+"'>"+"<p>"+list[i].member.ranks+"</p>"+list[i].member.memName+"<p>"+list[i].content+"</p></li>";
										}else{
											str += "<li class='memberByDept' value='"+list[i].member.memId+"'>"+"<p>"+list[i].member.teamName+" "+list[i].member.ranks+"</p>"+list[i].member.memName+"<p>"+list[i].content+"</p></li>";
										}
									}
								}
								$("#memberByDepartment li").remove();
								$("#memberByDepartment").append(str);
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
	
	$(document).on('click', '.memberByDept', function(){
		var memId = $(this).attr('value');
		var url = "/user/chat?memId=" + memId;
		var name = "chatPopup";
		
		var popupX=(document.body.offsetWidth/2) - (500/2);
		var popupY=(document.body.offsetHeight/2) - (700/2);
		
		var options = "width=500, height=700, scrollbars, resizable, toolbar=2, left="+popupX+", top="+popupY;
		var win = window.open(url, name, options);
		var interval = window.setInterval(function() {
			if (win == null || win.closed) {
				window.clearInterval(interval);
//		        closeCallback(win);
				$.ajax({
					url:"/user/deleteMap",
					data:{},
					success:function(data){
					}
				});
		    }
		}, 1000);

		$("#btn_chat_enter").click();
	})
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
