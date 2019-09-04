package com.bitgroupware;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bitgroupware.community.service.NoticeService;
import com.bitgroupware.community.vo.NoticeVo;
import com.bitgroupware.member.utils.Role;
import com.bitgroupware.security.config.SecurityUser;

@Controller
@RequestMapping("/user")
public class MainController {

	@Autowired
	NoticeService noticeService;

	@RequestMapping("/")
	public String index(Model model, @AuthenticationPrincipal SecurityUser principal) {

		if (principal.getMember().getRole()==(Role.ROLE_ADMIN)) {
			return "admin";
		} else {
			
			List<NoticeVo> noticeList = noticeService.selectMainNoticeList();

			Date date = new Date();
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			String today = format.format(date);

			model.addAttribute("noticeList", noticeList);
			model.addAttribute("today", today);

			return "index";
		}
	}

}
