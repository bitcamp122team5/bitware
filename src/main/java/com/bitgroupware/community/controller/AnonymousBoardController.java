package com.bitgroupware.community.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bitgroupware.community.service.AnonymousBoardService;
import com.bitgroupware.community.vo.AnonymousBoardVo;

@Controller
@RequestMapping("/user")
public class AnonymousBoardController {

	@Autowired
	private AnonymousBoardService anonymousBoardService;
	
//	@RequestMapping("/selectAnonymousBoardList")
//	public String selectAnonymousBoardList(Model model, Search search) {
//		if (search.getSearchCondition() == null)
//			search.setSearchCondition("TITLE");
//		if (search.getSearchKeyword() == null)
//			search.setSearchKeyword("");
//		
//		Page<AnonymousBoardVo> anonymousBoardList = anonymousBoardService.selectAnonymousBoardList(search);
//		
//		model.addAttribute("anonymousBoardList", anonymousBoardList);
//		return "community/anonymousBoardList";
//	}
	
	@RequestMapping("/selectAnonymousBoardList")
	public String selectAnonymousBoardList(Model model) {
		List<AnonymousBoardVo> anonymousBoardList = anonymousBoardService.selectAnonymousBoardList();
		model.addAttribute("anonymousBoardList", anonymousBoardList);
		return "community/anonymousBoardList";
	}
	
	@RequestMapping("/insertAnonymousBoardView")
	public String insertAnonymousBoardView() {
		return "community/anonymousBoardWrite";
	}
	
	@RequestMapping("/insertAnonymousBoard")
	public String insertAnonymousBoard(AnonymousBoardVo anonymousBoard) {
		anonymousBoardService.insertAnonymousBoard(anonymousBoard);
		return "redirect:community/anonymousBoardList";
	}
	
}
