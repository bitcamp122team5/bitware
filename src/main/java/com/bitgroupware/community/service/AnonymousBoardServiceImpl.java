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
		List<AnonymousBoardVo> anonymousBoardList = anonymousBoardRepo.findAllByOrderByBgroupDescAndBstepAsc();
		
		if(anonymousBoardList.size()>0) {
			for(int i=0; i<anonymousBoardList.size();i++) {
				int count = anonymousBoardList.get(i).getBindent();
				if(count>0) {
					for(int j=1;j<=count;j++) {
						anonymousBoardList.get(i).getBindentcnt().add(i);
					}
				}
			}
		}else {
			anonymousBoardRepo.initAutoIncrement();
		}
		return anonymousBoardList;
	}

	public void insertAnonymousBoard(AnonymousBoardVo anonymousBoard) {
		int maxBno = anonymousBoardRepo.selectMaxBno();
		anonymousBoard.setBgroup(maxBno+1);
		anonymousBoard.setBstep(0);
		anonymousBoard.setBindent(0);
		anonymousBoardRepo.save(anonymousBoard);
	}

	public AnonymousBoardVo selectAnonymousBoard(int bno) {
		return anonymousBoardRepo.findById(bno).get();
	}

	public boolean checkPwAjax(int bno, String bpw) {
		if(anonymousBoardRepo.findByBnoAndBpw(bno, bpw)==null) {
			return false;
		}else {
			return true;
		}
	}

	public void updateAnonymousBoard(AnonymousBoardVo anonymousBoard) {
		anonymousBoardRepo.save(anonymousBoard);
	}

	public void deleteAnonymousBoard(int bno) {
		anonymousBoardRepo.deleteById(bno);
	}

	@Override
	public void insertAnonymousBoardReply(AnonymousBoardVo anonymousBoard) {
		int bgroup = anonymousBoard.getBgroup();
		int bstep = anonymousBoard.getBstep();
		
		anonymousBoardRepo.replyShape(bgroup, bstep);
		
		anonymousBoard.setBstep(bstep+1);
		anonymousBoard.setBindent(anonymousBoard.getBindent()+1);
		
		anonymousBoardRepo.save(anonymousBoard);
		
		
	}
}
