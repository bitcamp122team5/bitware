package com.bitgroupware.project.persistence;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.bitgroupware.project.beans.MemberDto;
import com.bitgroupware.project.beans.ProjectInfoDto;
import com.bitgroupware.project.beans.ProjectMembersDto;
import com.bitgroupware.project.beans.ProjectWbsDto;

@Mapper
public interface ProjectDao {
	
	//전체 프로젝트 조회(진행중인 프로젝트)
	@Select("SELECT * FROM PROJECT_INFO WHERE PRJ_COMPLETION = 0 ORDER BY PRJ_CODE DESC")
	public List<ProjectInfoDto> selectProjectList();
	
	//완료된 프로젝트 조회
	@Select("SELECT * FROM PROJECT_INFO WHERE PRJ_COMPLETION = 1 ORDER BY PRJ_CODE DESC")
	public List<ProjectInfoDto> selectEndProjectList();
	
	//참여중인 프로젝트 조회
	@Select("SELECT * FROM PROJECT_INFO WHERE PRJ_COMPLETION = 0 AND PRJ_CODE = ANY(SELECT PRJ_CODE FROM PROJECT_MEMBERS WHERE MEM_ID = #{memId}) ORDER BY PRJ_CODE DESC")
	public List<ProjectInfoDto> selectAttendProjectList(String memId);
	
	//프로젝트 상세페이지 조회
	@Select("SELECT * FROM PROJECT_INFO WHERE PRJ_CODE = #{prjCode}")
	public ProjectInfoDto selectProject(int prjCode);
	
	/*프로젝트 정보 수정 */
	@Update("UPDATE PROJECT_INFO SET PRJ_NAME=#{prjName}, PRJ_DEPOSIT=#{prjDeposit}, PRJ_WORKING_EXPENSES=#{prjWorkingExpenses}, PRJ_START=#{prjStart}, PRJ_END=#{prjEnd}, PRJ_MOTHERCOMPANY=#{prjMothercompany} WHERE PRJ_CODE=#{prjCode}")
	public void updateProject(ProjectInfoDto prjDto);
	
	/*프로젝트 정보 생성 */
	@Insert("INSERT INTO PROJECT_INFO (PRJ_NAME, PRJ_DEPOSIT, PRJ_WORKING_EXPENSES, PRJ_START, PRJ_END, PRJ_MOTHERCOMPANY, PRJ_PM) VALUES (#{prjName}, #{prjDeposit}, #{prjWorkingExpenses}, #{prjStart}, #{prjEnd}, #{prjMothercompany}, #{prjPm})")
	public boolean insertProject(ProjectInfoDto prjDto);
	
	/*프로젝트 참여인원 기본 리스트 출력*/
	@Select("SELECT MEM_ID, MEM_NAME, DEPT_NAME, TEAM_NAME, RANKS FROM MEMBER WHERE DEPT_NAME='개발부' "
			+ " ORDER BY (CASE RANKS WHEN '부장' THEN 1 WHEN '팀장' THEN 2 WHEN '사원' THEN 3 END); ")
	public List<MemberDto> selectProjectMemberList();
	
	/*프로젝트 참여인원 추가(생성)*/
	@Insert("INSERT INTO PROJECT_MEMBERS (PRJ_CODE, MEM_ID) VALUES (#{prjCode}, #{memId})")
	public void insertProjectAttendMembers(String memId, int prjCode);
	
	/*특정 프로젝트 참여인원 리스트 출력 */
	@Select("SELECT * FROM MEMBER WHERE MEM_ID = ANY(SELECT MEM_ID FROM PROJECT_MEMBERS WHERE PRJ_CODE = #{prjCode}) ORDER BY (CASE RANKS WHEN '부장' THEN 1 WHEN '팀장' THEN 2 WHEN '사원' THEN 3 END)")
	public List<MemberDto> selectProjectAttendMemberList(int prjCode);

	/*프로젝트 WBS 정보 불러오기*/
	@Select("SELECT PRJ_CODE, PRJ_WORK_NAME, PRJ_GROUP, PRJ_STEP, PRJ_DEPTH, PRJ_MANAGER, PRJ_OUTPUT, PRJ_WBS_START,"
			+ "PRJ_WBS_END, PRJ_WORK_COMPLETION, PRJ_TOTAL_DAYS FROM PROJECT_WBS "
			+ "WHERE PRJ_CODE = #{prjCode} ORDER BY PRJ_GROUP, PRJ_STEP ASC")
	public List<ProjectWbsDto> selectProjectWbsList(int prjCode);
	
	/*프로젝트 WBS 삭제 */
	@Delete("DELETE FROM PROJECT_WBS WHERE PRJ_CODE = #{prjCode}")
	public int deleteProjectWbsList(int prjCode);
	
	/*프로젝트 WBS 생성 */
	public int insertProjectWbsList(ProjectWbsDto prjWbsDto);
	
	/*prjCode만 가져오기(완료되지 않은 프로젝트) */
	@Select("SELECT PRJ_CODE FROM PROJECT_INFO WHERE PRJ_COMPLETION = 0 ORDER BY PRJ_CODE DESC LIMIT 1")
	public ProjectInfoDto selectPrjCode();
	
	/*프로젝트 참여인원 삭제를 위한 주키 추출 */
	@Select("SELECT PRJ_MEM_NO FROM PROJECT_MEMBERS WHERE PRJ_CODE = #{prjCode} AND MEM_ID = #{memId}")
	public ProjectMembersDto selectPrjMemNo(int prjCode, String memId);
	
	/*프로젝트 참여인원 삭제 */
	@Delete("DELETE FROM PROJECT_MEMBERS WHERE PRJ_MEM_NO = #{prjMemNo}")
	public void deleteProjectAttendMember(int prjMemNo);
	
	/*프로젝트 완료 처리*/
	@Update("UPDATE PROJECT_INFO SET PRJ_COMPLETION = 1 WHERE PRJ_CODE = #{prjCode}")
	public void completeProject(int prjCode);
	
	/*멤버 아이디로 멤버 정보 뽑아오기*/
	@Select("SELECT MEM_NAME, DEPT_NAME, TEAM_NAME, RANKS FROM MEMBER WHERE MEM_ID = #{memId}")
	public MemberDto selectMemberInfos(String memId);

	@Select("select * from project_wbs where prj_code = #{prjCode}")
	public List<ProjectWbsDto> selectProjectWbsOnCalendar(int prjCode);
	
}
