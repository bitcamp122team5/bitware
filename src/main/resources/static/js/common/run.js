/* 사이드메뉴 */
window.onload=function(){
	var toggleCheck = document.getElementById("toggleCheck").value;
	if(toggleCheck=="toggleOn"){
		$("#toggleOpenCheck").click();
	}
};
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
							success: function(memberList){
								var str = "";
								for(var i in memberList){
									if(memberList[i].teamName==null){
										str += "<li class='memberByDept' value='"+memberList[i].memId+"'>"+"<p>"+memberList[i].ranks+"</p>"+memberList[i].memName+"</li>";
									}else{
										str += "<li class='memberByDept' value='"+memberList[i].memId+"'>"+"<p>"+memberList[i].teamName+" "+memberList[i].ranks+"</p>"+memberList[i].memName+"</li>";
									}
								}
								$("#memberByDepartment li").remove();
								$("#memberByDepartment").append(str);
								
								$(".memberByDept").click(function(){
									var memId = $(this).attr('value');
									var url = "/user/chat?memId=" + memId;
									var name = "chatPopup";
									var option = "width=500, height=500, top=100, left=200, location=no"
									window.open(url, name, option);
								})
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