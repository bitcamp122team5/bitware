package com.bitgroupware.commute.service;

import java.util.List;

import com.bitgroupware.commute.vo.CommuteVo;
import com.bitgroupware.member.vo.MemberVo;

public interface CommuteService {

	void insertOntime(CommuteVo commuteVo);

	List<CommuteVo> selectCommuteList(MemberVo member);

}
