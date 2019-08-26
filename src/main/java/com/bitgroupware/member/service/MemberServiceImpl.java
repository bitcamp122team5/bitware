package com.bitgroupware.member.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bitgroupware.company.persistence.DepartmentRepository;
import com.bitgroupware.company.persistence.RanksRepository;
import com.bitgroupware.company.vo.DepartmentVo;
import com.bitgroupware.company.vo.RanksVo;
import com.bitgroupware.member.persistence.MemberRepository;
import com.bitgroupware.member.vo.MemberVo;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	MemberRepository memberRepository;

	@Autowired
	DepartmentRepository departmentRepository;
	
	@Autowired
	RanksRepository ranksRepository;

	// 사원 리스트
	@Override
	public List<MemberVo> selectMemberList(MemberVo memberVo) {
		return (List<MemberVo>) memberRepository.findAll();
	}

	// 부서 리스트
	@Override
	public List<DepartmentVo> selectDeptList(DepartmentVo departmentVo) {
		return (List<DepartmentVo>) departmentRepository.findAll();
	}
	
	// 직급 리스트
	@Override
	public List<RanksVo> selectRanksList(RanksVo ranksVo) {
		return (List<RanksVo>) ranksRepository.findAll();
	}

	// 사원 삽입
	@Override
	public void insertMember(MemberVo memberVo) {
		memberRepository.save(memberVo);
	}

	// 사원 상세보기
	@Override
	public MemberVo selectMember(MemberVo memberVo) {
		return null;
	}

}
