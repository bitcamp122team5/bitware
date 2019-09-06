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
	//@Select("SELECT M.MEM_ID, M.MEM_NAME, D.DEPT_NAME FROM MEMBER AS M JOIN DEPARTMENT AS D ON M.DEPT_NAME = D.DEPT_NAME")
	@Select("SELECT * FROM MEMBER")
	List<MemberDto> selectMemberList();
	
	//부서명불러오기
	@Select("SELECT * FROM DEPARTMENT")
	List<DepartmentDto> selectDepList();
	
	@Select("SELECT * FROM MEMBER WHERE MEM_ID = #{memId}")
	public MemberDto selectMemeberInfo(String memId);
	
	@Insert("INSERT INTO CHAT_MESSAGE (SENDER, CONTENT, RECEIVER, ROOM_ID) VALUES (#{sender},#{content},#{receiver},#{roomId})")
	void insertChat(ChatMessageDto chatDto);
	
	//@Select("select max(message_id), sender, content, receiver, room_id from chat_message group by room_id having receiver = #{receiver}")
	//@Select("select max(message_id), sender, content, receiver, room_id from chat_message where receiver = #{receiver} group by room_id")
	@Select("select max(message_id), sender, content, receiver, room_id from chat_message group by room_id")
	List<ChatMessageDto> selectLastContentList();
	//public ChatMessageDto selectLastContentList(String receiver);
	
	@Select("select * from member where dept_name = #{deptName}")
	List<MemberDto> selectMemberListByDepartment(String deptName);
	
	
	
}
