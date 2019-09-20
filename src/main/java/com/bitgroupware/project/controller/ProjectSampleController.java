package com.bitgroupware.project.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bitgroupware.community.vo.NoticeVo;
import com.bitgroupware.member.vo.MemberVo;
import com.bitgroupware.project.beans.MemberDto;
import com.bitgroupware.project.beans.ProjectInfoDto;
import com.bitgroupware.project.beans.ProjectMembersDto;
import com.bitgroupware.project.beans.ProjectRiskDto;
import com.bitgroupware.project.beans.ProjectWbsDto;
import com.bitgroupware.project.persistence.ProjectDao;
import com.bitgroupware.project.service.ProjectService;
import com.bitgroupware.project.util.Analysis;

@Controller
@RequestMapping("/user")
public class ProjectSampleController {

	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private ProjectDao dao;
	
	@RequestMapping("/createProject")
	@ResponseBody
	public String createProject() {
		System.out.println("진입");
		for(int i=1; i<=350; i++) {
			ProjectInfoDto prj = new ProjectInfoDto();
			
			prj.setPrjName("샘플프로젝트");
			prj.setPrjMothercompany("샘플컴퍼니");
			prj.setPrjDeposit(30000000);
			prj.setPrjWorkingExpenses(300000000);
			prj.setPrjStart("2019-03-27");
			prj.setPrjEnd("2020-12-10");
			prj.setPrjPm("권재범");
			System.out.println(prj);
			dao.insertProjectSamples(prj);
		}
		return "Projects created completely";
	}
	
	@RequestMapping("/createProjectMember")
	@ResponseBody
	public String createProjectMember() {
		
		ProjectMembersDto mem = new ProjectMembersDto();
		
		for(int i=1; i<=350; i++) {
			
			if(i%2==0) {
				mem.setMemId("20190327005");
				mem.setPrjCode(i);
				dao.insertProjectMemberSamples(mem);
				mem.setMemId("20190327010");
				mem.setPrjCode(i);
				dao.insertProjectMemberSamples(mem);
				mem.setMemId("20190327016");
				mem.setPrjCode(i);
				dao.insertProjectMemberSamples(mem);
			}else{
				mem.setMemId("20190327005");
				mem.setPrjCode(i);
				dao.insertProjectMemberSamples(mem);
				mem.setMemId("20190327011");
				mem.setPrjCode(i);
				dao.insertProjectMemberSamples(mem);
				mem.setMemId("20190327017");
				mem.setPrjCode(i);
				dao.insertProjectMemberSamples(mem);
			}
		}
		return "ProjectMember created completely";
	}
	
	@RequestMapping("/createProjectRisk")
	@ResponseBody
	public String createProjectRisk() {
		Date today = new Date();
		
		for(int i=1; i<=350; i++) {
			for(int j=0; j<=350; j++) {
				ProjectRiskDto rsk = new ProjectRiskDto();
				
				rsk.setRskTitle("샘플 위험관리대장 제목");
				rsk.setRskContent("샘플 내용");
				rsk.setRskReg(today);
				rsk.setRskWriter("20190327005");
				rsk.setMemName("권재범");
				rsk.setRskSolution("결과 솔루션");
				rsk.setRskResult("결과 샘플");
				rsk.setFileCheck("Y");
				rsk.setPrjCode(i);
				dao.insertProjectRiskSamples(rsk);
			}
		}
		return "Project Risk created completely";
	}
}
