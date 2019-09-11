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
		// TODO Auto-generated method stub
		return chatDao.selectMemberList();
	}

	@Override
	public List<DepartmentDto> selectDeptList(DepartmentDto depDto) {
		// TODO Auto-generated method stub
		return chatDao.selectDepList();
	}

	@Override
	public void insertChat(ChatMessageDto chatDto) {
		// TODO Auto-generated method stub
		chatDao.insertChat(chatDto);
	}

	
	@Override 
	public MemberDto selectMemeberInfo(String memId) { 
		// TODO Auto-generated method stub
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
		// TODO Auto-generated method stub
		return chatDao.selectLastContentList(sender);
	}

	@Override
	public List<ChatMessageDto> selectChatMessageList(ChatMessageDto chatMessageDto) {
		// TODO Auto-generated method stub
		return chatDao.selectChatMessageList();
	}

//	@Override
//	public ChatMessageDto selectLastContentList(String receiver) {
//		// TODO Auto-generated method stub
//		return chatDao.selectLastContentList(receiver);
//	}


	
	 
	
	
}
