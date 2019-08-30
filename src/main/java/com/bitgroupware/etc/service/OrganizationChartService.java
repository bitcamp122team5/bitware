package com.bitgroupware.etc.service;

import java.util.List;

import com.bitgroupware.company.vo.TeamVo;
import com.bitgroupware.member.vo.MemberVo;

public interface OrganizationChartService {

	List<TeamVo> selectTeamListByDeptName(String deptName);

	List<MemberVo> selectMemberListByTeam(TeamVo team);

	MemberVo selectHeaderBydeptName(String deptName);

}
