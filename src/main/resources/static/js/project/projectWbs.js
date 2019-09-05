var baseData = {} // ProjectInfoDto
var subData = {} // List<ProjectWbsDto>


/*최초 ProjectWbs 화면 그리기 */
$(function(){
	
	// 기본데이터 저장 객체
	baseData = {
			start : $('#prjStart').val().split("-"),
			end : $('#prjEnd').val().split("-"),
			schedule : function() { //term 구하기. 날짜와 날짜로 일수 차이를 구하는 공식. [1]에서 -1 해주는 이유는 date객체의 월은 실제 월보다 1이 작기 때문
				var start = new Date(this.start[0], this.start[1]-1, this.start[2]);
				var end = new Date(this.end[0], this.end[1]-1, this.end[2]);
				return ((end.getTime() - start.getTime()) / (1000*60*60*24)) + 1;
			}
	}
	
	
	var prjCodes = $('#prjCode').val();

	$.ajax({
		url: '/user/selectProjectWbsListAjax',
		type: 'post',
		async: false,
		data: {
			prjCode : prjCodes
		},
		success: function(lists) {
			if(lists.length != 0){
				baseData.chk = true;
				subData.cnt = lists.length;
				subData.prjWorkName = new Array();
				subData.prjGroup = new Array();
				subData.prjStep = new Array();
				subData.prjDepth = new Array();
				subData.prjManager = new Array();
				subData.prjOutput = new Array();
				subData.prjWbsStart = new Array();
				subData.prjWbsEnd = new Array();
				subData.prjWorkCompletion = new Array();
				subData.prjTotalDays = new Array();
				$.each(lists, function(i, projectWbsDto){
					subData.prjWorkName[i] = projectWbsDto.prjWorkName;
					subData.prjGroup[i] = projectWbsDto.prjGroup;
					subData.prjStep[i] = projectWbsDto.prjStep;
					subData.prjDepth[i] = projectWbsDto.prjDepth;
					subData.prjManager[i] = projectWbsDto.prjManager;
					subData.prjOutput[i] = projectWbsDto.prjOutput;
					subData.prjWbsStart[i] = projectWbsDto.prjWbsStart;
					subData.prjWbsEnd[i] = projectWbsDto.prjWbsEnd;
					subData.prjWorkCompletion[i] = projectWbsDto.prjWorkCompletion;
					subData.prjTotalDays[i] = projectWbsDto.prjTotalDays;
					});
				}else{
					baseData.chk = false;
					swal("오류", "WBS가 생성되지 않았거나, WBS를 불러오던 중 오류가 발생했습니다.");
				}
			}
	});
	
	if(baseData.chk) {
		for(var i=0; i<subData.cnt; i++){
			$('#tbody').append(screenWriteTbody(i, subData.prjGroup[i], subData.prjStep[i], subData.prjDepth[i],
						subData.prjWorkName[i], subData.prjManager[i], subData.prjOutput[i], 
						subData.prjWbsStart[i], subData.prjWbsEnd[i], subData.prjWorkCompletion[i], subData.prjTotalDays[i]));
		}
		
		//WBS 진행률 통계
		WBSProgress();
	}
});
	
// 진행률 통계 구하기
function WBSProgress(){
	
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1
	var day = date.getDate();
	
	if(month < 10){
		month = "0"+month;
	}
	if(day < 10){
		day = "0"+day;
	}
	var today = year+"-"+month+"-"+day;
	
	//wbs항목들의 percent 값을 담을 배열 생성
	var percentArray = new Array();
	//분모 구하기 (WBS종료일 - WBS시작일)
	var denominator = new Array();
	//분자 구하기 (TODAY - WBS시작일)
	var molecule = new Array();
	//임시 배열 변수
	var tempNum = new Array();
	
	//분모 구하기 (WBS종료일 - WBS시작일) 
	for(var i=0; i<subData.cnt; i++){
		denominator[i] = dayCalculation(subData.prjWbsStart[i], subData.prjWbsEnd[i]);
	}
	
	//분자 구하기 (TODAY - WBS시작일)
	for(var i=0; i<subData.cnt; i++){
		molecule[i] = dayCalculation(subData.prjWbsStart[i], today);
	}
	//진행률 구하기
	for(var i=0; i<subData.cnt; i++){
		//alert('분자['+i+'] = '+molecule[i]);
		//alert('분모['+i+'] = '+denominator[i]);
		tempNum[i] = makeBaseRound((molecule[i] / denominator[i]) * 100);
		if(0 < tempNum[i] && tempNum[i] <= 100){
			percentArray[i] = tempNum[i];
		}else if(tempNum[i] > 100){
			percentArray[i] = 100;
		}else{
			percentArray[i] = 0;
		}
	}
	//진행률 입력
	for(var i=0; i<subData.cnt; i++){
			$('.progressList').each(function(i){
				$(this).text(percentArray[i]+'%');
			});
	}
}

//날짜 차이 일수 구하기
function dayCalculation(start, end){
	var tempStart = start.split("-");
	var tempEnd = end.split("-");
	
	var starts = new Date(tempStart[0], tempStart[1]-1, tempStart[2]);
	var ends = new Date(tempEnd[0], tempEnd[1]-1, tempEnd[2]);
	
	return ((ends.getTime() - starts.getTime()) / (1000*60*60*24)) + 1;
}

/*테이블 tbody 화면에 그리는 함수 (projectWbs 출력) */
function screenWriteTbody(num, group, step, depth, workName, manager, output, WbsStart, WbsEnd, workCompletion, totalDays) {
	var tag = new StringBuffer();
	
	// 텍스트 "null"이나 값의 null인 경우 대체해서 넣어 줄 텍스트
	var substitute = " ";
	
	// 담당자와 산출물   텍스트 "null" 이나 값의 null인지 체크 후 대체해주는 과정
	if(manager == "null" || manager == null){
		manager = substitute;
	}
	if(output == "null" || output == null){
		output = substitute;
	}
	tag.append("<tr id='"+num+"'>");
	tag.append("<td><input type='checkbox' name='chkVal' value='"+num+"'/></td>")
	tag.append("<td>");
	tag.append('<div class="dropdown">');
	tag.append('<button class="btn btn-info" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">');
	tag.append(numFormat(Number(num)+1));
	tag.append('</button>');
	tag.append('<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">');
	tag.append('<li><a onclick="createList('+num+')">목록추가</a></li>');
	tag.append('<li><a onclick="createChildList('+num+')">하위추가</a></li>');
	tag.append('<li><a onclick="createParentList('+num+')">상위추가</a></li>');
	tag.append('</ul></div>');
	tag.append("<input type='hidden' name='inPrjGroup' value='"+group+"'>");
	tag.append("<input type='hidden' name='inPrjStep' value='"+step+"'>");
	tag.append("<input type='hidden' name='inPrjDepth' value='"+depth+"'>");
	tag.append("<input type='hidden' name='workCompletion' value='"+workCompletion+"'>");
	tag.append("</td>");
	tag.append("<td style='overflow: hidden;'><input style='margin-left: "+(25*depth)+"px;' type='text' name='inPrjWorkName' value='"+workName+"'></td>");
	tag.append("<td><input type='date' name='wbsStart' value='"+WbsStart+"'></td>");
	tag.append("<td><input type='date' name='wbsEnd' value='"+WbsEnd+"'></td>");
	tag.append("<td><input type='text' name='inPrjManager' value='"+manager+"'></td>");
	tag.append("<td><input type='text' name='inPrjOutput' value='"+output+"'></td>")
	tag.append("<td class='progressList'>0%</td>");
	tag.append(totalDaysAnalysis(totalDays, baseData.schedule()));
	tag.append("</tr>");
	
	return tag.toString();
}

//숫자 5 -> 05 변경
function numFormat(num) {
	var str = ''+num;
	if(num<10 && str.indexOf('0') == -1) {
		str = '0'+num;
	}
	return str;
}

// 맨 처음 목록 생성
function createTopList(){
	if(baseData.chk){
		$('#tbody tr').attr('id', function(){
			return Number($(this).attr('id'))+1;
		}).find('input[name=chkVal]').attr('value', function(){
			return Number($(this).val()) + 1;
		}).end().find('input[name=inPrjGroup]').attr('value', function(){
			return Number($(this).val()) + 1;
		}).end().find('button').text(function(){
			return numFormat(Number($(this).text()) + 1);
		}).end().find('a').attr('onclick', function(){
			if($(this).attr('onclick').indexOf('createChildList') != -1){
				return 'createChildList('+$(this).parents("tr").attr("id")+')';
			}else if($(this).attr('onclick').indexOf('createParentList') != -1){
				return 'createParentList('+$(this).parents("tr").attr("id")+')';
			}else {
				return 'createList('+$(this).parents("tr").attr("id")+')';
			}
		});
	}
	$('#tbody').prepend(screenWriteTbody(0, 0, 0, 0, '', '', '', '', '', 0, ''));
	subData.cnt = $('#tbody tr').length;
	baseData.chk = true;
}

// 상위 추가
function createParentList(num){
	var myPrjGroup = $('#tbody tr:eq('+num+')').find('input[name=inPrjGroup]').val();
	var myPrjStep = $('#tbody tr:eq('+num+')').find('input[name=inPrjStep]').val();
	var myPrjDepth = $('#tbody tr:eq('+num+')').find('input[name=inPrjDepth]').val();
	
	var sumStep = 1;
	$('#tbody tr:gt('+num+')').attr('id', function(){
		return Number($(this).attr('id')) + 1;
	}).find('input[name=chkVal]').attr('value', function(){
		return Number($(this).val()) + 1;
	}).end().find('input[name=inPrjGroup]').attr('value', function(){
		if(myPrjDepth == '0'){
			return Number($(this).val()) + 1;
		}else if(myPrjDepth == '1'){
			if(myPrjGroup == $(this).val()){
				$(this).parent('td').find('input[name=inPrjStep]').attr('value', function(){
					return sumStep++;
				});
			}
			return Number($(this).val()) + 1;
		}else{
			if(myPrjGroup == $(this).val){
				$(this).parent('td').find('input[name=inPrjStep]').attr('value', function(){
					return Number($(this).parent('td').find('input[name=inPrjStep]').val()) + 1;
				});
			}
			return $(this).val();
		}
	}).end().find('button').text(function(){
		return numFormat(Number($(this).text()) + 1);
	}).end().find('a').attr('onclick', function(){
		if($(this).attr('onclick').indexOf('createChildList') != -1){
			return 'createChildList('+$(this).parents("tr").attr("id")+')';
		}else if($(this).attr('onclick').indexOf('createParentList') != -1){
			return 'createParentList('+$(this).parents("tr").attr("id")+')';
		}else {
			return 'createList('+$(this).parents("tr").attr("id")+')';
		}
	});
	
	if(myPrjDepth == '0'){
		$('#tbody tr:eq('+num+')').after(screenWriteTbody(num+1, Number(myPrjGroup)+1, 0, 0, '', '', '', '', '', 0, ''));
	}else if(myPrjDepth == '1'){
		$('#tbody tr:eq('+num+')').after(screenWriteTbody(num+1, Number(myPrjGroup)+1, 0, 0, '', '', '', '', '', 0, ''));
	}else{
		$('#tbody tr:eq('+num+')').after(screenWriteTbody(num+1, myPrjGroup, Number(myPrjStep)+1, Number(myPrjDepth)-1, '', '', '', '', '', 0, ''));
	}
	subData.cnt = $('#tbody tr').length;
}

// 목록 추가
function createList(num) {
	var myPrjGroup = $('#tbody tr:eq('+num+')').find('input[name=inPrjGroup]').val();
	var myPrjStep = $('#tbody tr:eq('+num+')').find('input[name=inPrjStep]').val();
	var myPrjDepth = $('#tbody tr:eq('+num+')').find('input[name=inPrjDepth]').val();
	$('#tbody tr:gt('+num+')').attr('id',function(){
		return Number($(this).attr('id')) + 1;
	}).find('input[name=chkVal]').attr('value', function(){
		return Number($(this).val()) + 1;
	}).end().find('input[name=inPrjGroup]').attr('value', function(){
		if($(this).val() == myPrjGroup) {
			if(myPrjStep == '0') {
				return Number($(this).val()) + 1;
			}else {
				$(this).parent('td').find('input[name=inPrjStep]').attr('value', function(){
					return Number($(this).parent('td').find('input[name=inPrjStep]').val()) + 1;
				});
				return $(this).val();
			}
		}else if(myPrjStep != '0') {
			return $(this).val();
		}else {
			return Number($(this).val()) + 1;
		}
	}).end().find('button').text(function(){
		return numFormat(Number($(this).text()) + 1);
	}).end().find('a').attr('onclick', function(){
		if($(this).attr('onclick').indexOf('createChildList') != -1) {
			return 'createChildList('+$(this).parents("tr").attr("id")+')';
		}else if($(this).attr('onclick').indexOf('createParentList') != -1) {
			return 'createParentList('+$(this).parents("tr").attr("id")+')';
		}else {
			return 'createList('+$(this).parents("tr").attr("id")+')';
		}
	});
	if(myPrjStep == '0') {
		$('#tbody tr:eq('+num+')').after(screenWriteTbody(num+1, Number(myPrjGroup)+1, 0, 0, '', '', '', '', '', 0, ''));
	}else {
		$('#tbody tr:eq('+num+')').after(screenWriteTbody(num+1, myPrjGroup, Number(myPrjStep)+1, myPrjDepth, '', '', '', '', '', 0, ''));
	}
	subData.cnt = $('#tbody tr').length;
}

//하위추가
function createChildList(num) {
	var myPrjGroup = $('#tbody tr:eq('+num+')').find('input[name=inPrjGroup]').val();
	var myPrjStep = $('#tbody tr:eq('+num+')').find('input[name=inPrjStep]').val();
	var myPrjDepth = $('#tbody tr:eq('+num+')').find('input[name=inPrjDepth]').val();
	$('#tbody tr:gt('+num+')').attr('id',function(){
		return Number($(this).attr('id'))+1;
	}).find('input[name=chkVal]').attr('value', function(){
		return Number($(this).val()) + 1;
	}).end().find('input[name=inPrjStep]').attr('value', function(){
		if($(this).parent('td').find('input[name=inPrjGroup]').val() == myPrjGroup) {
			return Number($(this).val()) + 1;
		}else {
			return $(this).val();
		}
	}).end().find('button').text(function(){
		return numFormat(Number($(this).text()) + 1);
	}).end().find('a').attr('onclick', function(){
		if($(this).attr('onclick').indexOf('createChildList') != -1) {
			return 'createChildList('+$(this).parents("tr").attr("id")+')';
		}else if($(this).attr('onclick').indexOf('createParentList') != -1) {
			return 'createParentList('+$(this).parents("tr").attr("id")+')';
		}else {
			return 'createList('+$(this).parents("tr").attr("id")+')';
		}
	});
	$('#tbody tr:eq('+num+')').after(screenWriteTbody(num+1, myPrjGroup, Number(myPrjStep)+1, Number(myPrjDepth)+1, '', '', '', '', '', 0, ''));

	subData.cnt = $('#tbody tr').length;
}

//전체체크
function checkAll(bool) {
	var chkVal = document.getElementsByName("chkVal");
	for (var i = 0; i < chkVal.length; i++) {
		chkVal[i].checked = bool;
	}
}
// 삭제처리
function checkListRemove() {
	var isc = 0;
	while(true) {
		var chkVal = document.getElementsByName("chkVal");
		for (var i=0,cnt=0; i<chkVal.length; i++) {
			if(chkVal[i].checked) {
				cnt++;
			}
		}
		if(cnt==0) {
			break;
		}
		isc++;
		for (var i=0; i<chkVal.length; i++) {
			if(chkVal[i].checked) {
				var myPrjGroup = $('#tbody tr:eq('+chkVal[i].value+')').find('input[name=inPrjGroup]').val();
				var myPrjStep = $('#tbody tr:eq('+chkVal[i].value+')').find('input[name=inPrjStep]').val();
				$('#tbody tr:gt('+chkVal[i].value+')').attr('id',function(){
					return Number($(this).attr('id')) - 1;
				}).find('input[name=chkVal]').attr('value', function(){
					return Number($(this).val()) - 1;
				}).end().find('input[name=inPrjGroup]').attr('value',function(){
					if(myPrjGroup == $(this).val() && myPrjStep != '0') {
						$(this).parent('td').find('input[name=inPrjStep]').attr('value', function(){
							return Number($(this).parent('td').find('input[name=inPrjStep]').val()) - 1;
						});
						return $(this).val();
					}else if(myPrjStep != '0') {
						return $(this).val();
					}else {
						return Number($(this).val()) - 1;
					}
				}).end().find('button').text(function(){
					return numFormat(Number($(this).text()) - 1);
				}).end().find('a').attr('onclick', function(){
					if($(this).attr('onclick').indexOf('createChildList') != -1) {
						return 'createChildList('+$(this).parents("tr").attr("id")+')';
					}else if($(this).attr('onclick').indexOf('createParentList') != -1) {
						return 'createParentList('+$(this).parents("tr").attr("id")+')';
					}else {
						return 'createList('+$(this).parents("tr").attr("id")+')';
					}
				});
				$('#tbody tr:eq('+chkVal[i].value+')').remove();
				break;
			}
		}
	}
	if(isc==0) {
		swal("삭제", '선택해주세요');
	}
	if($('#tbody tr').length == 0) {
		baseData.chk = false;
	}
	subData.cnt = $('#tbody tr').length;
}

//배열로 반환한다.
function byNameArray(data) {
	var dataArray = new Array();
	for(var i=0; i<data.length; i++) {
		dataArray[i] = data[i].value;
	}
	return dataArray;
}



// 프로젝트 WBS 저장 전 검사
function insertProjectWbsList(){
	
	
	
	var prjWorkNames = byNameArray(document.getElementsByName("inPrjWorkName"));
	var prjWbsStarts = byNameArray(document.getElementsByName("wbsStart"));
	var prjWbsEnds = byNameArray(document.getElementsByName("wbsEnd"));
	
	var prjStart = document.getElementsByName("wbsStart");
	var prjEnd = document.getElementsByName("wbsEnd");
	
	var startCal = $('#prjStart').val();
	var endCal = $('#prjEnd').val().split("-");
	
	var chk = true;
	// split 하지 않고 하이픈을 제거하는 방법
	var testc = startCal.replace(/-/gi , "");
	
	
	
	for(var i=0; i<prjWorkNames.length; i++){
			if(prjWorkNames[i].trim() == '' || prjWorkNames[i].trim().length == 0){
				alert('업무구분 작업명을 모두 입력해주세요.')
				chk = false;
				break;
			}
			
		}
	
	for(var i=0; i<prjWbsStarts.length; i++){
			if(prjWbsStarts[i].trim() == '' || prjWbsStarts[i].trim().length == 0){
				alert('작업 시작일을 모두 입력해주세요.')
				chk = false;
				break;
			}
		}
	for(var i=0; i<prjWbsEnds.length; i++){
			if(prjWbsEnds[i].trim() == '' || prjWbsEnds[i].trim().length == 0){
				alert('작업 종료일을 모두 입력해주세요.')
				chk = false;
				break;
			}
		}
	
	if(chk){
		insertProjectWbsListAjax();
	}else{
		
	}
}

// 프로젝트 WBS 저장
var insertProjectWbsListAjax = function(){
	
	$.ajax({
		url: '/user/insertProjectWbsListAjaxCon',
		type: 'post',
		async: false,
		data: $('#insertProjectWbsList').serialize(),
		success: function(msg){
			if(msg){
				swal('저장', '저장에 성공했습니다.');
			}else{
				swal('저장', '저장에 실패했습니다.');
			}
		},
		error : function(msg){
			alert(msg);
		}
	});
	
}

//totalDays 문자열을 쪼개서 날짜만큼 inPrjTotalDays를 만들어 둠.
function totalDaysAnalysis(data, cnt) {
	var tag = new StringBuffer();
	for(var i=0; i<cnt; i++) {
			tag.append("<td style='display: none;'><input type='hidden' name='inPrjTotalDays' value='0'></td>");
		}
	return tag.toString();
}

//프로젝트 달력
function calendarModal() {
	$("#calendarModal").modal();
	
	var calendarEl = document.getElementById('calendar');
	  
	var calendar = new FullCalendar.Calendar(calendarEl, {
		plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
	  	header: {
      		left: 'prev,next today',
      		center: 'title',
     		right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      	},
     	defaultDate: new Date(),
      	locale: 'ko',
      	navLinks: true, // can click day/week names to navigate views
      	businessHours: true, // display business hours
      	editable: false,
    });
	
	var prjCode = $('#prjCode').val();
	$.ajax({
		type: "post",
		url: "/user/selectProjectWbsOnCalendar",
		data: {prjCode : prjCode},
		dataType: "json",
		success:function(projectWbsList){
			for(ProjectWbsDto projectWbs : projectWbsList){
				if(projectWbs.prjDepth==0) var color = "#000000";
				if(projectWbs.prjDepth==1) var color = "#000000";
				if(projectWbs.prjDepth==2) var color = "#000000";
				if(projectWbs.prjDepth==3) var color = "#000000";
				if(projectWbs.prjDepth==4) var color = "#000000";
				if(projectWbs.prjDepth==5) var color = "#000000";
				if(projectWbs.prjDepth==6) var color = "#000000";
				if(projectWbs.prjDepth==7) var color = "#000000";
				if(projectWbs.prjDepth==8) var color = "#000000";
				if(projectWbs.prjDepth==9) var color = "#000000";
				calendar.addEvent({
	            	title: projectWbs.prjWorkName,
	                start: projectWbs.prjWbsStart,
	                end: projectWbs.prjWbsEnd,
	                color: color
	            });
			}
		}
	});
    calendar.render();
}
}


