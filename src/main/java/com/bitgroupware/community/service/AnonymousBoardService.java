package com.bitgroupware.community.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.bitgroupware.community.vo.AnonymousBoardVo;
import com.bitgroupware.utils.Search;

public interface AnonymousBoardService {

	Page<AnonymousBoardVo> selectAnonymousBoardList(Search search);

	List<AnonymousBoardVo> selectAnonymousBoardList();

	void insertAnonymousBoard(AnonymousBoardVo anonymousBoard);

	AnonymousBoardVo selectAnonymousBoard(int bno);

	boolean checkPwAjax(int bno, String bpw);

	void updateAnonymousBoard(AnonymousBoardVo anonymousBoard);

	void deleteAnonymousBoard(int bno);

	void insertAnonymousBoardReply(AnonymousBoardVo anonymousBoard);

}
