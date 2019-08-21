package com.bitgroupware.project.service;

import java.util.List;

import com.bitgroupware.project.beans.MemberOfficeInfo;
import com.bitgroupware.project.beans.ProjectInfoDto;

public interface ProjectService {
	
	//전체 프로젝트 조회(진행중인 프로젝트)
	public List<ProjectInfoDto> selectProjectList(int prj_completion);
	
	//완료된 프로젝트 조회
	public List<ProjectInfoDto> selectEndProjectList(int prj_completion);
	
	//참여중인 프로젝트 조회
	public List<ProjectInfoDto> selectAttendProjectList(int prj_completion, String mem_id);
	
	//프로젝트 상세페이지 조회
	public ProjectInfoDto selectProject(int prj_code);
	
	/*프로젝트 정보 수정 */
	public ProjectInfoDto updateProject(int prj_code);
	
	/*프로젝트 정보 생성 */
	public void insertProject(ProjectInfoDto prjVO);
	
	/*프로젝트 참여인원 기본 리스트 출력*/
	public List<MemberOfficeInfo> selectProjectMemberList();
	
	/*프로젝트 참여인원 추가(생성)*/
	public void insertProjectAttendMembers(String memId, int prjCode);
	
	/*특정 프로젝트 참여인원 리스트 출력 */
	public List<MemberOfficeInfo> selectProjectAttendMemberList(int prjCode);
}
