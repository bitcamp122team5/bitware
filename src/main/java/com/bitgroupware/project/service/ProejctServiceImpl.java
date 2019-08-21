package com.bitgroupware.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bitgroupware.project.beans.MemberOfficeInfo;
import com.bitgroupware.project.beans.ProjectInfoDto;
import com.bitgroupware.project.persistence.ProjectDao;

@Service("ProjectService")
public class ProejctServiceImpl implements ProjectService {

	@Autowired
	private ProjectDao dao;
	
	//전체 프로젝트 조회 (진행중인 프로젝트)
	@Override
	public List<ProjectInfoDto> selectProjectList(int prj_completion) {
		return dao.selectProjectList(prj_completion);
	}
	
	//완료된 프로젝트 조회
	@Override
	public List<ProjectInfoDto> selectEndProjectList(int prj_completion) {
		return dao.selectEndProjectList(prj_completion);
	}

	//참여중인 프로젝트 조회
	@Override
	public List<ProjectInfoDto> selectAttendProjectList(int prj_completion, String mem_id) {
		return dao.selectAttendProjectList(prj_completion, mem_id);
	}

	//프로젝트 상세페이지 조회
	@Override
	public ProjectInfoDto selectProject(int prj_code) {
		return dao.selectProject(prj_code);
	}
	
	/*프로젝트 정보 수정*/
	@Override
	public ProjectInfoDto updateProject(int prj_code) {

		return dao.updateProject(prj_code);
	}

	/*프로젝트 정보 생성 */
	@Override
	public void insertProject(ProjectInfoDto prjVO) {

		dao.insertProject(prjVO);
	}
	
	/*프로젝트 참여인원 기본 리스트 출력*/
	@Override
	public List<MemberOfficeInfo> selectProjectMemberList() {

		return dao.selectProejctMemberList();
	}
	
	/*프로젝트 참여인원 추가(생성)*/
	@Override
	public void insertProjectAttendMembers(String memId, int prjCode) {
		
		dao.insertProjectAttendMembers(memId, prjCode);
	}

	/*특정 프로젝트 참여인원 리스트 출력 */
	@Override
	public List<MemberOfficeInfo> selectProjectAttendMemberList(int prjCode) {
		
		return dao.selectProjectAttendMemberList(prjCode);
	}

}
