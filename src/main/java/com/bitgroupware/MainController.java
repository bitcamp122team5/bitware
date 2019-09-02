package com.bitgroupware;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bitgroupware.community.service.NoticeService;
import com.bitgroupware.community.vo.NoticeVo;

@Controller
@RequestMapping("/user")
public class MainController {
	
	@Autowired NoticeService noticeService;
	
	@RequestMapping("/")
	public String index(Model model) {
		
		List<NoticeVo> noticeList = noticeService.selectMainNoticeList();
		
		model.addAttribute("noticeList", noticeList);
		
		return "index";
	}
	
}
