package com.bitgroupware.project.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bitgroupware.project.beans.MemberDto;
import com.bitgroupware.project.beans.ProjectInfoDto;
import com.bitgroupware.project.beans.ProjectMembersDto;
import com.bitgroupware.project.beans.ProjectWbsDto;
import com.bitgroupware.project.service.ProjectService;
import com.bitgroupware.project.util.Analysis;
import com.bitgroupware.security.config.SecurityUser;
import com.bitgroupware.utils.Pager;
import com.bitgroupware.utils.Search;

@Controller
@RequestMapping("/user")
public class ProjectController {

	@Autowired
	private ProjectService projectService;
	
//	/*전체 프로젝트 조회 */
//	@RequestMapping("/selectProjectList")
//	public String selectProjectList(Model model, @AuthenticationPrincipal SecurityUser principal) {
//		String sessionRanks = principal.getMember().getRanks().getRanks();
//		String seesionDeptName = principal.getMember().getDepartment().getDeptName();
//		List<ProjectInfoDto> prjInfos = projectService.selectProjectList();
//		model.addAttribute("prjInfos", prjInfos);
//		model.addAttribute("sessionRanks", sessionRanks);
//		model.addAttribute("sessionDeptName", seesionDeptName);
//		//참여인원 추가 모달을 위함.
//		List<MemberDto> memOfficeInfo = projectService.selectProjectMemberList();
//		model.addAttribute("members", memOfficeInfo);
//		
//		return "project/project"; 
//	}
	
	
//	/*참여중인 프로젝트 조회 */
//	@RequestMapping("/selectAttendingProjectList")
//	public String selectAttendingProjectList(Model model, @AuthenticationPrincipal SecurityUser principal) {
//		String sessionId = principal.getMember().getMemId();
//		String sessionRanks = principal.getMember().getRanks().getRanks();
//		String seesionDeptName = principal.getMember().getDepartment().getDeptName();
//		List<ProjectInfoDto> prjInfos = projectService.selectAttendProjectList(sessionId);
//		model.addAttribute("prjInfos", prjInfos);
//		model.addAttribute("sessionRanks", sessionRanks);
//		model.addAttribute("sessionDeptName", seesionDeptName);
//		//참여인원 추가 모달을 위함.
//		List<MemberDto> memOfficeInfo = projectService.selectProjectMemberList();
//		model.addAttribute("members", memOfficeInfo);
//		return "project/project"; 
//	}
	
	/*전체 프로젝트 조회(+페이징, 검색) */
	@RequestMapping("/selectProjectList")
	public String selectProjectList(Model model, @AuthenticationPrincipal SecurityUser principal, 
									@RequestParam(defaultValue = "1") int curPage, Search search) {
		System.out.println("search 컨트롤러에서 : "+search);
		String sessionRanks = principal.getMember().getRanks().getRanks();
		String seesionDeptName = principal.getMember().getDepartment().getDeptName();
		System.out.println("컨트롤러에서 condition : " + search.getSearchCondition());
		System.out.println("컨트롤러에서 keyword : " + search.getSearchKeyword());
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
		String seesionDeptName = principal.getMember().getDepartment().getDeptName();
		
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
		String seesionDeptName = principal.getMember().getDepartment().getDeptName();
		
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
		String seesionDeptName = principal.getMember().getDepartment().getDeptName();
		model.addAttribute("sessionRanks", sessionRanks);
		model.addAttribute("sessionDeptName", seesionDeptName);
		//참여인원 추가 모달을 위함.
		List<MemberDto> memOfficeInfo = projectService.selectProjectMemberList();
		model.addAttribute("members", memOfficeInfo);
		System.out.println("prjInfo내용 : "+prjInfo);
		model.addAttribute("prjInfo", prjInfo);
		model.addAttribute("memInfos", memInfos);
		model.addAttribute("prjWbs", prjWbs);
		return "project/projectDetail";
	}
	
	/*프로젝트 수정 */
	@RequestMapping("/updateProject")
	public String updateProject(Model model, ProjectInfoDto prjDto) {
//		int code = Integer.parseInt(prjCode.trim());
		
		System.out.println("code 값 : " + prjDto);
		System.out.println(prjDto.getPrjStart()+"이건 start  "+prjDto.getPrjEnd()+"이건 end");
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
		System.out.println("pmName 출력 : "+ pmName);
		prjDto.setPrjPm(pmName);
		System.out.println("prjDto.getPrjPm() 결과 : "+prjDto.getPrjPm());
		if(projectService.insertProject(prjDto)) {
			
			ProjectInfoDto prjInfo;
			prjInfo = projectService.selectPrjCode();
			 
			for(String memId : memArr) {
				projectService.insertProjectAttendMembers(memId, prjInfo.getPrjCode());
			}
		}
		return "redirect:/user/selectProjectList";
	}
	
	/*프로젝트 참여인원 추가 */
	@RequestMapping(value="/insertProjectAttendMembers", method=RequestMethod.POST)
	@ResponseBody
	public String insertProjectAttendMembers(@RequestParam(value="checkBoxArr[]") List<String> checkBoxArr, int prjCode) {
		System.out.println("프로젝트 참여인원 추가 컨트롤러 진입");
		for(String checkBox : checkBoxArr) {
			projectService.insertProjectAttendMembers(checkBox, prjCode);
		}
		System.out.println("프로젝트 참여인원 추가 컨트롤러 작업 완료");
		return "project/projectList";
	}
	
	//Project WBS List 불러오는 ajax
	@RequestMapping(value="selectProjectWbsListAjax", method=RequestMethod.POST)
	@ResponseBody
	public List<ProjectWbsDto> selectProjectWbsListAjax(int prjCode){
		
		System.out.println("selectProjectWbsListAjax 실행 및 결과 값" + projectService.selectProjectWbsList(prjCode));
		System.out.println("매개변수 prjCode : " + prjCode);
		
		return projectService.selectProjectWbsList(prjCode);
	}
	
	//Project WBS List 저장하는 ajax
	@RequestMapping(value="insertProjectWbsListAjaxCon", method=RequestMethod.POST)
	@ResponseBody
	public boolean insertProjectWbsListAjaxCon(ProjectInfoDto prjDto, HttpServletRequest req) {
		
		
		boolean isc = false;
		
		String[] prjTotalDaysSum = req.getParameterValues("inPrjTotalDays");
		
		if(prjTotalDaysSum != null) {
			String[] prjTotalDays = new Analysis(prjDto, prjTotalDaysSum).getTermsFormat();
			List<ProjectWbsDto> lists = new ArrayList<ProjectWbsDto>();
			for(int i = 0; i < prjTotalDays.length; i++) {
				System.out.println("값을 list에 넣는 중 " + i + "번째");
				ProjectWbsDto prjWbsDto = new ProjectWbsDto(prjDto.getPrjCode(),
						Integer.parseInt(req.getParameterValues("inPrjGroup")[i]),
						Integer.parseInt(req.getParameterValues("inPrjStep")[i]),
						Integer.parseInt(req.getParameterValues("inPrjDepth")[i]),
						Integer.parseInt(req.getParameterValues("workCompletion")[i]),
						req.getParameterValues("inPrjWorkName")[i],
						req.getParameterValues("wbsStart")[i],
						req.getParameterValues("wbsEnd")[i],
						req.getParameterValues("inPrjManager")[i],
						req.getParameterValues("inPrjOutput")[i],
						prjTotalDays[i]);
				lists.add(prjWbsDto);
				System.out.println("lists에 들어간 값 : "+lists);
			}
//			for(int i =0; i<prjTotalDays.length; i++) {
//				try {
//					int compare = DateForm.parse(req.getParameterValues("wbsStart")[i]).compareTo(DateForm.parse(prjDto.getPrjStart()));
//					if(compare > 0 || compare == 0) {
//						
//					}else {
//						//날짜 범위 벗어남.
//					}
//				} catch (ParseException e) {
//					e.printStackTrace();
//				}
//			}
			System.out.println("prjDto에서 가져온 코드 값" + prjDto.getPrjCode());
			isc = projectService.deleteProjectWbsList(prjDto.getPrjCode());
			
			isc = projectService.insertProjectWbsList(lists);
			
			System.out.println("출력 결과입니다."+lists);
		}else {
			
			//isc = projectService.deleteProjectWbsList(prjDto.getPrjCode());
		}
		return isc;
	}
	
	/*프로젝트 참여인원 삭제 */
	@RequestMapping(value="deleteProjectAttendMember", method=RequestMethod.POST)
	@ResponseBody
	public void deleteProjectAttendMember(int prjCode, String memId) {
		
		ProjectMembersDto prjMemDto;
		prjMemDto = projectService.selectPrjMemNo(prjCode, memId);
		System.out.println("prjCode : "+prjCode);
		System.out.println("memId : "+memId);
		System.out.println("prjMemNo  :  "+ prjMemDto.getPrjMemNo());
		projectService.deleteProjectAttendMember(prjMemDto.getPrjMemNo());
	}
	
	/*프로젝트 삭제 처리*/
	@RequestMapping(value="deleteProjectAjax", method=RequestMethod.POST)
	@ResponseBody
	public void deleteProjectAjax(@RequestParam(value="prjCodeArr[]") List<Integer> prjCodeArr) {
		for(int prjCode : prjCodeArr) {
			projectService.deleteProject(prjCode);
		}
	}
	
	/*프로젝트 완료 처리 */
	@RequestMapping("completeProject")
	public String completeProject(int prjCode) {
		projectService.completeProject(prjCode);
		
		return "redirect:/user/selectEndProjectList";
	}
	
	@RequestMapping("/selectProjectWbsOnCalendar")
	@ResponseBody
	public List<ProjectWbsDto> selectProjectWbsOnCalendar(int prjCode) {
		return projectService.selectProjectWbsOnCalendar(prjCode);
	}
	
	
//	@RequestMapping("selectProjectPMName")
//	@ResponseBody
//	public String selectProjectPMName (@RequestParam(value="prjCode[]") List<Integer> prjCodes){
//		
//		for(Integer prjCode : prjCodes) {
//			projectService.selectProjectPMName(prjCode);
//		}
//		
//		return "project/project";
//	}
//	
//	@RequestMapping("selectAttendProjectMembersAjax")
//	@ResponseBody
//	public List<MemberDto> selectAttendProjectMembersAjax(int prjCode){
//		
//		List<ProjectInfoDto> prjCodes = projectService.selectPrjCode();
//		List<MemberDto> memDto = null;
//		for(int i=0; i <= prjCodes.size(); i++) {
//			memDto = projectService.selectProjectAttendMemberList(prjCode);
//		}
//		
//		return memDto;
//	}
//	
//	@RequestMapping("/selectProjectMemberListAjax")
//	@ResponseBody
//	public List<ProjectVO> selectProjectMemberListAjax() {
//		
//		
//		return projectService.selectProejctMemberList();
//	}
//	
//	@RequestMapping("/selectProjectMemberList")
//	public String selectProjectMemberList(Model model) {
//		
//		List<ProjectVO> prjLists = projectService.selectProejctMemberList();
//		model.addAttribute("memList", prjLists);
//		return "/project";
//	}
	
}
