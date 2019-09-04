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
	
	@Autowired
	MemberService MemberService;

	// 근태 목록
	@RequestMapping("/selectCommuteList")
	public String selectCommuteList(Model model) {
		
		List<CommuteVo> commuteList = commuteService.selectCommuteList();
		
		model.addAttribute("commuteList", commuteList);
		
		return "mypage/attendance";
	}
	
	@RequestMapping("/insertOntime")
	@ResponseBody
	public String insertOntime(CommuteVo commuteVo, @AuthenticationPrincipal SecurityUser principal) {
		
		MemberVo memberVo = principal.getMember();
		String curdate = MemberService.selectCurdate();
		
		commuteVo.setMemberVo(memberVo);
		commuteVo.setCommuteDate(curdate);
		
		commuteService.insertOntime(commuteVo);
		return "출근완료";
	}
}
