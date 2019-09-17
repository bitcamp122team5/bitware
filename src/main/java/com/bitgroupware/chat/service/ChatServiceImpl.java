package com.bitgroupware.chat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bitgroupware.chat.Beans.ChatMessageDto;
import com.bitgroupware.chat.Beans.DepartmentDto;
import com.bitgroupware.chat.Beans.MemberDto;
import com.bitgroupware.chat.persistence.ChatDao;

@Service
public class ChatServiceImpl implements ChatService {

	@Autowired
	private ChatDao chatDao;

	@Override
	public List<MemberDto> selectMemberList(MemberDto memberDto) {
		return chatDao.selectMemberList();
	}

	@Override
	public List<DepartmentDto> selectDeptList(DepartmentDto depDto) {
		return chatDao.selectDepList();
	}

	@Override
	public void insertChat(ChatMessageDto chatDto) {
		chatDao.insertChat(chatDto);
	}

	
	@Override 
	public MemberDto selectMemeberInfo(String memId) { 
		return chatDao.selectMemeberInfo(memId); 
	}

	@Override
	public List<DepartmentDto> selectDepartureList() {
		 return chatDao.selectDepList();
	}

	@Override
	public List<MemberDto> selectMemberListByDepartmentAjax(String deptName) {
		return chatDao.selectMemberListByDepartment(deptName);
	}

	@Override
	public List<ChatMessageDto> selectLastContentList(String sender) {
		return chatDao.selectLastContentList(sender);
	}

	@Override
	public List<ChatMessageDto> selectChatMessageList(String roomId) {
		return chatDao.selectChatMessageList(roomId);
	}

	@Override
	public String selectChatMessageListByRoomId(String roomId) {
		return chatDao.selectChatMessageListByRoomId(roomId);
	}

//	@Override
//	public ChatMessageDto selectLastContentList(String receiver) {
//		// TODO Auto-generated method stub
//		return chatDao.selectLastContentList(receiver);
//	}


	
	 
	
	
}
