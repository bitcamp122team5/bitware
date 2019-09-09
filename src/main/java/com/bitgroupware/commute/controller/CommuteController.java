package com.bitgroupware.commute.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bitgroupware.commute.service.CommuteService;
import com.bitgroupware.commute.vo.CommuteVo;
import com.bitgroupware.member.vo.MemberVo;
import com.bitgroupware.security.config.SecurityUser;
import com.bitgroupware.utils.Search;

@Controller
@RequestMapping("/user")
public class CommuteController {

	@Autowired
	CommuteService commuteService;

	// 근태 목록
	@RequestMapping("/selectCommuteList")
	public String selectCommuteList(Model model, @AuthenticationPrincipal SecurityUser principal, HttpServletRequest httpServletRequest, String[] status) {

		// 검색에서 선택한 날짜를 받아옴
		String startDate = httpServletRequest.getParameter("startDate");
		String endDate = httpServletRequest.getParameter("endDate");

		// 처음 페이지 로딩 시
		if ((startDate == null) && (endDate == null)) {
			List<CommuteVo> commuteList = commuteService.selectCommuteList(principal.getMember());
			model.addAttribute("commuteList", commuteList);
		} 
		// 날짜 입력 없이 검색한 경우
//		else if ((startDate == "") || (endDate == "")) {}
		// 날짜를 모두 입력 후 검색한 경우
		else {
			List<CommuteVo> commuteList = commuteService.selectCommuteList(principal.getMember(), startDate, endDate, status);
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
