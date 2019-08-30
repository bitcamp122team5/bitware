package com.bitgroupware.member.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bitgroupware.company.vo.DepartmentVo;
import com.bitgroupware.company.vo.TeamVo;
import com.bitgroupware.member.vo.MemberVo;

public interface MemberRepository extends JpaRepository<MemberVo, String>{
	List<MemberVo> findAllByOrderByMemNameAsc();
	
	@Query(value = "select curdate()", nativeQuery = true)
	String selectCurdate();
	
	@Query(value = "select count(*) from member", nativeQuery = true)
	String selectCountMember();

///////////////////////////조직도 관련///////////////////////////////////////
	
	List<MemberVo> findByTeam(TeamVo team);

	@Query(value = "select * from member where ranks = '부장' and dept_name = ?", nativeQuery = true)
	MemberVo selectHeaderBydeptName(String deptName);
	
///////////////////////////////////////////////////////////////
	
}
