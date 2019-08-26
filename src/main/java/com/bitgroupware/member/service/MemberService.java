package com.bitgroupware.member.service;

import java.util.List;

import com.bitgroupware.company.vo.DepartmentVo;
import com.bitgroupware.company.vo.RanksVo;
import com.bitgroupware.member.vo.MemberVo;

public interface MemberService {
	
	List<MemberVo> selectMemberList(MemberVo memberVo);
	
	List<DepartmentVo> selectDeptList(DepartmentVo departmentVo);
	
	List<RanksVo> selectRanksList(RanksVo ranksVo);
	
	void insertMember(MemberVo memverVo);
	
	MemberVo selectMember(MemberVo memberVo);
}
