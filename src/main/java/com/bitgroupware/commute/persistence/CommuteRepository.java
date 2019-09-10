package com.bitgroupware.commute.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bitgroupware.commute.vo.CommuteVo;
import com.bitgroupware.member.vo.MemberVo;

public interface CommuteRepository extends JpaRepository<CommuteVo, Integer>{
	
	List<CommuteVo> findByMemberVoAndCommuteDateBetweenOrderByCommuteDateDesc(MemberVo member, String startDate, String endDate);

	@Query(value = "select curdate()", nativeQuery = true)
	String selectCurdate();

	@Query(value = "select curtime()", nativeQuery = true)
	String selectCurtime();

	CommuteVo findByMemberVoAndCommuteDate(MemberVo memberVo, String curdate);
	
}
