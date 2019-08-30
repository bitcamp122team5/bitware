package com.bitgroupware.chat.persistence;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.bitgroupware.chat.Beans.ChatMessageDto;
import com.bitgroupware.chat.Beans.DepartmentDto;
import com.bitgroupware.chat.Beans.MemberDto;


@Mapper
public interface ChatDao {
	
	//직원불러오기
	@Select("SELECT M.MEM_ID, M.MEM_NAME, D.DEPT_NAME FROM MEMBER AS M JOIN DEPARTMENT AS D ON M.DEPT_NAME = D.DEPT_NAME")
	List<MemberDto> selectMemberList();
	
	//부서명불러오기
	@Select("SELECT * FROM DEPARTMENT")
	List<DepartmentDto> selectDepList();
	
	@Select("SELECT * FROM MEMBER WHERE MEM_ID = #{memId}")
	public MemberDto selectMemeberInfo(String memId);
	
	@Insert("INSERT INTO CHAT_MESSAGE (SENDER, CONTENT, RECEIVER, ROOM_ID) VALUES (#{sender},#{content},#{receiver},#{roomId})")
	void insertChat(ChatMessageDto chatDto);
	 
}
