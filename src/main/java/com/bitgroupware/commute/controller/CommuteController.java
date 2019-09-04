package com.bitgroupware.commute.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CommuteController {

	@RequestMapping("/user/selectCommuteList")
	public String selectCommuteList() {
		return "mypage/attendance";
	}
}
