package com.bitgroupware.commute.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bitgroupware.commute.vo.CommuteVo;
import com.bitgroupware.member.vo.MemberVo;

public interface CommuteRepository extends JpaRepository<CommuteVo, Integer>{

	List<CommuteVo> findByMemberVo(MemberVo member);
	
}
