package com.bitgroupware.chat.service;

import java.util.List;

import com.bitgroupware.chat.Beans.ChatMessageDto;
import com.bitgroupware.chat.Beans.DepartmentDto;
import com.bitgroupware.chat.Beans.MemberDto;

public interface ChatService {
	
	List<MemberDto> selectMemberList(MemberDto memberDto);
	
	List<DepartmentDto> selectDeptList(DepartmentDto depDto);
	
	void insertChat(ChatMessageDto chatDto);
	
    public MemberDto selectMemeberInfo(String memId); 

    //public ChatMessageDto selectLastContentList(String receiver);
    List<ChatMessageDto> selectLastContentList(ChatMessageDto chatDto);

	List<DepartmentDto> selectDepartureList();

	List<MemberDto> selectMemberListByDepartmentAjax(String deptName);
}
