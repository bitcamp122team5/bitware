package com.bitgroupware.commute.service;

import java.util.List;

import com.bitgroupware.commute.vo.CommuteVo;
import com.bitgroupware.security.config.SecurityUser;

public interface CommuteService {
	
	List<CommuteVo> selectCommuteList();

	void insertOntime(CommuteVo commuteVo);

}
