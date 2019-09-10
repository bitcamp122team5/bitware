package com.bitgroupware.commute.service;

import java.util.List;

import com.bitgroupware.commute.vo.CommuteVo;
import com.bitgroupware.member.vo.MemberVo;

public interface CommuteService {

	void insertOntime(CommuteVo commuteVo);
	
	void updateOfftime(CommuteVo commuteVo);

	List<CommuteVo> selectCommuteList(MemberVo member);
	
	List<CommuteVo> selectCommuteList(MemberVo memberVo, String startDate, String endDate);
	
	String selectCurdate();
	
	String selectCurtime();

	CommuteVo selectTodayCommute(MemberVo memberVo, String curdate);

}
