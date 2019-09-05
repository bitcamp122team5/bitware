// swal은 sweetalert.js에서 파생. alert 대신 쓰는 것. 경고창 url을 없애주고 ui가 깔끔

// 프로젝트 생성 폼
function insertProjectForm() {
	$("#insertProjectForm").modal();
}

// 프로젝트 생성
function insertProject() {
	var prjName = $('#prjName').val();
	var prjStart = $('#prjStart').val();
	var prjEnd = $('#prjEnd').val();
	var prjDeposit = $('#prjDeposit').val();
	var prjWorkingExpenses = $('#prjWorkingExpenses').val();
	var prjMothercompany = $('#prjMothercompany').val();
	var start = new Date(prjStart);
	var end = new Date(prjEnd);
	var memIdChk = $("input[class='checkBoxArr']:checked").length;
	
	
	if(prjName == ''){
		swal('프로젝트명', '프로젝트명을 입력해주세요');
		return false;
	}else if(prjName.length > 33){
		swal('프로젝트명', '길이 제한을 벗어났습니다');
		return false;
	}else if(prjDeposit == ''){
		swal('계약금', '계약금을 입력해주세요');
		return false;
	}else if(prjWorkingExpenses == ''){
		swal('사업비', '사업비을 입력해주세요');
		return false;
	}else if(prjStart == ''){
		swal('시작일', '시작일을 입력해주세요');
		return false;
	}else if(prjEnd == ''){
		swal('종료일', '종료일을 입력해주세요');
		return false;
	}else if(end.getTime()-start.getTime() < 0){
		swal('프로젝트 기간', '시작일이 종료일보다 늦습니다');
		return false;
	}else if((((end.getTime()-start.getTime())/(1000*60*60*24)))+1 > 4000){
		swal('프로젝트 기간', '4000일 초과입니다.');
		return false;
	}else if(prjMothercompany == ''){
		swal('마더업체', '마더업체를 입력해주세요');
		return false;
	}else if(memIdChk < 1 ){
		swal('참여인원을 선택해주세요');
		return false;
	}
	$('#frmInsertProjcet').submit();
}

/*프로젝트 정보 수정 모달 팝업*/
function projectUpdateModal() {
	$('#projectUpdateModal').modal();
}

/*프로젝트 정보 수정 */
function updateProject() {
	var prjName = $('#prjName').val();
	var prjStart = $('#prjStart').val();
	var prjEnd = $('#prjEnd').val();
	var prjDeposit = $('#prjDeposit').val();
	var prjWorkingExpenses = $('#prjWorkingExpenses').val();
	var prjMothercompany = $('#prjMothercompany').val();
	var start = new Date(prjStart);
	var end = new Date(prjEnd);
	
	//var prjCode = $('#prjCode').val();
	if(prjName == ''){
		swal('프로젝트명', '프로젝트명을 입력해주세요');
		return false;
	}else if(prjName.length > 33){
		swal('프로젝트명', '길이 제한을 벗어났습니다');
		return false;
	}else if(prjDeposit == ''){
		swal('계약금', '계약금을 입력해주세요');
		return false;
	}else if(prjWorkingExpenses == ''){
		swal('사업비', '사업비을 입력해주세요');
		return false;
	}else if(prjStart == ''){
		swal('시작일', '시작일을 입력해주세요');
		return false;
	}else if(prjEnd == ''){
		swal('종료일', '종료일을 입력해주세요');
		return false;
	}else if(end.getTime()-start.getTime() < 0){
		swal('프로젝트 기간', '시작일이 종료일보다 늦습니다');
		return false;
	}else if((((end.getTime()-start.getTime())/(1000*60*60*24)))+1 > 4000){
		swal('프로젝트 기간', '4000일 초과입니다.');
		return false;
	}else if(prjMothercompany == ''){
		swal('마더업체', '마더업체를 입력해주세요');
		return false;
	}
	$('#frmUpdateProjcet').submit();
}

/*프로젝트 참여인원 확인 리스트 모달 팝업 */
function projectAttendMemberModal() {
	$("#projectAttendMemberModal").modal();
}

/*프로젝트 참여인원 추가 모달 팝업 */
function insertProjectAttendMemberModal() {
	$("#insertProjectAttendMemberModal").modal();
}

/*참여인원 추가 체크박스 전체 체크 기능 */
$(function(){
	$("#allCheckBox").click(function(){
		var chk = $('#allCheckBox').prop("checked");
		if(chk){
			$(".checkBox").prop("checked",true);
		}else{
			$(".checkBox").prop("checked",false);
		}
	});	
})

/*참여인원 추가 체크 박스 개별 체크 기능 */
$(function(){
	$(".checkBox").click(function(){
		$("#allCheckBox").prop("checked",false);
	});	
})

/*참여인원 삭제 모달*/
function deleteProjectAttendMember(){
	if($('#sessionRanks').val() == "부장" && $('#sessionDeptName').val() == "개발부"){
		var confirm_val = confirm("인원을 삭제하시겠습니까?");
		if(confirm_val){
			var memId = $('#memId').val();
			var prjCode = $("#prjCode").val();
			$.ajax({
				url:"/user/deleteProjectAttendMember",
				type:"post",
				data:{
					memId : memId,
					prjCode : prjCode
				},
				success:function(){
					alert("해당 인원이 삭제 됐습니다.");
					location.href="/user/projectDetail?prjCode="+prjCode;
				}
			});
		}
	}else if($('#sessionRanks').val() == "사장" || $('#sessionRanks').val() == "이사" ){
		var confirm_val = confirm("인원을 삭제하시겠습니까?");
		if(confirm_val){
			var memId = $('#memId').val();
			var prjCode = $("#prjCode").val();
			$.ajax({
				url:"/user/deleteProjectAttendMember",
				type:"post",
				data:{
					memId : memId,
					prjCode : prjCode
				},
				success:function(){
					alert("해당 인원이 삭제 됐습니다.");
					location.href="/user/projectDetail?prjCode="+prjCode;
				}
			});
		}
	}else{
		alert("인원을 삭제할 권한이 없습니다.");
	}
}


/*프로젝트 삭제 */
function deleteProjectAjax(){
	var confirm_val = confirm("프로젝트를 삭제하시겠습니까?");
	if(confirm_val){
		var prjCodeArr = new Array();
		
		$("input[class='checkBox']:checked").each(function(){
			prjCodeArr.push($(this).val());
		})
		
		$.ajax({
			url:"/user/deleteProjectAjax",
			type:"post",
			data:{
				prjCodeArr : prjCodeArr
			},
			success:function(){
				alert("프로젝트가 삭제 되었습니다.");
				location.href="redirect:/user/selectEndProjectList";
			}
		});
	}
	
}
///*참여인원 추가 (추가사항) */
//function insertProjectAttendMembers(){
//	var confirm_val = confirm("선택을 완료하시겠습니까?");
//	if(confirm_val){
//		var checkBoxArr = new Array();
//		$("input[class='checkBox']:checked").each(function(){
//			checkBoxArr.push($(this).val());
//		})
//		var prjCode = $("#prjCode").val();
//		$.ajax({
//			url:"/user/insertProjectAttendMembers",
//			type:"post",
//			data:{
//				checkBoxArr:checkBoxArr,
//				prjCode:prjCode
//			},
//			success:function(){
//				location.href="/user/projectDetail?prjCode="+prjCode;
//			}
//		});
//	}
//}

/*직급에 따라 프로젝트 생성, 삭제, 완료 / 참여인원 추가 버튼 show or hide*/
$(function(){
	if($('#sessionRanks').val() == "부장" && $('#sessionDeptName').val() == "개발부"){
		$('#completeProjectBtn').show();
		$('#insertProjectBtn').show();
		$('#deleteProjectBtn').show();
		$('#updateProjectBtn').show();
		$('#projectAttendMembersBtn').show();
	}else if($('#sessionRanks').val() == "사장" || $('#sessionRanks').val() == "이사" ){
		$('#completeProjectBtn').show();
		$('#insertProjectBtn').show();
		$('#deleteProjectBtn').show();
		$('#updateProjectBtn').show();
		
	}else{
		$('#completeProjectBtn').hide();
		$('#insertProjectBtn').hide();
		$('#deleteProjectBtn').hide();
		$('#updateProjectBtn').hide();
		$('#projectAttendMembersBtn').hide();
	}
})

//배열로 반환한다.
function byNameArrays(data) {
	var dataArray = new Array();
	for(var i=0; i<data.length; i++) {
		dataArray[i] = data[i].value;
	}
	return dataArray;
}

//$(function(){
//	var buttons = byNameArrays(document.getElementsByName("btnChk"));
//	alert(buttons.length);
//	if($('#sessionRanks').val() == "부장" && $('#sessionDeptName').val() == "개발부"){
//		for(var i=0; i<buttons.length ; i++){
//			buttons[i].css('display: block;');
//			}
//		}else if($('#sessionRanks').val() == "사장" || $('#sessionRanks').val() == "이사" ){
//		for(var i=0; i<buttons.length; i++){
//			buttons[i].css('display: block;');
//		}
//	}else{
//		for(var i=0; i<buttons.length; i++){
//			buttons[i].css('display: none;');
//		}
//	}
//	
//})
/*프로젝트 완료 처리*/
function completeProject(){
	var confirm_val = confirm("프로젝트를 완료 처리 하시겠습니까?");
	if(confirm_val){
		$("#completeProjectFrm").submit();
	}
}


//$(function(){
//	var prjCode = new Array();
//	var list = {};
//	
//	$('#pmPrjCode').each(function(){
//		prjCode.push($(this).val());
//	})
//	
//	$.ajax({
//		type: "post",
//		url: "selectProjectPMName",
//		data: { prjCode : prjCode },
//		success: function(members){
//			if(members.lenght != 0){
//				list.cnt = members.length;
//				list.names = new Array();
//				alert(list.cnt);
//				$.each(members, function(i, MemberDto){
//					list.names[i] = MemberDto.memName;
//				});
//				for(var i=0; i<list.cnt; i++){
//					$('#pmNames').each(function(i){
//						$(this).text(list.names[i]);
//					});
//				}
//			}
//		}
//	});
//});
//참여인원 선택 생성 폼
//function selectProjectMember() {
//	$("#memberForm").modal();
//}

//function selectProjectMemberListAjax() {
//
//	$.ajax({
//		type: "post",
//		url: "/selectProjectMemberListAjax",
//		data: {},
//		dataType: 'text',
//		
//		error:function(request,status,error){
//		    alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);}
//		
//		});
//	
//}
