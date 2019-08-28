package com.bitgroupware.approval.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bitgroupware.approval.beans.ApprovalDoucemtDto;
import com.bitgroupware.approval.service.ApprovalDocService;
import com.bitgroupware.approval.service.ApprovalService;

@Controller
public class ApprovalController {
	
	@Autowired
	private ApprovalService approvalService;
	
	@Autowired
	private ApprovalDocService approvalDocService;
	
	// 임시 MAIN
	@RequestMapping("/main")
	public String main() {
		return "approval/main";
	}
	
	// 결재 받을 문서 리스트
	public String selectApprovalListTobe(Model model) {
		
		List<?> approvalListTobe = approvalService.selectApprovalListTobe();
		model.addAttribute("approvalListTobe",approvalListTobe);
		return "approval/approvalTobeList";
		
	}
	
	// 결재 할 문서 리스트
	public String selectApprovalListTo() {
		return null;
	}
	
	// 기안View
	@RequestMapping("/insertApprovalView")
	public String insertApprovalView(Model model) {
		List<ApprovalDoucemtDto> approvalDocList = approvalDocService.selectApprovalDocList();
		model.addAttribute("approvalDocList",approvalDocList);
		return "approval/approvalWrite";
	}
	
	// 기안
	@RequestMapping("/insertApprovalWrite")
	public String insertApproval() {
		return null;
	}
	
	// 읽기
	public String approvalView() {
		return null;
	}
	
	// 삭제
	public String deleteApproval() {
		return null;
	}
	
	// 결재
	public String updateApproval() {
		return null;
	}
}
