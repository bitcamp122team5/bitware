package com.bitgroupware.community.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
		
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		String today = format.format(date);
		
		model.addAttribute("anonymousBoardList", anonymousBoardList);
		model.addAttribute("today",today);
		
		return "community/anonymousBoardList";
	}
	
	@RequestMapping("/insertAnonymousBoardView")
	public String insertAnonymousBoardView() {
		return "community/anonymousBoardWrite";
	}
	
	@RequestMapping("/insertAnonymousBoard")
	public String insertAnonymousBoard(AnonymousBoardVo anonymousBoard) {
		anonymousBoardService.insertAnonymousBoard(anonymousBoard);
		return "redirect:/user/selectAnonymousBoardList";
	}
	
	@RequestMapping("/selectAnonymousBoard")
	public String selectAnonymousBoard(Model model, int bno) {
		AnonymousBoardVo anonymousBoard = anonymousBoardService.selectAnonymousBoard(bno);
		model.addAttribute("anonymousBoard", anonymousBoard);
		return "community/anonymousBoardDetail";
	}
	
	@RequestMapping("/checkPwAjax")
	@ResponseBody
	public boolean checkPwAjax(int bno, String bpw) {
		return anonymousBoardService.checkPwAjax(bno, bpw);
	}
	
	@RequestMapping("/updateAnonymousBoardView")
	public String updateAnonymousBoardView(Model model, AnonymousBoardVo anonymousBoard) {
		model.addAttribute("anonymousBoard",anonymousBoard);
		return "community/anonymousBoardUpdate";
	}
	
	@RequestMapping("/updateAnonymousBoard")
	public String updateAnonymousBoard(AnonymousBoardVo anonymousBoard) {
		anonymousBoardService.updateAnonymousBoard(anonymousBoard);
		return "redirect:/user/selectAnonymousBoardList";
	}
	
	@RequestMapping("/deleteAnonymousBoard")
	public String deleteAnonymousBoard(int bno) {
		anonymousBoardService.deleteAnonymousBoard(bno);
		return "redirect:/user/selectAnonymousBoardList";
	}
	
	@RequestMapping("/insertAnonymousBoardReplyView")
	public String insertAnonymousBoardReplyView(Model model, AnonymousBoardVo anonymousBoard) {
		model.addAttribute("anonymousBoard", anonymousBoard);
		return "community/anonymousBoardReplyWrite";
	}
	
	@RequestMapping("/insertAnonymousBoardReply")
	public String insertAnonymousBoardReply(AnonymousBoardVo anonymousBoard) {
		anonymousBoard.setBtitle(anonymousBoard.getBtitle().replace("re:", ""));
		anonymousBoardService.insertAnonymousBoardReply(anonymousBoard);
		return "redirect:/user/selectAnonymousBoardList";
	}
	
	
}
