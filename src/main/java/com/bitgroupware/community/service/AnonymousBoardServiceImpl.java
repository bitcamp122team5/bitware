package com.bitgroupware.community.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.bitgroupware.community.persistence.AnonymousBoardRepository;
import com.bitgroupware.community.vo.AnonymousBoardVo;
import com.bitgroupware.community.vo.QAnonymousBoardVo;
import com.bitgroupware.utils.Search;
import com.querydsl.core.BooleanBuilder;

@Service
public class AnonymousBoardServiceImpl implements AnonymousBoardService{

	@Autowired
	private AnonymousBoardRepository anonymousBoardRepo;
	
	public Page<AnonymousBoardVo> selectAnonymousBoardList(Search search) {
		
		BooleanBuilder builder = new BooleanBuilder();

		QAnonymousBoardVo qAnonymousBoard = QAnonymousBoardVo.anonymousBoardVo;

		if (search.getSearchCondition().equals("TITLE")) {
			builder.and(qAnonymousBoard.btitle.like("%" + search.getSearchKeyword() + "%"));
		} else if (search.getSearchCondition().equals("CONTENT")) {
			builder.and(qAnonymousBoard.bcontent.like("%" + search.getSearchKeyword() + "%"));
		}

		Pageable pageable = PageRequest.of(0, 10, Sort.Direction.DESC, "bno");

		return anonymousBoardRepo.findAll(builder, pageable);
	}

	public List<AnonymousBoardVo> selectAnonymousBoardList() {
		return anonymousBoardRepo.findAll();
	}

	public void insertAnonymousBoard(AnonymousBoardVo anonymousBoard) {
		anonymousBoardRepo.save(anonymousBoard);
	}
}
