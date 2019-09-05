package com.bitgroupware.commute.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bitgroupware.commute.service.CommuteService;
import com.bitgroupware.commute.vo.CommuteVo;
import com.bitgroupware.member.service.MemberService;
import com.bitgroupware.member.vo.MemberVo;
import com.bitgroupware.security.config.SecurityUser;

@Controller
@RequestMapping("/user")
public class CommuteController {

	@Autowired
	CommuteService commuteService;

	// 근태 목록
	@RequestMapping("/selectCommuteList")
	public String selectCommuteList(Model model, @AuthenticationPrincipal SecurityUser principal) {

		List<CommuteVo> commuteList = commuteService.selectCommuteList(principal.getMember());

		model.addAttribute("commuteList", commuteList);

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
//			System.out.println("commute = " + commute);
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
