package com.bitgroupware.commute.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bitgroupware.commute.persistence.CommuteRepository;
import com.bitgroupware.commute.vo.CommuteVo;
import com.bitgroupware.member.vo.MemberVo;

@Service
public class CommuteServiceImpl implements CommuteService {
	
	@Autowired
	CommuteRepository commuteRepository;
	
	@Override
	public List<CommuteVo> selectCommuteList(MemberVo memberVo, String startDate, String endDate) {
		return commuteRepository.findByMemberVoAndCommuteDateBetweenOrderByCommuteDateDesc(memberVo, startDate, endDate);
	}

	// 출근시간 기록
	@Override
	public void insertOntime(CommuteVo commuteVo) {
		commuteRepository.save(commuteVo);
	}
	
	// 퇴근시간 기록
	@Override
	public void updateOfftime(CommuteVo commuteVo) {
		commuteRepository.save(commuteVo);
	}

	@Override
	public String selectCurdate() {
		return commuteRepository.selectCurdate();
	}

	@Override
	public String selectCurtime() {
		return commuteRepository.selectCurtime();
	}

	// 오늘 근태 확인
	@Override
	public CommuteVo selectTodayCommute(MemberVo memberVo, String curdate) {
		return commuteRepository.findByMemberVoAndCommuteDate(memberVo, curdate);
	}

}
