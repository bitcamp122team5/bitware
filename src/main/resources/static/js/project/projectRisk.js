
/*위험관리대장 삭제 컨펌*/
function deleteProjectRisk(){
	var comfirmChk = confirm("위험관리대장을 삭제하시겠습니까?");
	var rskCode = $("#rskCode").val();
	if(comfirmChk){
		location.href="/user/deleteProjectRisk?rskCode="+rskCode;
	}
}

/*위험관리대장 글 작성 취소 컨펌*/
function cancelInsertProjectRisk(){
	var confirmChk = confirm("위험관리대장 작성을 취소하시겠습니까?");
	
	if(confirmChk){
		location.href="/user/selectProjectRiskList";
	}
}

/*수정 정규식 체크 후 submit*/
function updateProjectRisk(){
	var rskTitle = $("#rskTitle").val();
	var rskContent = $("#rskContent").val();
	var rskSolution = $("#rskSolution").val();
	var rskResult = $("#rskResult").val();
	
	if(rskTitle == ''){
		alert("위험관리 제목을 입력해주세요");
		return false;
	}else if(rskContent == ''){
		alert("위험관리 내용을 입력해주세요");
		return false;
	}else if(rskSolution == ''){
		alert("위험관리 해결방안을 입력해주세요");
		return false;
	}else if(rskResult == ''){
		alert("위험관리 처리결과를 입력해주세요");
		return false;
	}
	
	$("#updateProjectRiskUpdateForm").submit();
}

/*작성 정규식 체크 후 submit*/
function insertProjectRisk(){
	var rskTitle = $("#rskTitle").val();
	var rskContent = $("#rskContent").val();
	var rskSolution = $("#rskSolution").val();
	var rskResult = $("#rskResult").val();
	
	if(rskTitle == ''){
		alert("위험관리 제목을 입력해주세요");
		return false;
	}else if(rskContent == ''){
		alert("위험관리 내용을 입력해주세요");
		return false;
	}else if(rskSolution == ''){
		alert("위험관리 해결방안을 입력해주세요");
		return false;
	}else if(rskResult == ''){
		alert("위험관리 처리결과를 입력해주세요");
		return false;
	}
	
	$("#insertProjectRiskUpdateForm").submit();
}


