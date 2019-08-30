package com.bitgroupware.etc.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bitgroupware.company.vo.TeamVo;
import com.bitgroupware.etc.service.OrganizationChartService;
import com.bitgroupware.member.vo.MemberVo;

@Controller
@RequestMapping("/user")
public class OrganizationChartController {

	@Autowired
	private OrganizationChartService organizationChartService;
	
	@RequestMapping("/selectOrganizationChartList")
	public String selectOrganizationChartList(Model model, String deptName){
		MemberVo header = organizationChartService.selectHeaderBydeptName(deptName);
		List<TeamVo> teamList = organizationChartService.selectTeamListByDeptName(deptName);
		model.addAttribute("teamList",teamList);
		for(int i=0;i<teamList.size();i++) {
			List<MemberVo> teamMemberList = organizationChartService.selectMemberListByTeam(teamList.get(i));
			int leader = 99;
			for(int j=0;j<teamMemberList.size();j++) {
				if(teamMemberList.get(j).getRanks().getRanks().equals("팀장")) {
					model.addAttribute("teamleader"+i,teamMemberList.get(j));
					leader = j;
				}
			}
			teamMemberList.remove(leader);
			model.addAttribute("teamMemberList"+i,teamMemberList);
		}
		model.addAttribute("deptName", deptName);
		model.addAttribute("header", header);
		return "etc/organizationChartList";
	}
}
