package com.bitgroupware.etc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bitgroupware.company.persistence.TeamRepository;
import com.bitgroupware.company.vo.DepartmentVo;
import com.bitgroupware.company.vo.TeamVo;
import com.bitgroupware.member.persistence.MemberRepository;
import com.bitgroupware.member.vo.MemberVo;

@Service
public class OrganizationChartServiceImpl implements OrganizationChartService{

	@Autowired
	private MemberRepository memberRepo;
	@Autowired
	private TeamRepository teamRepo;

	@Override
	public List<TeamVo> selectTeamListByDeptName(String deptName) {
		DepartmentVo department = new DepartmentVo();
		department.setDeptName(deptName);
		System.out.println(department);
		return teamRepo.findByDepartment(department);
	}

	public List<MemberVo> selectMemberListByTeam(TeamVo team) {
		return memberRepo.findByTeam(team);
	}

	public MemberVo selectHeaderBydeptName(String deptName) {
		return memberRepo.selectHeaderBydeptName(deptName);
	}
	
	
}
