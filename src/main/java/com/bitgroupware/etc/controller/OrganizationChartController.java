package com.bitgroupware.etc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bitgroupware.member.vo.MemberVo;

@Controller
public class OrganizationChartController {

//	@Autowired
//	private OrganizationChartService organizationChartService;
	
	@RequestMapping("/selectOrganizationChartList")
	public List<MemberVo> selectOrganizationChartList(){
		return null;
	}
}
