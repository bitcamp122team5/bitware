package com.bitgroupware.commute.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bitgroupware.commute.service.CommuteService;
import com.bitgroupware.commute.vo.CommuteVo;
import com.bitgroupware.member.vo.MemberVo;
import com.bitgroupware.security.config.SecurityUser;

@Controller
@RequestMapping("/user")
public class CommuteController {

	@Autowired
	CommuteService commuteService;

	// 근태 목록
	@RequestMapping("/selectCommuteList")
	public String selectCommuteList(Model model, @AuthenticationPrincipal SecurityUser principal, HttpServletRequest httpServletRequest) {

		// 검색에서 선택한 날짜를 받아옴
		String startDate = httpServletRequest.getParameter("startDate");
		String endDate = httpServletRequest.getParameter("endDate");

		// 처음 페이지 로딩 시
		if ((startDate == null) && (endDate == null)) {
			startDate = "1990-01-01";
			endDate = "2099-12-31";
			List<CommuteVo> commuteList = commuteService.selectCommuteList(principal.getMember(), startDate, endDate);
			model.addAttribute("commuteList", commuteList);
		} 
		// 날짜 입력 후 검색한 경우
		else {
			// startDate 혹은 endDate가 입력 안된경우 default 값 주입
			if(startDate == "") startDate = "1990-01-01";
			if(endDate == "") endDate = "2099-12-31";
			List<CommuteVo> commuteList = commuteService.selectCommuteList(principal.getMember(), startDate, endDate);
			model.addAttribute("commuteList", commuteList);
		}

		return "mypage/attendance";
	}

	// 출퇴근
	@RequestMapping("/insertCommute")
	@ResponseBody
	public String insertCommute(CommuteVo commuteVo, @AuthenticationPrincipal SecurityUser principal) {

		MemberVo memberVo = principal.getMember();
		String curdate = commuteService.selectCurdate();
		String curtime = commuteService.selectCurtime();

		commuteVo.setMemberVo(memberVo);

		try {
			// 근태 번호 불러오기
			CommuteVo commute = commuteService.selectTodayCommute(memberVo, curdate);
			int commuteNo = commute.getCommuteNo();
			if ("휴가".equals(commute.getCommuteStatus())) {
				return "휴가중에는 출결할 수 없습니다.";
			} else {
				commuteVo.setCommuteNo(commuteNo);
				commuteVo.setCommuteDate(commute.getCommuteDate());
				commuteVo.setCommuteOntime(commute.getCommuteOntime());
				commuteVo.setCommuteOfftime(curtime);
				// 테스트코드
				System.out.println("출근시간" + Integer.parseInt(commute.getCommuteOntime().replace(":", "")));
				// 구분 정상인경우
				// 출석시간이 09시 01분 00초 이전 && 퇴근시간이 18시 00분 00초 이후 정상
				if(Integer.parseInt(commute.getCommuteOntime().replace(":", "")) < 90100 && Integer.parseInt(curtime.replace(":", "")) >= 180000)
					commuteVo.setCommuteStatus("정상");
				// 출석시간이 09시 01분 00초 부터 지각
				if(Integer.parseInt(commute.getCommuteOntime().replace(":", "")) >= 90100)
					commuteVo.setCommuteStatus("지각");
				// 퇴근시간이  19시 00분 00초 이전 조퇴
				// 지각 여부와 상관 없이 조퇴로 처리
				if(Integer.parseInt(curtime.replace(":", "")) < 180000)
					commuteVo.setCommuteStatus("조퇴");
				//테스트코드 끝
				commuteService.updateOfftime(commuteVo);
				return "퇴근시간 : " + curtime;
			}
		} catch (NullPointerException e) {
			commuteVo.setCommuteDate(curdate);
			commuteVo.setCommuteOntime(curtime);
			commuteService.insertOntime(commuteVo);
			return "출근시간 : " + curtime;
		}
		
	}
}
