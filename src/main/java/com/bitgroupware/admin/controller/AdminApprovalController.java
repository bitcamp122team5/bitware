package com.bitgroupware.admin.controller;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bitgroupware.approval.beans.ApprovalDocumentDto;
import com.bitgroupware.approval.beans.ApprovalFileDto;
import com.bitgroupware.approval.persistence.ApprovalDocumentDao;
import com.bitgroupware.approval.service.ApprovalDocService;


@Controller
@RequestMapping("/admin")
public class AdminApprovalController {
	
	@Autowired
	private ApprovalDocService approvalService;
	
	@Autowired
	private ApprovalDocumentDao approvalDocumentDao;
	
	private static String UPLOAD_DIR = System.getProperty("user.dir") + "/src/main/resources/static/images/";
	
	// 문서리스트
	@RequestMapping("/selectApprovalDocList")
	public String selectApprovalDocList(Model model) {
		List<ApprovalDocumentDto> approvalDocList = approvalService.selectApprovalDocList();
		model.addAttribute("approvalDocList",approvalDocList);
		return "admin/approval/approvalDocList";
	}
	
	// 등록페이지(insert+update)
	@RequestMapping("/insertApprovalDocView")
	public String insertApprovalDocView(Model model,ApprovalDocumentDto apdocDto) {
		System.out.println(apdocDto.toString());
		if(apdocDto.getApdocNo() != null) { // 수정할 때 필요 해서  Dto 가져감
			apdocDto = approvalService.selectApprovalDoc(apdocDto.getApdocNo());
			model.addAttribute("apdocDto",apdocDto);
			System.out.println(apdocDto.toString());
		}
		return "admin/approval/approvalDocWrite";
	}
	
	
	// 등록(insert+update)
	@RequestMapping("/insertApprovalDoc")
	public String insertApprovalDoc(Model model, ApprovalDocumentDto apdocDto, ApprovalFileDto apfileDto) {
		System.out.println(apdocDto.toString());
		String apFilename = "Empty";
		String path = UPLOAD_DIR;
		
		if (!apfileDto.getFile().isEmpty()) {
			apFilename = apfileDto.getFile().getOriginalFilename();
			try {
				
				System.out.println("path"+path);
				apfileDto.getFile().transferTo(new File(path + apFilename));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		System.out.println(apdocDto.toString());
		apfileDto.setApFileurl(path+apFilename);
		apfileDto.setApFilename(apFilename);
		
		approvalService.insertApprovalDoc(apdocDto);
		
		String apdocNo = approvalDocumentDao.selectMaxApNo();
		apfileDto.setApdocNo(apdocNo);
		
		approvalService.insertApprovalDocFile(apfileDto);
		
		return "redirect:/admin/selectApprovalDocList";
	}
	
	// 삭제
	@RequestMapping("/deleteApprovalDoc")
	public String deleteApprovalDocList(Model model,ApprovalDocumentDto apdocDto) {
		approvalService.deleteApprovalDoc(apdocDto);
		return "redirect:/admin/selectApprovalDocList";
	}
}
