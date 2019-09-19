package com.bitgroupware.project.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.bitgroupware.project.beans.MemberDto;
import com.bitgroupware.project.beans.ProjectInfoDto;
import com.bitgroupware.project.beans.ProjectRiskDto;
import com.bitgroupware.project.beans.ProjectWbsDto;
import com.bitgroupware.project.service.ProjectService;
import com.bitgroupware.security.config.SecurityUser;
import com.bitgroupware.utils.Pager;
import com.bitgroupware.utils.Search;

@Controller
@RequestMapping("/user")
public class ProjectController {

	@Autowired
	private ProjectService projectService;
	
	/*전체 프로젝트 조회(+페이징, 검색) */
	@RequestMapping("/selectProjectList")
	public String selectProjectList(Model model, @AuthenticationPrincipal SecurityUser principal, 
									@RequestParam(defaultValue = "1") int curPage, Search search) {
		String sessionRanks = principal.getMember().getRanks().getRanks();
		String seesionDeptName = "";
		if(sessionRanks.equals("대표") || sessionRanks.equals("이사")) {
			seesionDeptName = "경영진";
		}else {
			seesionDeptName = principal.getMember().getDepartment().getDeptName();
		}
		 
		int count;
		count = projectService.countProject(search);
		
		Pager page = new Pager(count, curPage);
		int blockBegin = page.getBlockBegin();
		int blockEnd = page.getBlockEnd();
		
		List<Integer> block = new ArrayList<Integer>();
		for(int i = blockBegin; i <= blockEnd ; i++) {
			block.add(i);
		}
		int begin = page.getPageBegin() -1;
		
		
		List<ProjectInfoDto> prjInfos = projectService.selectProjectList(begin, search);
		
		model.addAttribute("search", search);
		model.addAttribute("block", block);
		model.addAttribute("page", page);
		model.addAttribute("prjInfos", prjInfos);
		model.addAttribute("sessionRanks", sessionRanks);
		model.addAttribute("sessionDeptName", seesionDeptName);
		//참여인원 추가 모달을 위함.
		List<MemberDto> memOfficeInfo = projectService.selectProjectMemberList();
		model.addAttribute("members", memOfficeInfo);
		
		return "project/projectList"; 
	}

	/*참여중인 프로젝트 조회 */
	@RequestMapping("/selectAttendingProjectList")
	public String selectAttendingProjectList(Model model, @AuthenticationPrincipal SecurityUser principal,
											@RequestParam(defaultValue = "1") int curPage, Search search) {
		String sessionId = principal.getMember().getMemId();
		String sessionRanks = principal.getMember().getRanks().getRanks();
		
		String seesionDeptName = "";
		if(sessionRanks.equals("대표") || sessionRanks.equals("이사")) {
			seesionDeptName = "경영진";
		}else {
			seesionDeptName = principal.getMember().getDepartment().getDeptName();
		}
		
		int count;
		count = projectService.countProject(search);
		
		Pager page = new Pager(count, curPage);
		int blockBegin = page.getBlockBegin();
		int blockEnd = page.getBlockEnd();
		
		List<Integer> block = new ArrayList<Integer>();
		for(int i = blockBegin; i <= blockEnd ; i++) {
			block.add(i);
		}
		int begin = page.getPageBegin() -1;
		
		List<ProjectInfoDto> prjInfos = projectService.selectAttendProjectList(begin, search, sessionId);
		
		model.addAttribute("search", search);
		model.addAttribute("block", block);
		model.addAttribute("page", page);
		model.addAttribute("prjInfos", prjInfos);
		model.addAttribute("sessionRanks", sessionRanks);
		model.addAttribute("sessionDeptName", seesionDeptName);
		//참여인원 추가 모달을 위함.
		List<MemberDto> memOfficeInfo = projectService.selectProjectMemberList();
		model.addAttribute("members", memOfficeInfo);
		return "project/projectAttendingList"; 
	}
	
	/*완료된 프로젝트 조회 */
	@RequestMapping("/selectEndProjectList")
	public String selectEndProjectList(Model model,  @AuthenticationPrincipal SecurityUser principal,
										@RequestParam(defaultValue = "1") int curPage, Search search) {
		String sessionRanks = principal.getMember().getRanks().getRanks();
		String seesionDeptName = "";
		if(sessionRanks.equals("대표") || sessionRanks.equals("이사")) {
			seesionDeptName = "경영진";
		}else {
			seesionDeptName = principal.getMember().getDepartment().getDeptName();
		}
		int count;
		count = projectService.countCompletedProject(search);
		
		Pager page = new Pager(count, curPage);
		int blockBegin = page.getBlockBegin();
		int blockEnd = page.getBlockEnd();
		
		List<Integer> block = new ArrayList<Integer>();
		for(int i = blockBegin; i <= blockEnd ; i++) {
			block.add(i);
		}
		int begin = page.getPageBegin() -1;
		
		List<ProjectInfoDto> prjInfos = projectService.selectEndProjectList(begin, search);
		
		model.addAttribute("search", search);
		model.addAttribute("block", block);
		model.addAttribute("page", page);
		model.addAttribute("prjInfos", prjInfos);
		model.addAttribute("sessionRanks", sessionRanks);
		model.addAttribute("sessionDeptName", seesionDeptName);
		//참여인원 추가 모달을 위함.
		List<MemberDto> memOfficeInfo = projectService.selectProjectMemberList();
		model.addAttribute("members", memOfficeInfo);
		
		return "project/projectEndList"; 
	}
	
	/*프로젝트 상세페이지로 이동 및 프로젝트 WBS 불러오기*/
	@RequestMapping("/projectDetail")
	public String selectProjectView(Model model, int prjCode, @AuthenticationPrincipal SecurityUser principal) {
		
		ProjectInfoDto prjInfo = projectService.selectProject(prjCode);
		List<MemberDto> memInfos = projectService.selectProjectAttendMemberList(prjCode);
		List<ProjectWbsDto> prjWbs = projectService.selectProjectWbsList(prjCode);
		String sessionRanks = principal.getMember().getRanks().getRanks();
		String sessionDeptName = "";
		if(sessionRanks.equals("대표") || sessionRanks.equals("이사")) {
			sessionDeptName = "경영진";
		}else {
			sessionDeptName = principal.getMember().getDepartment().getDeptName();
		}
		model.addAttribute("sessionRanks", sessionRanks);
		model.addAttribute("sessionDeptName", sessionDeptName);
		//참여인원 추가 모달을 위함.
		List<MemberDto> memOfficeInfo = projectService.selectProjectMemberList();
		model.addAttribute("members", memOfficeInfo);
		model.addAttribute("prjInfo", prjInfo);
		model.addAttribute("memInfos", memInfos);
		model.addAttribute("prjWbs", prjWbs);
		return "project/projectDetail";
	}
	
	/*프로젝트 수정 */
	@RequestMapping("/updateProject")
	public String updateProject(ProjectInfoDto prjDto) {
		projectService.updateProject(prjDto);
		return "redirect:/user/selectProjectList";
	}
	
	/*프로젝트 생성 */
	@RequestMapping(value="/insertProject", method=RequestMethod.POST)
	public String insertProject(ProjectInfoDto prjDto, HttpServletRequest req) {
		
		
		String[] memArr = req.getParameterValues("memIdChk");
		
		String boojang = "부장";
		MemberDto memDto;
		String pmName = "";
		for(String memId : memArr) {
			memDto = projectService.selectMemberInfos(memId);
			System.out.println("memDto 결과" + memDto);
			System.out.println("memDto.getRanks결과 : "+ memDto.getRanks());
			if(memDto.getRanks().equals(boojang)) {
				pmName = memDto.getMemName();
			}
		}
		prjDto.setPrjPm(pmName);
		String code = "";
		if(projectService.insertProject(prjDto)) {
			
			ProjectInfoDto prjInfo;
			prjInfo = projectService.selectPrjCode();
			 
			for(String memId : memArr) {
				projectService.insertProjectAttendMembers(memId, prjInfo.getPrjCode());
			}
			code = Integer.toString(prjInfo.getPrjCode()); 
		}
		 
		return "redirect:/user/projectDetail?prjCode="+code;
	}
	
	/*프로젝트 완료 처리 */
	@RequestMapping("completeProject")
	public String completeProject(int prjCode) {
		projectService.completeProject(prjCode);
		
		return "redirect:/user/selectEndProjectList";
	}
	
	/*위험관리대장 조회(+페이징, 검색) */
	@RequestMapping("/selectProjectRiskList")
	public String selectProjectRisk(Model model, @AuthenticationPrincipal SecurityUser principal, 
									@RequestParam(defaultValue = "1") int curPage, Search search,
									@RequestParam(defaultValue = "-1") int prjCode) {
		String sessionRanks = principal.getMember().getRanks().getRanks();
		String seesionDeptName = "";
		if(sessionRanks.equals("대표") || sessionRanks.equals("이사")) {
			seesionDeptName = "경영진";
		}else {
			seesionDeptName = principal.getMember().getDepartment().getDeptName();
		}
		System.out.println("prjCode = ===="+prjCode);
		if(prjCode== -1) {
			prjCode=projectService.selectRecentPrjCode();
		}
		
		int count;
		count = projectService.countProjectRisk(search, prjCode);
		Pager page = new Pager(count, curPage);
		int blockBegin = page.getBlockBegin();
		int blockEnd = page.getBlockEnd();
		List<Integer> block = new ArrayList<Integer>();
		for(int i = blockBegin; i <= blockEnd ; i++) {
			block.add(i);
		}
		int begin = page.getPageBegin() -1;
		
		List<ProjectRiskDto > rskDto = projectService.selectProjectRiskList(begin, search, prjCode);
		
		List<ProjectInfoDto> prjInfo = projectService.selectProjectNameList();
		model.addAttribute("prjInfo", prjInfo);
		
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		String today = format.format(date);
		
		ProjectInfoDto prjName = projectService.selectProject(prjCode);
		model.addAttribute("prjName", prjName);
		
		model.addAttribute("search", search);
		model.addAttribute("block", block);
		model.addAttribute("page", page);
		model.addAttribute("rskDtos", rskDto);
		model.addAttribute("today",today);
		model.addAttribute("sessionRanks", sessionRanks);
		model.addAttribute("sessionDeptName", seesionDeptName);
		
		return "project/projectRiskList"; 
	}
	
	
	/*위험관리대장 조회(+페이징, 검색) */
	@RequestMapping("/selectProjectRiskListByPrjName")
	public String selectProjectRisks(Model model, @AuthenticationPrincipal SecurityUser principal, 
									@RequestParam(defaultValue = "1") int curPage, Search search, int prjCode) {
		String sessionRanks = principal.getMember().getRanks().getRanks();
		String seesionDeptName = "";
		if(sessionRanks.equals("대표") || sessionRanks.equals("이사")) {
			seesionDeptName = "경영진";
		}else {
			seesionDeptName = principal.getMember().getDepartment().getDeptName();
		}
		
		int count;
		System.out.println("prjCode value" + prjCode);
		
		count = projectService.countProjectRisk(search, prjCode);
		System.out.println("count value " + count);
		
		ProjectInfoDto prjName = projectService.selectProject(prjCode);
		model.addAttribute("prjName", prjName);
		
		Pager page = new Pager(count, curPage);
		int blockBegin = page.getBlockBegin();
		int blockEnd = page.getBlockEnd();
		List<Integer> block = new ArrayList<Integer>();
		for(int i = blockBegin; i <= blockEnd ; i++) {
			block.add(i);
		}
		int begin = page.getPageBegin() -1;
		
		List<ProjectRiskDto > rskDto = projectService.selectProjectRiskList(begin, search, prjCode);
		
		List<ProjectInfoDto> prjInfo = projectService.selectProjectNameList();
		model.addAttribute("prjInfo", prjInfo);
		
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		String today = format.format(date);
		model.addAttribute("search", search);
		model.addAttribute("block", block);
		model.addAttribute("page", page);
		model.addAttribute("rskDtos", rskDto);
		model.addAttribute("today",today);
		model.addAttribute("sessionRanks", sessionRanks);
		model.addAttribute("sessionDeptName", seesionDeptName);
		
		
		return "project/projectRiskList"; 
	}
	
	
	
	
	/*위험관리대장 상세페이지 이동*/
	@RequestMapping("/selectProjectRiskDetail")
	public String selectProjectRiskView(Model model, int rskCode,  @AuthenticationPrincipal SecurityUser principal) {
		
		String sessionRanks = principal.getMember().getRanks().getRanks();
		String sessionId = principal.getMember().getMemId();
		String sessionDeptName = "";
		if(sessionRanks.equals("대표") || sessionRanks.equals("이사")) {
			sessionDeptName = "경영진";
		}else {
			sessionDeptName = principal.getMember().getDepartment().getDeptName();
		}
		model.addAttribute("sessionRanks", sessionRanks);
		model.addAttribute("sessionDeptName", sessionDeptName);
		model.addAttribute("sessionId", sessionId);
		
		ProjectRiskDto rskDto = projectService.selectProjectRiskDetail(rskCode);
		
		model.addAttribute("rskDto", rskDto);
		
		return "project/projectRiskDetail";
	}
	
	/*위험관리대장 삭제*/
	@RequestMapping("/deleteProjectRisk")
	public String deleteProjectRisk(int rskCode) {
		
		projectService.deleteProjectRisk(rskCode);
		
		return "redirect:/user/selectProjectRiskList";
	}
	
	/*위험관리대장 수정페이지 이동*/
	@RequestMapping("/updateProjectRiskView")
	public String updateProjectRiskView(Model model, int rskCode,  @AuthenticationPrincipal SecurityUser principal) {
		
		String sessionRanks = principal.getMember().getRanks().getRanks();
		String sessionDeptName = "";
		if(sessionRanks.equals("대표") || sessionRanks.equals("이사")) {
			sessionDeptName = "경영진";
		}else {
			sessionDeptName = principal.getMember().getDepartment().getDeptName();
		}
		model.addAttribute("sessionRanks", sessionRanks);
		model.addAttribute("sessionDeptName", sessionDeptName);
		
		ProjectRiskDto rskDto = projectService.selectProjectRiskDetail(rskCode);
		
		model.addAttribute("rskDto", rskDto);
		
		return "project/projectRiskUpdate";
	}
	
	/*위험관리대장 수정*/
	@RequestMapping("/updateProjectRisk")
	public String updateProjectRisk(ProjectRiskDto rskDto) {
		projectService.updateProjectRisk(rskDto);
		
		return "redirect:/user/selectProjectRiskList?prjCode="+rskDto.getPrjCode();
	}
	
	
	/*위험관리대장 작성페이지 이동*/
	@RequestMapping("/insertProjectRiskView")
	public String insertProjectRiskView(Model model, @AuthenticationPrincipal SecurityUser principal) {
		
		String sessionRanks = principal.getMember().getRanks().getRanks();
		String sessionDeptName = "";
		String sessionId = principal.getMember().getMemId();
		String sessionName = principal.getMember().getMemName();
		if(sessionRanks.equals("대표") || sessionRanks.equals("이사")) {
			sessionDeptName = "경영진";
		}else {
			sessionDeptName = principal.getMember().getDepartment().getDeptName();
		}
		model.addAttribute("sessionRanks", sessionRanks);
		model.addAttribute("sessionDeptName", sessionDeptName);
		model.addAttribute("sessionId", sessionId);
		model.addAttribute("sessionName", sessionName);
		
		List<ProjectInfoDto> prjInfo = projectService.selectProjectNameList();
		model.addAttribute("prjInfo", prjInfo);
		
		
		return "project/projectRiskWrite";
	}
	
	/*위험관리대장 작성*/
	@RequestMapping("/insertProjectRisk")
	public String insertProjectRisk(ProjectRiskDto rskDto) {
		
		projectService.insertProjectRisk(rskDto);
		
		return "redirect:/user/selectProjectRiskList?prjCode="+rskDto.getPrjCode();
	}
}
