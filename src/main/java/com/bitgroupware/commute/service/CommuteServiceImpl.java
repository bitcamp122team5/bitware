package com.bitgroupware.commute.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import com.bitgroupware.commute.persistence.CommuteRepository;
import com.bitgroupware.commute.vo.CommuteVo;
import com.bitgroupware.security.config.SecurityUser;

@Service
public class CommuteServiceImpl implements CommuteService {
	
	@Autowired
	CommuteRepository commuteRepository;
	
	@Override
	public List<CommuteVo> selectCommuteList() {
		return (List<CommuteVo>) commuteRepository.findAll();
	}
	
	@Override
	public void insertOntime(CommuteVo commuteVo) {
		commuteRepository.save(commuteVo);
	}

}
