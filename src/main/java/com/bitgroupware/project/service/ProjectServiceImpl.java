package com.bitgroupware.project.service;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bitgroupware.project.beans.MemberDto;
import com.bitgroupware.project.beans.ProjectInfoDto;
import com.bitgroupware.project.beans.ProjectMembersDto;
import com.bitgroupware.project.beans.ProjectWbsDto;
import com.bitgroupware.project.persistence.ProjectDao;

@Service("ProjectService")
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	private ProjectDao dao;
	
	//전체 프로젝트 조회 (진행중인 프로젝트)
	@Override
	public List<ProjectInfoDto> selectProjectList() {
		return dao.selectProjectList();
	}
	
	//완료된 프로젝트 조회
	@Override
	public List<ProjectInfoDto> selectEndProjectList() {
		return dao.selectEndProjectList();
	}

	//참여중인 프로젝트 조회
	@Override
	public List<ProjectInfoDto> selectAttendProjectList(String memId) {
		return dao.selectAttendProjectList(memId);
	}

	//프로젝트 상세페이지 조회
	@Override
	public ProjectInfoDto selectProject(int prjCode) {
		return dao.selectProject(prjCode);
	}
	
	/*프로젝트 정보 수정*/
	@Override
	public void updateProject(ProjectInfoDto prjDto) {
		dao.updateProject(prjDto);
	}

	/*프로젝트 정보 생성 */
	@Override
	public boolean insertProject(ProjectInfoDto prjInfoDto) {
		return dao.insertProject(prjInfoDto);
	}
	
	/*프로젝트 참여인원 기본 리스트 출력*/
	@Override
	public List<MemberDto> selectProjectMemberList() {
		return dao.selectProjectMemberList();
	}
	
	/*프로젝트 참여인원 추가(생성)*/
	@Override
	public void insertProjectAttendMembers(String memId, int prjCode) {
		dao.insertProjectAttendMembers(memId, prjCode);
	}

	/*특정 프로젝트 참여인원 리스트 출력 */
	@Override
	public List<MemberDto> selectProjectAttendMemberList(int prjCode) {
		return dao.selectProjectAttendMemberList(prjCode);
	}
	
	/*프로젝트 WBS 정보 불러오기*/
	@Override
	public List<ProjectWbsDto> selectProjectWbsList(int prjCode) {
		return dao.selectProjectWbsList(prjCode);
	}
	
	/*프로젝트 WBS 삭제 */
	@Override
	public boolean deleteProjectWbsList(int prjCode) {
		return dao.deleteProjectWbsList(prjCode) == 1 ? true : false;
	}
	
	/*프로젝트 WBS 생성 */
	@Override
	public boolean insertProjectWbsList(List<ProjectWbsDto> prjWbsDto) {
		
		boolean chk = false;
		for(ProjectWbsDto prjWbsDtos : prjWbsDto) {
		chk = dao.insertProjectWbsList(prjWbsDtos) == 1 ? true : false;
		}
		return chk;
	}
	
	/*프로젝트 삭제 on delete cascade로 참여인원 테이블에서 참여인원도 같이 삭제 됨.*/
	@Override
	public void deleteProject(int prjCode) {
		dao.deleteProject(prjCode);
	}
	
	/*prjCode만 가져오기(완료되지 않은 프로젝트) */
	@Override
	public ProjectInfoDto selectPrjCode() {
		return dao.selectPrjCode();
	}
	

	/*프로젝트 참여인원 삭제 */
	@Override
	public void deleteProjectAttendMember(int prjMemNo) {
		dao.deleteProjectAttendMember(prjMemNo);
	}
	
	/*프로젝트 참여인원 삭제를 위한 주키 추출 */
	@Override
	public ProjectMembersDto selectPrjMemNo(int prjCode, String memId) {
		return dao.selectPrjMemNo(prjCode, memId);
	}
	
	/*프로젝트 완료 처리*/
	@Override
	public void completeProject(int prjCode) {
		dao.completeProject(prjCode);
	}

	/*멤버 아이디로 멤버 정보 뽑아오기*/
	@Override
	public MemberDto selectMemberInfos(String memId) {
		return dao.selectMemberInfos(memId);
	}
	
	/*달력에 wbs List 뿌리기*/
	@Override
	public List<ProjectWbsDto> selectProjectWbsOnCalendar(int prjCode) {
		return dao.selectProjectWbsOnCalendar(prjCode);
	}

	
}
