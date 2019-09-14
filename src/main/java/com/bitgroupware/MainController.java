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
import com.bitgroupware.commute.persistence.CommuteRepository;
import com.bitgroupware.commute.service.CommuteService;
import com.bitgroupware.commute.vo.CommuteVo;
import com.bitgroupware.member.utils.Role;
import com.bitgroupware.security.config.SecurityUser;

@Controller
@RequestMapping("/user")
public class MainController {

	@Autowired
	NoticeService noticeService;
	
	@Autowired
	CommuteService commuteService;
	
	@Autowired
	CommuteRepository commuteRepository;

	@RequestMapping("/")
	public String index(Model model, @AuthenticationPrincipal SecurityUser principal) {
		
		if (principal.getMember().getRole()==(Role.ROLE_ADMIN)) {
			return "admin";
		} else {
			
			// 공지사항
			List<NoticeVo> noticeList = noticeService.selectMainNoticeList();
			
			Date date = new Date();
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			String today = format.format(date);
			
			// 근태
			String startDate = "1990-01-01";
			String endDate = "2099-12-31";
			List<CommuteVo> commuteTotalCount = commuteService.selectCommuteList(principal.getMember(), startDate, endDate);
			List<String> commuteStatusCount = commuteService.selectStatusCount(principal.getMember());
			int totalVacation = principal.getMember().getMemVacation();
			long usedVacation = commuteRepository.countByMemberVoAndCommuteStatus(principal.getMember(), "휴가");
			
			model.addAttribute("noticeList", noticeList);
			model.addAttribute("today", today);
			model.addAttribute("commuteTotalCount", commuteTotalCount);
			model.addAttribute("commuteStatusCount", commuteStatusCount);
			model.addAttribute("totalVacation", totalVacation);
			model.addAttribute("usedVacation", usedVacation);
			
			return "index";
		}
	}

}
