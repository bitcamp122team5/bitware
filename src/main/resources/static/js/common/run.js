/* 사이드메뉴 */
$(function(){
	$(".aside_con .dep1.have").click(function(){
		$(this).toggleClass("on");
	});
});

/* 채팅 아코디언  */
$(function(){
	$(".chat_wrap button").click(function(){
		$(this).toggleClass("on");
		if($(this).hasClass("on") == true){			
			$(this).siblings().children().children('.tab').css("display","block").animate({"width":"100px"},500);
			
			$(".tab").click(function(){
				$(".info").css("display","block").animate({"width":"300px"},500);
			});
			
		}else{
			$(this).siblings().children().children('.tab').css("display","none").animate({"width":"0"},1000);
			$(".info").css("display","none").animate({"width":"0"},500);
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
							success: function(memberList){
								var str = "";
								for(var i in memberList){
									str += "<li class='memberByDept' value='"+memberList[i].memName+"'>"+"<p>"+memberList[i].teamName+" "+memberList[i].ranks+"</p>"+memberList[i].memName+"</li>";
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
});

/*function personBtn(){
	var deptName = $(this).attr("value");
	alert(deptName);
	$.ajax({
		url: "/user/chatMemberListByDepartmentAjax",
		data: {deptName:deptName},
		datatype: "json",
		success: function(memberList){
			var str = "";
			for(var i in memberList){
				str += "<li class='memberByDept' value='"+memberList[i].memName+"'>"+memberList[i].memName+"</li>";
			}
			$("#memberByDepartment").append(str);
		}
	});
};*/
	

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