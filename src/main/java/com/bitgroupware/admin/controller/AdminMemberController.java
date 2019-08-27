package com.bitgroupware.admin.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bitgroupware.company.vo.DepartmentVo;
import com.bitgroupware.company.vo.RanksVo;
import com.bitgroupware.company.vo.TeamVo;
import com.bitgroupware.member.service.MemberService;
import com.bitgroupware.member.vo.MemberVo;

@Controller
@RequestMapping("/admin")
public class AdminMemberController {
	
	@Autowired
	MemberService memberService;
	
	// 사원 리스트
	@RequestMapping("/selectMemberList")
	public String selectMemberList(Model model, MemberVo memberVo) {
		List<MemberVo> memberList = memberService.selectMemberList(memberVo);
		
		model.addAttribute("memberList", memberList);
		return "admin/member/memberList";
	}
	
	// 사원 등록 페이지
	@RequestMapping("/insertMemberView")
	public String insertMemberView(Model model, DepartmentVo departmentVo, TeamVo teamVo, RanksVo ranksVo) {
		List<DepartmentVo> deptList = memberService.selectDeptList(departmentVo);
		List<RanksVo> rankList = memberService.selectRanksList(ranksVo);
		String curdate = memberService.selectCurdate();
		
		model.addAttribute("deptList", deptList);
		model.addAttribute("rankList", rankList);
		model.addAttribute("curdate", curdate);
		return "admin/member/memberInsert";
	}
	
	// 사원 등록
	@RequestMapping("/insertMember")
	public String insertMember(Model model, MemberVo memberVo) {
		String curdate = memberService.selectCurdate();
		String memCount = memberService.selectCountMember(); //테스트 후 삭제
		String memId = curdate.replace("-", "") + (String.format("%3s", memCount)).replace(" ", "0"); // 테스트 후 삭제
		
		memberVo.setMemId(memId);
		
		memberService.insertMember(memberVo);
		return "redirect:selectMemberList";
	}
	
	// 사원 수정
	@RequestMapping("/updateMember")
	public String updateMember() {
		return "admin/member/memberUpdate";
	}
	
	// 비동기로 Team명 가져오기
	@RequestMapping("/selectTeamByDept")
	@ResponseBody
	public List<String> selectTeamByDept(String deptName) {
		List<TeamVo> teamList = memberService.selectTeamList(deptName);
		List<String> teamName = new ArrayList<String>();
		for(int i = 0; i < teamList.size(); i++) {
			teamName.add(teamList.get(i).getTeamName());
		}
		return teamName;
	}

}
